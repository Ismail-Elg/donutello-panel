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

