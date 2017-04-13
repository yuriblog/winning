<template>
  <div class="wrap">
    <div class="carousel swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/carpic.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../assets/carpic.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../assets/carpic.jpg">
        </div>
        <div class="swiper-slide">
          <img src="../assets/carpic.jpg">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <p class="message">
      <i class="iconfont icon-tongzhi"></i>
      <span>恭喜XXX幸运28中1200个币</span>
    </p>
    <nav class="picclass">
      <ul>
        <el-row style="text-align: center" :gutter="7">
          <el-col :span="8">
            <li>
              <img src="../assets/li-1.jpg">
            </li>
          </el-col>
          <el-col :span="8">
            <li>
              <img src="../assets/li-2.jpg">
            </li>
          </el-col>
          <el-col :span="8">
            <li>
              <img src="../assets/li-3.jpg">
            </li>
          </el-col>
          <el-col :span="8">
            <li>
              <img src="../assets/li-4.jpg">
            </li>
          </el-col>
          <el-col :span="8">
            <li>
              <img src="../assets/li-5.jpg">
            </li>
          </el-col>
          <el-col :span="8">
            <li>
              <img src="../assets/li-6.jpg">
            </li>
          </el-col>
        </el-row>
      </ul>
    </nav>
  </div>
</template>

<script>
  import Swiper from '../../static/swiper.min.js'
  require('../../static/swiper.min.css')
  export default {
    name: 'hello',
    created () {
      this.$emit('viewIn', {title: '首页', level: 'first'})
    },
    mounted () {
      Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        spaceBetween: 15,
        centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
      })
    },
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrap {
    margin-top: 0.65rem;
    margin-bottom: 0.5rem;
    overflow: hidden;
  }
  .carousel {
    height: 1.65rem;
    margin: 0.1rem;
  }
  .carousel img{
    width: 100%;
    height: 100%;
  }
  .message {
    width: 100%;
    height: 0.3rem;
    background: #e8eff5;
    line-height: 0.3rem;
    font-size: 0.1rem;
    padding-left: 0.15rem;
  }
  .picclass {
    overflow: hidden;
    width: 100%;
    margin-top: 0.05rem;
  }
  .picclass ul li img {
    width: 0.94rem;
    height: 1.03rem;
  }
</style>
