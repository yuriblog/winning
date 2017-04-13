<template>
  <div class="wrap">
    <login @addacount="addacount" v-if="isLogin"></login>
    <regist @iskey="iskey" @login="login" v-if="!isLogin"></regist>
    <div class="help">
      <p class="other">其他登录方式</p>
      <div class="line"></div>
      <p class="tubiao">
        <i style="color: blue" class="iconfont icon-QQ"></i>
        <i style="color: green" class="iconfont icon-weixin"></i>
      </p>
      <p v-if="isLogin" class="footer">
        <a>忘记密码?</a>
        <a>联系客服</a>
      </p>
    </div>
    <payment @close="close" v-if="keyShow"></payment>
  </div>
</template>

<script type="text/ecmascript-6">
  import Login from './Login'
  import Regist from './Regist'
  import Payment from './Payment'
  export default {
    components: {
      Login, Regist, Payment
    },
    created () {
      this.$emit('viewIn', {title: '', level: 'second'})
    },
    data () {
      return {
        isLogin: true,
        keyShow: false
      }
    },
    methods: {
      addacount () {
        this.isLogin = false
      },
      login () {
        this.isLogin = true
      },
      iskey () {
        this.keyShow = true
      },
      close () {
        this.keyShow = false
      }
    }
  }
</script>

<style scoped>
  .wrap {
    font-size: 0.1rem;
    width: 100%;
    height: 100vh;
    background: #fff;
    position: relative;
    overflow: hidden;
  }

  .help {
    width: 100%;
    height: 2.5rem;
    position: absolute;
    bottom: 0;
  }
  .other {
    width: 100%;
    text-align: center;
  }
  .line {
    width: 70%;
    margin-left: 15%;
    margin-top: 0.17rem;
    border-bottom: 0.01rem solid #000;
  }
  .tubiao {
    text-align: center;
    margin-top: 0.15rem;
  }
  .tubiao i {
    font-size: 0.45rem;
    margin: 0 0.4rem;
  }
  .footer {
    color: #39b8ff;
    width: 100%;
  }
  .footer a:nth-of-type(1){
    position: absolute;
    left: 0.2rem;
    bottom: 0.11rem;
  }
  .footer a:nth-of-type(2){
    position: absolute;
    right: 0.2rem;
    bottom: 0.11rem;
  }
</style>
