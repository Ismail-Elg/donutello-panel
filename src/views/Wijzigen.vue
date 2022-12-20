<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/logo.svg" alt="">
    </div>
    <h1>WACHTWOORD Wijzigen</h1>
    <p class="error"></p>
    <form>
      <input type="password" id="currentpw" placeholder="Huidig Wachtwoord" v-model="currentPassword"/>
      <input type="password" id="newpassword" placeholder="Nieuw Wachtwoord" v-model="newPassword"/>
      <input type="password" id="confirmpassword" placeholder="Bevestig Wachtwoord" v-model="confirmPassword"/>
      <button @click.prevent="change">Wijzigen</button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'CheckToken',
  data() {
    return {
      // The token will be stored in this component's data
      token: null,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
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
    methods: {
   

      async change() {
        this.getUserName();
        
        document.querySelector(".error").style.display = "none";
        document.querySelector(".error").innerHTML = " ";
        try {
          //check if empty
          if(this.currentPassword === "" || this.newPassword === "" || this.confirmPassword === ""){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".error").innerHTML = "Vul alle velden in";
          }
          else{
        console.log(this.userName + " " + this.currentPassword + " " + this.newPassword + " " + this.confirmPassword)
            const response = await fetch("https://salmon-puffer-tie.cyclic.app/api/v1/users/change", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: this.userName,
            currentPassword: this.currentPassword,
            newPassword: this.newPassword,
            confirmPassword: this.confirmPassword,
          })
        });
        const data = await response.json();
        if (data.status === "success") {
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
    },
    async getUserName() {
  try {
    // Make a request to the server to get the user's information
    const response = await fetch('https://salmon-puffer-tie.cyclic.app/api/v1/users/info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: this.token,
      }),
    });
    const data = await response.json();
    this.userName = data.name;
  } catch (error) {
    console.error(error);
  }
},
  },
}
</script>
