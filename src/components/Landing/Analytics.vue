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
      <div class = "feature">
        <div class = "feature-item list">
          <div class = "feature-title"> Analytics </div>
          <div class = "feature-comment"> Gain insight into how your content is performing across social networks.</div>
          <div class = "feature-comment"> Track unique metrics such as open rates, time spent reading the article, scroll depth, and many more.</div>
          <div class = "feature-comment"> Get blog performance reports instantly.</div>
        </div>
        <div class = "feature-item list">
          <img class="analytics-chart" src = "../../assets/images/chart.png">
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
  .container {
    position: relative;
    top: -150px;
  }
  .feature {
    display:flex;        
    .feature-item {
      flex: 0.5;
      background-color: #FFF;
      padding: 80px 50px;
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
    .list {
      background: none;
      padding: 0;
      text-align: left;
      flex: 0.48;
      .feature-comment {
        margin-top: 30px;
      }
    }
  }
}
</style>
