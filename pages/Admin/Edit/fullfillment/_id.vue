<template>
  <div>
    <form @submit.prevent="addFullFillment" >
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save FullFillment" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit FullFillment</a>
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
                      <td style="text-align: right;">Pickup</td>
                      <td>
                        <select id="pickup" v-model="pickup" name="template" class="form-category">
                          <option value="allow">Allows Pickup</option>
                          <option value="noPickups">No Pickups</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Stock</td>
                      <td>
                        <input v-model="stock" name="fullfillmentStock" type="number" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Company Name</td>
                      <td>
                        <input v-model="company" name="fullfillmentCompanyName" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">FullFillment Name</td>
                      <td>
                        <input v-model="name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Phone Number</td>
                      <td>
                        <input v-model="phone" type="phone" placeholder="#" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Shipping Zones</td>
                      <td>
                        <select id="zones" v-model="shipping_zones" name="template" class="form-zones">
                          <option v-for="zones in findManyZones" :key="zones" :value="zones">{{ zones.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Address</td>
                      <td>
                        <input v-model="address" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Address Line 2</td>
                      <td>
                        <input v-model="address_two" type="text" name="addressTwo" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">City</td>
                      <td>
                        <select id="category" v-model="city" name="template" class="form-category">
                          <option v-for="city in findManyCities" :key="city" :value="city">{{ city.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">State</td>
                      <td>
                        <select id="category" v-model="state" name="template" class="form-category">
                          <option v-for="state in findManyStates" :key="state" :value="state">{{ state.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country Area</td>
                      <td>
                        <select id="countryArea" v-model="country_area" name="template" class="form-category">
                          <option value="NA">North America</option>
                          <option value="SA">South America</option>
                          <option value="CA">Central America</option>
                          <option value="EU">Europe</option>
                          <option value="AS">Asia</option>
                          <option value="OA">Oceania</option>
                          <option value="AN">Antartica</option>
                          <option value="AF">Africa</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country</td>
                      <td>
                        <select id="category" v-model="country" name="template" class="form-category">
                          <option v-for="country in findManyCountries" :key="country" :value="country">{{ country.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Zipcode</td>
                      <td>
                        <input v-model="zipcode" name="fullfillmentZipcode" type="text" />
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

  import 
    findManyFullfillments
  from "~/graphql/queries/shop/fullfillments";
  import  findManyStates from '~/graphql/queries/shop/states'
  import  findManyCountries from '~/graphql/queries/shop/countries'
  import  findManyCities from '~/graphql/queries/shop/cities'
  import  findManyZones from "~/graphql/queries/system/zones"
  // import  companys from "~/graphql/queries/shop/companys"

  const DELETE_FULLFILLMENT = gql`
    mutation ($name: String!,$company: String!,$phone: String!,$address: String!,$country_area: String!,$stock: String!,$shipping_zones: String!,$address_two: String!,$state: String!,$zipcode: String!,$country: String!,$pickup: String!,$city: String!,$pickup: String!){
    createOneFullfillments(data: {name: $name,company: $company,phone: $phone,address: $address,country_area: $country_area,zipcode: $zipcode,country: $country,stock: $stock,shipping_zones: $shipping_zones,address_two: $address_two,state: $state,country: $country,city: $city,pickup: $pickup,pickup: $pickup}) {
        country
        countries
        thumbnail
        name
        company
        phone
        address
        country_area
        stock
        shipping_zones
        zipcode
        address_two
        state
        city
        pickup
  }
}`;

const UPDATE_FULLFILLMENT = gql`
  mutation updateOnefullfillments($id: Int!){
  updateOnefullfillments(where: {id: {equals: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Fullfillment'
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
   async deleteFullfillment(fullfillment){
    await this.$apollo.mutate({
        mutation: DELETE_FULLFILLMENT,
        variables: {
          id: fullfillment.id
        },
        refetchQueries: [
          {
            query: fullfillments
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/shop/fullfillments'})
            }).catch(err => console.log(err));
    },
    async updateFullfillment(fullfillment){
    await this.$apollo.mutate({
        mutation: UPDATE_FULLFILLMENT,
        variables: {
          id: fullfillment.id
        },
        refetchQueries: [
          {
            query: fullfillments
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    fullfillments: {
      query: fullfillments,
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
      findManyZones: {
        prefetch: true,
        query: findManyZones
      },
      findManyCities: {
        prefetch: true,
        query: findManyCities
      },
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
