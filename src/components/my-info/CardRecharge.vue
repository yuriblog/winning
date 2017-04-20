<template>
  <div class="wrap">
    <p>转入银行资料</p>
    <nav>
      <ul>
        <li>所属银行 : 中国工商银行</li>
        <li>卡号 : 1710020901111</li>
        <li>收款人 : 朱三</li>
        <li>开户网点 : 湖南省长沙市</li>
      </ul>
    </nav>
    <p>填写您的转账资料</p>
    <nav>
      <ul>
        <li>订单号 : 754CE</li>
        <li>存入金额 : 4000</li>
        <li>存入日期 : 2017-04-17</li>
      </ul>
    </nav>
    <span>注:请您根据上述账号完成存款后，再提交申请！</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created () {
      this.$emit('viewIn', {title: '在线充值', level: 'second'})
    },
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .wrap {
    width: 100%;
    font-size: 0.15rem;
    margin-bottom: 0.5rem;
  }
  p{
    height: 0.4rem;
    width: 100%;
    line-height: 0.4rem;
    padding-left: 0.1rem;
    box-sizing: border-box;
  }
  nav {
    background: #fff;
    width: 100%;
  }
  nav ul li{
    width: 100%;
    padding-left: 0.1rem;
    box-sizing: border-box;
    height: 0.4rem;
    line-height: 0.4rem;
    border-bottom: 0.01rem solid #f5f5f5;
  }
  .wrap span{
    color: #df3a1a;
    display: inline-block;
    padding-left: 0.1rem;
    margin-top: 0.15rem;
    font-size: 0.07rem;
  }
</style>
