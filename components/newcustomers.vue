<template>
    <div>
        <div class="table table-responsive table-bordered latestOrders col">
                    <table class="table" >
                        <thead>
                            <tr>
                                <th>Customer ID</th>
                                <th>Customer First Name</th>
                                <th>Customer Last Name</th>
                                <th>Customer Since</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody v-for="customers in findFirstCustomers" :key="customers.id">
                            <tr>
                                <th scope="row">{{customers.id}}</th>
                                <td>{{customers.first_name}}</td>
                                <td>{{customers.last_name}}</td>
                                <td>{{customers.customer_since}}</td>
                                <td>{{customers.email}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    </div>
</template>

<script>
import findFirstCustomers from '~/graphql/queries/customers/newcustomers'

export default {
  data() {
    return {
      findFirstCustomers: [],
    }
  },
  apollo: {
    findFirstCustomers: {
      prefetch: true,
      query: findFirstCustomers
    },
  },
}
</script>