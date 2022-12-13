<script setup>

</script>

<template>
  <div>
    <form>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />

      <button @click.prevent="login">Login</button>
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
       
    
         
    
      
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email: this.email, password: this.password })
        });
        const data = await response.json();

        //check if the response is correct
        if (data.status === "success") {
        //   localStorage.setItem("token", data.token);
        //   this.$router.push("/admin");
        this.$router.push("/admin");
        } else {
          this.error = data.message;
        }
   
      } catch (error) {
        // Handle failed login
      }
      },
    },
  };

</script>

