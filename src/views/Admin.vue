<script setup>
import Panel from '../components/Panel.vue'
</script>
<template>
  <div class="container">
    <panel></panel>
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


      if(token === undefined||token === null||token ==="undefined"){
        localStorage.removeItem("token");
        this.$router.push("/");
      }
      if (token){
        let validation = () => {
          fetch("https://salmon-puffer-tie.cyclic.app/api/v1/users/validate", {
            method: "POST",
            body: { token: token},
          })
          .then(response => response.json())
          .then(data => {
            if (data.status === "success") {
              //check validation
            }
            else{
             //check validation
            }
          })
        }
        validation()
      }
      if (token) {
        this.token = token
        console.log(token+ " is the token")
      }
      else{
        this.$router.push("/");
      }
    }
    else{
      this.$router.push("/");
    }
  },
}
</script>
