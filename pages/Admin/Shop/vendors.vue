<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-vendor"><input type="submit" class="btn btn-warning" value="Add A New Shop"></a>
      </div>
    </nav>
    
    <br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Shop Name</th>
            <th>Website</th>
            <th>Store Type</th>
            <th>Tags</th>
            <th>Shop Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="shop in findManyShops" :key="shop">
            <td>{{ shop.name }}</td>
            <td><a :href=shop.website>{{ shop.website }}</a></td>
            <td>{{ shop.type }}</td>
            <td>{{ shop.tags }}</td>
            <td>{{ shop.country }}</td>
            <td><a :href="`/admin/edit/shops/${shop.id}`">Edit</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import  findManyShops from '~/graphql/queries/shop/vendors'

export default {
  data() {
    return {
      findManyShops: [],
    }
  },
  apollo: {
    findManyShops: {
      prefetch: true,
      query: findManyShops
    }
  }, 
    head: {
      title: 'Vendors'
    }
  }

</script>
