<template>
  <div>
    <form v-for="certificates in findManyGift_certificates" :key="certificates.id" @submit.prevent="addGift_Certificate">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><input type="reset" class="btn btn-warning" value="Reset" /></a>
          <a class="navbar-brand"><input type="submit" class="btn btn-warning" value="Save Gift_Certificate" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Gift Certificate or Gift Card</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <!-- Tab excerpt -->
          <div id="v-tabs-tabContent" class="tab-excerpt">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Gift Name</td>
                      <td><input v-model="name" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Discount</td>
                      <td><input v-model="discount" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Expiration</td>
                      <td><input id="expiration" v-model="expiration" name="expiration" type="datetime-local" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Gift Type</td>
                      <td><select id="status" v-model="type" name="template" class="form-category">
                          <option value="giftCard">Gift Card</option>
                          <option value="giftCertificate">Gift Certificate</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td><textarea v-model="excerpt" cols="40" rows="10"></textarea>
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
  import gql from "graphql-tag";
  // eslint-disable-next-line camelcase
  import findManyGift_certificates from "~/graphql/queries/sales/gift_certificates"

  const DELETE_GIFT_CERTIFICATE = gql `
    mutation ($name:String!,$discount:String!$expiration:String!,$excerpt:String!,$type:String){
    createOneGift_certificates(data: {name: $name, discount: $discount, expiration: $expiration, excerpt: $excerpt, type: $type}) {
        name
        discount
        expiration
        excerpt
        type
  }
}`;

const UPDATE_GIFT_CERTIFICATE = gql`
  mutation updateOnegift_certificates($id: Int!){
  updateOnegift_certificates(where: {id: {equals: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Gift Certificate'
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
   async deleteCountry(certificates){
    await this.$apollo.mutate({
        mutation: DELETE_GIFT_CERTIFICATE,
        variables: {
          id: certificates.id
        },
        refetchQueries: [
          {
            query: findManyGift_certificates
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/sales/gift_certificates'})
            }).catch(err => console.log(err));
    },
    async updateCountry(certificates){
    await this.$apollo.mutate({
        mutation: UPDATE_GIFT_CERTIFICATE,
        variables: {
          id: certificates.id
        },
        refetchQueries: [
          {
            query: findManyGift_certificates
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyGift_certificates: {
      query: findManyGift_certificates,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>

<style>
input, select, option {
    padding: 5px;
}
</style>
