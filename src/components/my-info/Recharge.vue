<template>
  <div class="rech_wrap">
    <p>选择公司入款账户</p>
    <nav>
      <ul>
        <li><i style="color: #03a0ed" class="iconfont icon-zhifu"></i>支付宝在线支付</li>
        <li><i style="color: #1e9344" class="iconfont icon-wxpay"></i>微信在线支付</li>
        <li><i style="color: #e32f30" class="iconfont icon-quick-pass"></i>闪付3.0</li>
        <li @click="goBank"><img src="../../assets/yinlian.png">银行卡转账</li>
        <li><i style="color: #e5980e" class="iconfont icon-zhifubao"></i>支付宝转账</li>
      </ul>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    created () {
      this.$emit('viewIn', {title: '在线充值', level: 'second'})
    },
    data () {
      return {}
    },
    methods: {
      goBank () {
        this.$router.push({path: '/CardRecharge'})
      }
    }
  }
</script>

<style scoped>
  .rech_wrap {
    font-size: 0.15rem;
    margin-bottom: 0.5rem;
  }
  .rech_wrap p{
    background: #fff;
    height: 0.4rem;
    width: 100%;
    line-height: 0.4rem;
    padding-left: 0.1rem;
    box-sizing: border-box;
  }
  .rech_wrap ul{
    background: #fff;
    width: 100%;
    margin-top: 0.1rem;
  }
  .rech_wrap ul li{
    height: 0.4rem;
    line-height: 0.4rem;
    margin-left: .1rem;
    box-sizing: border-box;
    border-bottom: 0.01rem solid #f5f5f5;
  }
  .rech_wrap ul li i{
    margin-right: 0.1rem;
  }
  .rech_wrap ul li img {
    height: 0.13rem;
    margin-right: 0.08rem;
  }
</style>
