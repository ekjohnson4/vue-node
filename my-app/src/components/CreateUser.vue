<template>
  <div class="container">
    <div class="row">
        <div class="col-md-12 mrgnbtm">
        <h2>Enter Album</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label>Album Name</label>
                        <input type="text" class="form-control" v-model="albumName" name="albumName" id="albumName" placeholder="Album Name" />
                    </div>
                    <div class="form-group col-md-6">
                        <label htmlFor="exampleInputPassword1">Artist Name</label>
                        <input type="text" class="form-control" v-model="artistName" name="artistName" id="artistName" placeholder="Artist Name" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-12">
                        <label>Year</label>
                        <input type="text" class="form-control" v-model="year" name="year" id="year" placeholder="Year" />
                    </div>
                </div>
                <button type="button" @click='createUser()' class="btn btn-danger add-button">Create</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateUser',
  data() {
    return {
      albumName: '',
      artistName: '',
      year: ''
    }
  },
  methods: {
      createUser() {
          console.log(this.albumName)
          const payload = {
              albumName: this.albumName,
              artistName: this.artistName,
              year: this.year
          }
          this.$emit('createUser', payload)
          this.clearForm();
      },
      clearForm() {
          this.albumName = "";
          this.artistName = "";
          this.year = "";
      }
  }
}
</script>