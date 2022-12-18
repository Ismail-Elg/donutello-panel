<script setup>

</script>

<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/logo.svg" alt="">
    </div>
    <h1>Aanmelden</h1>
    <p class="error"></p>
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
        document.querySelector(".error").style.display = "none";
        document.querySelector(".error").innerHTML = " ";
        try {
          if (this.username === "" || this.password === "") {
        
            document.querySelector(".error").style.display = "block";
            document.querySelector(".error").innerHTML = "Vul alle velden in";
            
          }
          else{
            //check if data status is success
            const response = await fetch("https://salmon-puffer-tie.cyclic.app/api/v1/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name: this.username, password: this.password })
        });
        const data = await response.json();
        //check if data status is success
        if (data.status === "success") {
          //save the token in local storage
      
      
        
        // Store token in local storage
        localStorage.setItem("token", data.token);

        this.$router.push("/admin");
        }
        else{
          document.querySelector(".error").style.display = "block";
          document.querySelector(".error").innerHTML = data.message;
        }
        }}
        catch (error) {
          console.log(error);
        }
    }
  },
  };

</script>