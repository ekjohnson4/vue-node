<template>
  <div class="hello">
    <Header />
    <div class="container mrgnbtm">
          <div class="row">
            <div class="col-md-12">
                <CreateUser @createUser="userCreate($event)" />
            </div>
          </div>
    </div>
    <div class="row mrgnbtm">
        <Users v-if="users.length > 0" :users="users" :numberOfUsers="numberOfUsers"/>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import CreateUser from './CreateUser.vue'
import Users from './Users.vue'
import { getAllUsers, createUser } from '../services/UserService'

export default {
  name: 'Dashboard',
  components: {
    Header,
    CreateUser,
    Users
  },
  data() {
      return {
          users: [],
          numberOfUsers: 0
      }
  },
  methods: {
    getAllUsers() {
      getAllUsers().then(response => {
        console.log(response)
        this.users = response
        this.numberOfUsers = this.users.length
      })
    },
    userCreate(data) {
      console.log('data:::', data)
      createUser(data).then(response => {
        console.log(response);
        this.getAllUsers();
      });
    }
  },
  mounted () {
    this.getAllUsers();
  }
}
</script>