<template>
  <div class="wrap">
    <login @addacount="addacount" v-if="isLogin"></login>
    <regist @iskey="iskey" @login="login" v-if="!isLogin"></regist>
    <div class="help">
      <p class="other"><img src="../../assets/other.png" alt=""></p>
      <p class="tubiao">
        <span><i class="iconfont icon-QQ"></i></span>
        <span><i class="iconfont icon-weixin"></i></span>
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
    background: url("../../assets/loginbg.jgp.jpg");
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
    margin-top: -0.45rem;
  }

  .help {
    width: 100%;
    height: 1.8rem;
    position: absolute;
    bottom: 0;
  }
  .other {
    width: 100%;
    text-align: center;
  }
  .other img{
    width: 70%;
  }
  .tubiao {
    text-align: center;
  }
  .tubiao span{
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    border-radius: 50%;
    border: 0.01rem solid #0a9ef4;
    margin: 0 0.4rem;
  }
  .tubiao i {
    font-size: 0.17rem;
    color: #0a9ef4;
  }
</style>
