<script setup>

</script>

<template>
  <div class="container">
    <div class="logo">
      <img src="logo.svg" alt="">
    </div>
    <h1>Aanmelden</h1>
    <form>
      <input type="text" id="username" placeholder="Gebruiksnaam" v-model="username" />
      <input type="password" id="password" placeholder="Wachtwoord" v-model="password" />
      <button @click.prevent="login">Inloggen</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      async login() {
        try {
       
    
          this.$router.push("/admin");
    
      
        // const response = await fetch("/api/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify({ email: this.email, password: this.password })
        // });
        // const data = await response.json();
   
      } catch (error) {
        // Handle failed login
      }
      },
    },
  };

</script>

<style lang="scss">

</style>

