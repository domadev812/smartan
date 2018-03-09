<template>
  <div class = "introduce container">        
      <div class = "title">Your blog's analytical center</div>
      <div class = "comment">Lorem ipsum dolor sit amet, et has eros laudem interpretaris. Cum velit salutatus ea, adipisci accommodare conclusionemque mea eu</div>
      <div class = "button-group">
        <button class="btn facebook"><i class="fa fa-facebook-f"></i> Sign up with Facebook</button>
        <button class="btn booking"><i class="fa fa-send"></i> Book a demo</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Introduce',
  data () {
    return {      
    }
  }
}
</script>

<style lang="scss" scoped>
.introduce {
  padding: 200px 0 300px;
  .title {
    font-size: 34px;
    font-weight: bold;
  }
  .comment {
    font-size: 20px;
    width: 50%;
    margin: auto;
    margin-top: 20px;
    color: #84899d;
  }
  .button-group {
    margin-top: 40px;
  }
  .btn {    
    border: none;
    color: white;
    padding: 12px 16px;
    font-size: 16px;
    cursor: pointer;
    width: 20%;
    height: 75px;
    color: #000;
    outline: none;
    margin-left: 20px;
    font-size: 20px;
  }
  .fa {
    font-size: 30px;
    margin-right: 15px;
    color: #006cff;
  }
  .facebook {
    color: #FFF;
    background-color: #006cff;    
    .fa {
      color: #FFF;
    }
  }  
}
</style>
