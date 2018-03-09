<template>
  <div class = "page-wrapper landing"> 
    <Header />
  </div>
</template>

<script>
const Header = () => import('./Landing/Header.vue')
export default {
  name: 'LandingHome',
  data () {
    return {      
    }
  },
  components: {
    Header,    
  }
}
</script>

<style scoped>
  .page-wrapper {
    width: 1920px;
    max-width: 1920px;    
  }
</style>
