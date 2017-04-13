<template>
  <div class="pers_wrap">
    <div class="pers_top">
      <p class="pers_set">
        <i class="iconfont icon-shezhi"></i>
        <i class="iconfont icon-xiaoxi"></i>
      </p>
      <div class="info">
        <p class="pic"><img src="../assets/person.jpg"></p>
        <p @click="goRegister">登录/注册</p>
        <p><span>积分:622.00</span></p>
      </div>
      <nav class="deal">
        <ul>
          <li>
            <i class="iconfont icon-chongzhi"></i>
            <p>充值</p>
          </li>
          <li>
            <i class="iconfont icon-jinbib"></i>
            <p>提现</p>
          </li>
          <li>
            <i class="iconfont icon-zhifuanquan"></i>
            <p>银行卡</p>
          </li>
        </ul>
      </nav>
    </div>
    <div class="purchase">
      <ul>
        <li>
          <i class="iconfont icon-caiwujilu"></i> 财务记录 <i class="iconfont icon-qianjinxiayige"></i>
        </li>
        <li>
          <i class="iconfont icon-paimai-01"></i> 投注管理 <i class="iconfont icon-qianjinxiayige"></i>
        </li>
        <li>
          <i class="iconfont icon-yaoqinghaoyou"></i> 邀请好友 <i class="iconfont icon-qianjinxiayige"></i>
        </li>
        <li>
          <i class="iconfont icon-yinxingqia"></i> 红包中心 <i class="iconfont icon-qianjinxiayige"></i>
        </li>
        <li>
          <i class="iconfont icon-tongji"></i> 综合统计 <i class="iconfont icon-qianjinxiayige"></i>
        </li>
      </ul>
    </div>
    <p class="btnbox"><button>注销登录</button></p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created () {
      this.$emit('viewIn', {title: '', level: 'first'})
    },
    data () {
      return {}
    },
    methods: {
      goRegister () {
        this.$router.push({path: '/Register'})
      }
    }
  }
</script>

<style scoped>
  .pers_wrap {
    font-size: 0.1rem;
    width: 100%;
    height: 100vh;
    background: #cfcfcf;
  }
  .pers_top {
    width: 100%;
    height: 2.1rem;
    background: url("../assets/personbg.jpg");
    background-size: 100%;
    overflow: hidden;
  }
  .pers_set {
    position: relative;
    width: 100%;
    margin: 0.1rem;
    color: #fff;
    font-size: 0.2rem;
    box-sizing: border-box;
  }
  .pers_set i:nth-of-type(2){
    position: absolute;
    right: 0.2rem;
  }
  .info {
    width: 100%;
    text-align: center;
    color: #fff;
  }
  .info p{
    margin: 0.07rem 0;
  }
  .info p span {
    background: #fff;
    width: 0.95rem;
    height: 0.21rem;
    display: inline-block;
    color: #000;
    line-height: 0.21rem;
    text-align: center;
  }
  .info .pic img{
    width: 0.62rem;
    height: 0.62rem;
    border-radius: 50%;
  }
  .deal {
    width: 100%;
    height: 0.55rem;
    background: rgba(0,0,0,0.1);
  }
  .deal ul {
    width: 100%;
    display: flex;
  }
  .deal ul li{
    flex: 1;
    height: 0.4rem;
    color: #fff;
    text-align: center;
    margin-top: 0.09rem;
    border-right: 0.02rem solid #FFF;
  }
  .deal ul li:nth-last-of-type(1){
    border: none;
  }
  .deal ul li p{
    line-height: 0.2rem;
  }
  .purchase {
    background: #fff;
    width: 100%;
    margin-top: 0.11rem;
  }
  .purchase ul li{
    color: #000;
    width: 100%;
    height: 0.39rem;
    line-height: 0.39rem;
    border-bottom: 0.01rem solid #cfcfcf;
    margin-left: 0.15rem;
    padding-left: 0.02rem;
    box-sizing: border-box;
    position: relative;
  }
  .purchase ul li i:nth-of-type(1){
    margin-right: 0.15rem;
  }
  .purchase ul li i:nth-of-type(2){
    display: inline-block;
    position: absolute;
    right: 0.3rem;
  }
  .btnbox {
    text-align: center;
    width: 100%;
    margin-top: 0.21rem;
  }
  .btnbox button {
    width: 2.35rem;
    height: 0.35rem;
    background: #6699ff;
    border: none;
    outline: none;
    border-radius: 0.05rem;
    color: #fff;
  }
</style>
