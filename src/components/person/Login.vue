<template>
  <div>
    <p class="close"><i @click="cancel" class="iconfont icon-guanbi"></i></p>
    <p class="logo"><img src="../../assets/logo.png"></p>
    <div class="info">
      <p><i class="iconfont icon-yonghu"></i><input type="text" placeholder="输入用户名"></p>

      <p><i class="iconfont icon-mima1"></i><input type="text" placeholder="输入密码"></p>

      <button class="login">登录</button>
      <p class="register"><button @click="addPer">注册账号</button></p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
    },
    methods: {
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
  }
  .logo {
    width: 100%;
    text-align: center;
    margin-top: 0.15rem;
  }
  .logo img{
    width: 0.7rem;
    height: 0.7rem;
  }
  .info {
    width: 90%;
    margin-left: 5%;
  }
  .info p{
    position: relative;
    width: 100%;
  }
  .info p i{
    position: absolute;
    top:0.06rem;
  }
  .info p input {
    width: 100%;
    border: none;
    margin: 0.1rem 0;
    border-bottom: 0.01rem solid #cfcfcf;
    padding-left: 0.18rem;
    box-sizing: border-box;
  }
  .login {
    margin-top: 0.1rem;
    width: 100%;
    height: 0.35rem;
    background: #6699ff;
    border: none;
    outline: none;
    border-radius: 0.05rem;
    color: #fff;
  }
  .register {
    width: 100%;
    text-align: center;
  }
  .register button{
    background: #fff;
    border: none;
    color: #6699ff;
    margin-top: 0.2rem;
  }
</style>
