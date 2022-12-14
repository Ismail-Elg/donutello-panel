<script setup>

</script>

<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/logo.svg" alt="">
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
          //check if input is empty
          if (this.username === "" || this.password === "") {
            throw new Error("Vul alle velden in");
          }
          else{
            const response = await fetch("https://salmon-puffer-tie.cyclic.app/api/v1/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name: this.username, password: this.password })
        });
        const data = await response.json();
        console.log(data.token);
        
        // Store token in local storage
        localStorage.setItem("token", data.token);

        this.$router.push("/admin");
        } 
        }
        catch (error) {
          console.log(error);
        }
    }
  },
  };

</script>

<style lang="scss">

</style>

