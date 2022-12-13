<template>
  <div class="container">
    <p>Admin</p>
  </div>
</template>

<script>
export default {
  name: 'CheckToken',
  data() {
    return {
      // The token will be stored in this component's data
      token: null
    }
  },
  created() {
    // In the component's "created" hook, check if a token exists in local storage
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('token')

      if (token) {
        this.token = token
        console.log(token)
      }
      else{
        this.$router.push("/");
      }
    }
  }
}
</script>
