<template>
  <div>
    <form v-for="city in findManyCities" :key="city.id" @submit.prevent="editCity()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save City" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit City</a>
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
                      <td style="text-align: right;">Description</td>
                      <td>
                        <div class="form-check form-switch">
                          <input id="tagDesc" type="textarea" name="tagDesc" cols="80"
                            rows="10" />{{ city.description }}
                        </div>
                      </td>
                    </tr>
              <td style="text-align: right;">City Name</td>
              <td><input id="cityName" v-model="name" type="cityName" required /></td>
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
                <td><input id="cityName" v-model="postalCode" type="text" /></td>
              </tr>
              </tbody>
              </table>
            </div>
            <br><br>
            <div id="accordionExample" class="accordion">
              <div class="accordion-item">
                <h2 id="headingOne" class="accordion-header">
                  <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                    data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Content
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                  data-mdb-parent="#accordionExample">
                  <div class="accordion-body">
                    <div class="table table-responsive">
                      <table class="table">
                        <tbody>
                          <tr>
                            <td style="text-align: right;">Description</td>
                            <td>
                              <textarea v-model="description" cols="40" rows="10"></textarea>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
  </form>
  </div>
</template>

<script>
  // eslint-disable-next-line camelcase
  import gql from "graphql-tag";
  import findManyCities from "~/graphql/queries/shop/cities";
  import findManyStates from '~/graphql/queries/shop/states'
  import findManyCountries from '~/graphql/queries/shop/countries'

  const DELETE_CITY = gql`
    mutation ($name:String!,$state:String,$country:String,$postalCode:String,$description:String){
    createOneCities(data: {name: $name, state: $state, country: $country, postalCode: $postalCode, description: $description}) {
        name
        state
        country
        postalCode
        description
  }
}`;

  const UPDATE_CITY = gql`
  mutation updateOnecities($id: Int!){
  updateOneCities(data: {name: $name, state: $state, country: $country, postalCode: $postalCode, description: $description}, where: {id: {equals: $id}}){
    name
        state
        country
        postalCode
        description
  }
}
`;

  export default {
    head: {
      name: 'Edit City'
    },
    mounted() {
      this.forceRerender();
    },
    // eslint-disable-next-line vue/order-in-components
    data() {
      return {
        componentKey: 0
      }
    },
    methods: {
      async deleteCity(city) {
        await this.$apollo.mutate({
          mutation: DELETE_CITY,
          variables: {
            id: city.id
          },
          refetchQueries: [{
              query: findManyCities
            }

          ]
        }).then(() => {
          this.$router.push({
            path: '../admin/shop/cities'
          })
        }).catch(err => console.log(err));
      },
      async updateCity(city) {
        await this.$apollo.mutate({
          mutation: UPDATE_CITY,
          variables: {
            id: city.id
          },
          refetchQueries: [{
              query: findManyCities
            }

          ]
        })
      },
      forceRerender() {
        this.componentKey += 1;
      }
    },
    apollo: {
      findManyCities: {
        query: findManyCities,
        prefetch: ({
          route
        }) => ({
          id: route.params.id
        }),
        variables() {
          return {
            id: this.$route.params.id
          }
        }
      },
      methods: {
        async deleteCity(city) {
          await this.$apollo.mutate({
            mutation: DELETE_CITY,
            variables: {
              id: city.id
            },
            refetchQueries: [{
                query: findManyCities
              }

            ]
          }).then(() => {
            this.$router.push({
              path: '../admin/shop/cities'
            })
          }).catch(err => console.log(err));
        },
        async updateCity(city) {
          await this.$apollo.mutate({
            mutation: UPDATE_CITY,
            variables: {
              id: city.id
            },
            refetchQueries: [{
                query: findManyCities
              }

            ]
          })
        },
        forceRerender() {
          this.componentKey += 1;
        }
      },
      apollo: {
        findManyCities: {
          query: findManyCities,
          prefetch: ({
            route
          }) => ({
            id: route.params.id
          }),
          variables() {
            return {
              id: this.$route.params.id
            }
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

  li {
    display: inline-block;
  }

</style>
