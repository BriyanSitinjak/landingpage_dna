<template>
  <div>
    <div>
      <!-- <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> -->
      <!-- <Sidebar/> -->
      <!-- <Footer/> -->
      <HomeDNA />
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
// import Sidebar from '@/components/Sidebar.vue'
// import Footer from '@/components/Footer.vue'
import HomeDNA from '@/views/HomeDNA.vue'


export default {
  name: 'App',
  components: {
    // Sidebar
    // Footer
    HomeDNA
  },
  data(){
    return {
      //
    }
  }

}
</script>


<style lang="scss">
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
</style>
