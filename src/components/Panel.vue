<template>
    <div>
      <h1>My Donuts</h1>
      <ul>
        <li v-for="donut in donuts" key="donut.id" @click="goToPage(donut)">
            {{ donut.donut.user.name }}
            {{ donut.donut.user.email }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        donuts: []
      }
    },
    created() {
      fetch('https://salmon-puffer-tie.cyclic.app/api/v1/donuts')
        .then(response => response.json())
        .then(data => {
            this.donuts = data;
            console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    methods: {
    goToPage(donut) {
        this.$router.push(`/donuts/${donut._id}`);
    }
}
  }
  </script>
  