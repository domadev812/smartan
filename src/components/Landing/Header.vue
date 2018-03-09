<template>
  <div class = "header container"> 
    <img class = "img-logo" src = "../../assets/images/logo.png">
    <div class = "menu">
      <ul>
        <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
    </div>     
  </div>
</template>

<script>
export default {
  name: 'LandingHeader',
  data () {
    return {      
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;  
    padding-top: 10px;   
    ul {
      list-style: none;    
      li {
        float: left;
        margin-right: 60px;
        color: #1e2129;
        font-size: 20px;
        &:hover{
          color: #006cff;
          cursor: pointer;
        }
      }
    }
  }
</style>
