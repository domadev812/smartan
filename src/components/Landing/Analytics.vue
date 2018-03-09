<template>
  <div class = "analytics">
    <div class = "container">
      <div class = "feature">
        <div class = "feature-item">
          <img class="feature-image" src='../../assets/images/analytics.png'>
          <div class = "feature-title"> Analytics </div>
          <div class = "feature-comment"> Seamlessly track all your blog's metrics</div>
          <button class="learn-more">Learn more</button>
        </div>
        <div class = "feature-item">
          <img class="feature-image"  src='../../assets/images/assistant.png'>
          <div class = "feature-title"> Smartan AI Assistant </div>
          <div class = "feature-comment"> Automated optimisation for the best results</div>
          <button class="learn-more">Learn more</button>
        </div>
      </div>          
    </div>
  </div>
</template>

<script>
export default {
  name: 'Analytics',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.analytics {
  background-color: #fafbfd;
  .feature {
    display:flex;
    position: relative;
    top: -150px;
    background-color: #FFF;
    padding: 80px 50px;
    .feature-item {
      flex: 0.5;
      .feature-title {
        font-size: 30px;
        font-weight: bold;
      }
      .feature-comment {
        margin-top: 5px;
        font-size: 20px;
        color: #84899d;
      }
      .learn-more {
        padding: 10px 30px;
        color: #FFF;
        background-color: #006cff;
        margin-top: 25px;
        font-size: 18px;
      }
    }
  }
}
</style>
