<template>
  <div>
    <nav class="head">
      <ul>
        <li><i @click="cancel" class="iconfont icon-llmainpageback"></i></li>
        <li>注册</li>
        <li @click="gologin">登录</li>
      </ul>
    </nav>
    <div class="info">
      <p><i class="iconfont icon-yonghu"></i><input type="text" placeholder="请输入用户名"></p>
      <p><i class="iconfont icon-mima"></i><input type="text" placeholder="请输入登录密码"></p>
      <p><i class="iconfont icon-mima"></i><input type="text" placeholder="请确认登录密码"></p>

      <button @click="success" class="log">点击注册</button>
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
      gologin () {
        this.$emit('login')
      },
      success () {
        this.$emit('iskey')
      }
    }
  }
</script>

<style scoped>
  .log {
    width: 80%;
    height: 0.35rem;
    margin-left: 10%;
    margin-top: 0.1rem;
    background: #fff;
    border-radius: 0.05rem;
    border: 0.01rem solid #000;
  }
  .head {
    background: #fff;
    height: 0.5rem;
    line-height: 0.5rem;
    width: 100%;
    border-bottom: 0.01rem solid #cfcfcf;
  }
  .head ul{
    width: 100%;
    display: flex;
  }
  .head ul li{
    flex:2;
    text-align: center;
  }
  .head ul li:nth-of-type(2){
    flex: 10;
    font-size: 0.15rem;
  }
  .logo img{
    width: 0.7rem;
    height: 0.7rem;
  }
  .info {
    width: 90%;
    margin-left: 5%;
    margin-top: 0.15rem;
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
</style>
