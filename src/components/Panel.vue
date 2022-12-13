<template>
    <div>
      <h1>My Donuts</h1>
      <ul>
        <li v-for="donut in donuts" key="donut.id">
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
      fetch('http://localhost:3000/api/v1/donuts')
        .then(response => response.json())
        .then(data => {
            this.donuts = data;
            console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  </script>
  