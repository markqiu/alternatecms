<template>
  <div>
    <form v-for="warehouse in warehouses" :key="warehouse.id" @submit.prevent="addWarehouse()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Warehouse" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Warehouse</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Status</td>
                      <td>
                        <select id="status" v-model="status" name="template" class="form-category">
                          <option value="open">Open</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Warehouse Name</td>
                      <td>
                        <input v-model="name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <textarea v-model="description" cols="40" rows="10"></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Category</td>
                      <td>
                        <select id="category" v-model="category" name="template" class="form-category">
                          <option v-for="category in findManyCategories" :key="category" :value="category">{{ category.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">City</td>
                      <td>
                        <select id="city" v-model="city" name="template" class="form-category">
                          <option v-for="city in findManyCities" :key="city" :value="city">{{ city.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">State</td>
                      <td>
                        <select id="state" v-model="state" name="template" class="form-category">
                          <option v-for="states in findManyStates" :key="states" :value="states">{{ states.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country</td>
                      <td>
                        <select id="country" v-model="country" name="template" class="form-category">
                          <option v-for="countries in findManyCountries" :key="countries" :value="countries">
                            {{ countries.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Postal Code</td>
                      <td>
                        <input v-model="postal" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Products</td>
                      <td>
                        <input v-model="products" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Image</td>
                      <td>
                        <input v-model="image" type="image" value="Select an image for the warehouse"
                          help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Public</td>
                      <td>
                        <select id="status" v-model="isPublic" name="template" class="form-category">
                          <option value="public">Public</option>
                          <option value="private">Not Public</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import  gql from "graphql-tag";

  import warehouses from "~/graphql/queries/shop/warehouses";
  import  findManyStates from '~/graphql/queries/shop/states'
  import  findManyCountries from '~/graphql/queries/shop/countries'
  import  findManyCities from '~/graphql/queries/shop/cities'
  import findManyCategories from '~/graphql/queries/shop/categories'

  const DELETE_WAREHOUSE = gql`
    mutation ($name: String!,$description: String!,$image: String!,$products: String!,$status: String!,$state: String!,$postal: String!,$country: String!,$isPublic: String!,$city: String!, $category: String!){
    createOneWarehouse(data: {name: $name,description: $description,image: $image,postal: $postal,country: $country,products: $products,status: $status,state: $state,city: $city,isPublic: $isPublic, category: $category}){
      country
        thumbnail
        name
        description
        category
        image
        websites
        products
        postal
        status
        state
        city
        isPublic
    }
}`;

const UPDATE_WAREHOUSE = gql`
  mutation updateOnewarehouses($id: Int!){
  updateOnewarehouses(where: {id: {equals: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Warehouse'
    },
 mounted(){
      this.forceRerender();
  },
  // eslint-disable-next-line vue/order-in-components
  data(){
      return{
          componentKey: 0
      }
  },
  methods: {
   async deleteWarehouse(warehouse){
    await this.$apollo.mutate({
        mutation: DELETE_WAREHOUSE,
        variables: {
          id: warehouse.id
        },
        refetchQueries: [
          {
            query: warehouses
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/shop/warehouses'})
            }).catch(err => console.log(err));
    },
    async updateWarehouse(warehouse){
    await this.$apollo.mutate({
        mutation: UPDATE_WAREHOUSE,
        variables: {
          id: warehouse.id
        },
        refetchQueries: [
          {
            query: warehouses
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    warehouses: {
      query: warehouses,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    },
      findManyStates: {
        prefetch: true,
        query: findManyStates
      },
      findManyCountries: {
        prefetch: true,
        query: findManyCountries
      },
      findManyCategories: {
        prefetch: true,
        query: findManyCategories
      },
      findManyCities: {
        prefetch: true,
        query: findManyCities
    }
  }
}
</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

</style>
