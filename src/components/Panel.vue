<template>
    <div class="panel">
      <ul>
        <li v-for="donut in donuts" key="donut.id" @click="goToPage(donut)">
            <div class="first" :style="{backgroundImage: 'url(https://res.cloudinary.com/dnriwao3w/image/upload/' + donut.donut.screenshot + ')' }"></div>
          <div class="second">
            <div class="tekst">
              <div>
                {{ donut.donut.user.name }}
              </div>
              <div>
                {{ donut.donut.user.email }}
              </div>
              <div>
                {{ donut.donut.user.phone }}
              </div>
            </div>
          </div>
            
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
    },
    fetchImage(id){
        fetch('https://res.cloudinary.com/dnriwao3w/image/upload/' + 'uz4acb1fgzr2ftmhmcdv')
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
  }
  </script>
  
<style lang="scss">

</style>