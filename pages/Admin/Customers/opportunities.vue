<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-opportunity"><input type="submit" class="btn btn-warning" value="Create A New Opportunity"></a>
      </div>
    </nav>
    <br>
    
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Name</th>
            <th>Account Name</th>
            <th>Sales Stage</th>
            <th>Amount</th>
            <th>Close</th>
            <th>User</th>
            <th>Date Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="opportunities in allOpportunities" :key="opportunities.id">
          <tr>
            <td>{{ opportunities.name }}</td>
            <td>{{ opportunities.account_name }}</td>
            <td>{{ opportunities.sales_stage }}</td>
            <td>{{ opportunities.amount }}</td>
            <td>{{ opportunities.expected_close_date }}</td>
            <td>{{ opportunities.assigned_to }}</td>
            <td>{{ opportunities.created_at }}</td>
            <td><a :href="`/admin/edit/opportunities/${opportunities.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import  allOpportunities from '~/graphql/queries/customers/opportunities'

export default {
   data() {
    return {
      allOpportunities: [],
    }
  },
  apollo: {
    allOpportunities: {
      prefetch: true,
      query: allOpportunities
    },
  }, 
    head: {
      title: 'Oppurtunities'
    }
  }

</script>
