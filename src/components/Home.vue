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
    <p class="prize">
      <i style="color: #5accff" class="iconfont icon-tongzhi"></i>
      <span v-for="item in winList" :class="{active: item.isActive}">{{item.message}}</span>
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
      this.http.get('../../static/record/Winning.json').then(data => {
        this.winList = data.data
      })
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
        winList: []
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrap {
    width: 100%;
  }
  .carousel {
    height: 1.65rem;
    margin: 0.1rem;
  }
  .carousel img{
    width: 100%;
    height: 100%;
  }
  .prize {
    width: 100%;
    height: 0.3rem;
    line-height: 0.3rem;
    background: #e8eff5;
    font-size: 0.1rem;
    padding-left: 0.15rem;
    position: relative;
    overflow: hidden;
  }
  .prize span{
    position: absolute;
    top:100%;
  }
  .prize span.active{
    transform: translateY(-100%);
  }
  .prize i{
    margin-right: 0.1rem;
  }
  .picclass {
    overflow: hidden;
    width: 100%;
    margin-top: 0.15rem;
  }
  .picclass ul li{
    margin-top: 0.1rem;
  }
  .picclass ul li img {
    width: 0.94rem;
    height: 1.03rem;
  }
</style>
