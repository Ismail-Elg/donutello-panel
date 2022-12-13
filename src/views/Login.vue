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
        const response = await fetch("http://localhost:3000/api/v1/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name: this.username, password: this.password })
        });
        const data = await response.json();

        //check if the response is correct
        if (data.status === "success") {
        //   localStorage.setItem("token", data.token);
        //   this.$router.push("/admin");
        this.$router.push("/admin");
        } 
        else{
            console.log("Error "+ data.status);
        }
      } catch (error) {
        // Handle failed login
        console.log(error);
   
      }
      },
    },
  };

</script>

<style lang="scss">

</style>

