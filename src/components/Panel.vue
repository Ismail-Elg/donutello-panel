<template>
  <nav>
    <div class="nav__logo">
      <img src="/images/logo2.svg" alt="logo2">
    </div>
    <div class="nav__title">
      <div class="h2">
        <a href="https://donutello-frontend.netlify.app" target="_blank">Configurator</a>
      </div>
      <div class="h1">
        Welkom terug!
      </div>
      <div class="h2">
        <p @click="wachtwoord()">Wachtwoord wijzigen</p>
      </div>
    </div>
    <div class="nav__logout">
      <i class="fa fa-sign-out" @click="logout()"></i>
    </div>
  </nav>
  <div class="panel">
    <ul>
      <li v-for="donut in donuts" key="donut.id">

        <div class="first"
          :style="{ backgroundImage: 'url(https://res.cloudinary.com/dnriwao3w/image/upload/' + donut.donut.screenshot + ')' }">
          <div class="status">
            <div class="status__trigger" @click="goToPage(donut)">

            </div>
            <div class="status__trigger" :class="statusClass(donut.donut.status)" @click="updateStatus(donut)">

            </div>
            <div class="status__trigger" @click="triggerConfirm(donut)">

            </div>
          </div>
          <div class="show-status">
            Status  
            <div class="show-status__tekst">
              : {{ statusMessage(donut.donut.status) }}
            </div>
          </div>
        </div>
        <div class="second">
          <div class="tekst">
            <div>
              Name: {{ donut.donut.user.name }}
            </div>
            <div>
              Email: {{ donut.donut.user.email }}
            </div>
            <div>
              Phone: {{ donut.donut.user.phone }}
            </div>
            <div>
              Message: {{ donut.donut.user.message }}
            </div>
          </div>
        </div>
        <div class="panel__confirm" :style="{ display: (donut._id === clickedDonutId ? 'flex' : 'none') }">
          <h2>Are you sure you want to delete this donut?</h2>
          <div class="panel__confirm__input">
            <input type="button" value="Cancel" @click="cancelDeletion()">
            <input type="button" value="Yes" @click="deleteDonut(donut)">
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
      donuts: [],
      confirmDisplay: 'none',
      clickedDonutId: null,
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
    fetchImage(id) {
      fetch('https://res.cloudinary.com/dnriwao3w/image/upload/' + 'uz4acb1fgzr2ftmhmcdv')
        .then(response => response.json())
        .then(data => {
          this.donuts = data;
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    statusClass(status) {
      if (status === 0) {
        return 'status__trigger--new trigger2';
      } else if (status === 1) {
        return 'status__trigger--progress';
      } else if (status === 2) {
        return 'status__trigger--done';
      }
    },
    statusMessage(status) {
      if (status === 0) {
        return 'new';
      } else if (status === 1) {
        return 'in progress';
      } else if (status === 2) {
        return 'done';
      }
    },
    updateStatus(donut) {

      if (donut.donut.status === 0) {
        donut.donut.status = 1;
      } else if (donut.donut.status === 1) {
        donut.donut.status = 2;
      } else if (donut.donut.status === 2) {
        donut.donut.status = 0;
      }

      fetch(`https://salmon-puffer-tie.cyclic.app/api/v1/donuts/${donut._id}`, {
        method: 'PUT',
        body: JSON.stringify({
          dough: donut.donut.dough,
          glaze: donut.donut.glaze,
          pattern: {
            type: donut.donut.pattern.type,
            color: donut.donut.pattern.color,
          },
          topping: {
            type: donut.donut.topping.type,
            color: donut.donut.topping.color,
          },
          logo: {
            type: donut.donut.logo.type,
            img: donut.donut.logo.img,
          },
          screenshot: donut.donut.screenshot,
          user: {
            name: donut.donut.user.name,
            email: donut.donut.user.email,
            phone: donut.donut.user.phone,
            message: donut.donut.user.message,
          },
          status: donut.donut.status,
        }),
        headers: {
          'Content-Type': 'application/json',
        },

      })
        .then(response => response.json())
        .then(data => {
          console.log(data);

  

          //refresh the page now that the status has been updated
          // location.reload();
          
        })
        .catch(error => {
          console.error(error);
        });
    },
    triggerConfirm(donut) {
      this.clickedDonutId = donut._id;  
    },
    cancelDeletion() {
      this.clickedDonutId = null;
    },
    deleteDonut(donut) {
      fetch(`https://salmon-puffer-tie.cyclic.app/api/v1/donuts/${donut._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          //refresh the page now that the donut has been deleted
          location.reload();
        })
        .catch(error => {
          console.error(error);
        });
    },
    logout(){
      localStorage.removeItem('token');
      this.$router.push('/');
    },
    wachtwoord(){
      this.$router.push('/wijzigen');
    },
  }
}

</script>