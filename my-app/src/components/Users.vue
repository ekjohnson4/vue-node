<template>
    <div class="container">
        <h2>Albums ({{numberOfUsers}})</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Album Id</th>
                <th>Album Name</th>
                <th>Artist Name</th>
                <th>Year</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="item in users" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.albumName }}</td>
                  <td>{{ item.artistName }}</td>
                  <td>{{ item.year }}</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'Users',
        props: ['users', 'numberOfUsers'],
        methods: {
            getAllUsers() {
                this.$emit('getAllUsers')
            }
        }
     }
</script>