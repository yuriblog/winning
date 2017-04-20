<template>
  <div>
    <p class="close"><i @click="cancel" class="iconfont icon-guanbi"></i></p>
    <p class="logo"><img src="../../assets/logo.png"></p>
    <div class="info">
      <p><i class="iconfont icon-yonghu"></i><oq-input ref="childone" v-model="username" placeholder="输入用户名"></oq-input></p>
      <p><i class="iconfont icon-mima1"></i><oq-input ref="childtwo" v-model="psw" namekind="pwd" placeholder="输入密码"></oq-input></p>
      <p class="footer">
        <a>联系客服</a>
        <a>忘记密码?</a>
      </p>
      <button @click="loginsuc" class="login">登录</button>
      <button class="register" @click="addPer">注册账号</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        username: '',
        psw: ''
      }
    },
    methods: {
      loginsuc () {
        this.$refs.childone.submit()
        this.$refs.childtwo.submit()
        if (this.$refs.childone.verify && this.$refs.childtwo.verify) {
          localStorage.setItem('username', this.username)
          window.history.back(-1)
        }
      },
      cancel () {
        window.history.back(-1)
      },
      addPer () {
        this.$emit('addacount')
      }
    }
  }
</script>

<style scoped>
  .close {
    margin-top: 0.15rem;
    text-align: right;
    padding-right: 0.1rem;
    box-sizing: border-box;
    color: #fff;
  }
  .close i{
    font-size: 0.2rem;
  }
  .logo {
    width: 100%;
    text-align: center;
    margin-top: 0.53rem;
  }
  .logo img{
    width: 0.64rem;
    height: 0.64rem;
    border: 0.01rem solid #fff;
    border-radius: 50%;
  }
  .info {
    width: 70%;
    margin-left: 15%;
    overflow: hidden;
  }
  .info p{
    position: relative;
    width: 100%;
    margin-top: 0.25rem;
  }
  .info p i{
    color: #fff;
    font-size: 0.23rem;
  }
  .info p input {
    width: 100%;
    position: absolute;
    left: 0.28rem;
    border: none;
    line-height: 0.25rem;
    border-bottom: 0.01rem solid #fff;
    padding-left: 0.1rem;
    box-sizing: border-box;
    background: rgba(0,0,0,0);
    color: #fff;
  }
  .info p input::-webkit-input-placeholder{
    color: #fff;
  }
  .footer {
    color: #39b8ff;
    width: 100%;
    position: relative;
  }
  .footer a:nth-of-type(1){
    position: absolute;
    left: 0;
    top:0;
  }
  .footer a:nth-of-type(2){
    position: absolute;
    right: 0;
    top:0;
  }
  .login {
    width: 100%;
    height: 0.3rem;
    background: #39b8ff;
    border: none;
    outline: none;
    border-radius: 0.15rem;
    color: #fff;
    margin-top: 0.25rem;
  }
  .register {
    width: 100%;
    background: rgba(0,0,0,0);
    border: 0.01rem solid #39b8ff;
    border-radius: 0.15rem;
    height: 0.3rem;
    color: #39b8ff;
    margin-top: 0.15rem;
  }
</style>
