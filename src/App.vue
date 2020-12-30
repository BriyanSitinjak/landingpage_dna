<template>
  <div>
    
    <!-- <Sidebar /> -->
    <div>
      <router-view/>
      <!-- <router-link to="/">Home</router-link> 
      <router-link to="/service">Service</router-link> -->
      
    </div>
  </div>
</template>

<script>

// import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    // Sidebar
  },
  data(){
    return {
      //
    }
  }

}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

#app {
  font-family: 'Roboto', 'Sans Serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

  @media only screen and (max-width: 600px) {
    // 
  }
</style>
