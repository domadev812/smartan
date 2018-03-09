<template>
  <div class = "landing">    
    <Header />    
    <Introduce />
    <Analytics />
  </div>
</template>

<script>
const Header = () => import('./Landing/Header.vue')
const Introduce = () => import('./Landing/Introduce.vue')
const Analytics = () => import('./Landing/Analytics.vue')
export default {
  name: 'LandingHome',
  data () {
    return {      
    }
  },
  components: {
    Header,    
    Introduce,    
    Analytics,    
  }
}
</script>

<style scoped>
  .page-wrapper {
    width: 1600px;
    max-width: 1600px;        
  }
  .landing {
    background-image: url('../assets/images/background.png');
    background-repeat: repeat-x;
    background-size: contain;
    margin: auto;
  }
</style>
