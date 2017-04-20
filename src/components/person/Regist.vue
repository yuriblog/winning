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
      <p><i class="iconfont icon-yonghu"></i><oq-input ref="childthree" v-model="username" placeholder="请输入用户名"></oq-input></p>
      <p><i class="iconfont icon-mima1"></i><oq-input ref="childfour" v-model="psw" namekind="pwd" placeholder="请输入登录密码"></oq-input></p>
      <p><i class="iconfont icon-mima1"></i><oq-input ref="childfive" v-model="ensurepsw" :firstpsw="psw" namekind="ensurepwd" placeholder="请确认登录密码"></oq-input></p>

      <button @click="success" class="log">点击注册</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        username: '',
        psw: '',
        ensurepsw: ''
      }
    },
    methods: {
      cancel () {
        window.history.back(-1)
      },
      gologin () {
        this.$emit('login')
      },
      success () {
        this.$refs.childthree.submit()
        this.$refs.childfour.submit()
        this.$refs.childfive.submit()
        if (this.$refs.childthree.verify && this.$refs.childfour.verify && this.$refs.childfive.verify) {
          this.$emit('iskey')
        }
      }
    }
  }
</script>

<style scoped>
  .log {
    width: 100%;
    height: 0.3rem;
    background: #39b8ff;
    border: none;
    outline: none;
    border-radius: 0.15rem;
    color: #fff;
    margin-top: 0.35rem;
  }
  .head {
    height: 0.45rem;
    width: 100%;
    background: #39b8ff;
    color: #fff;
    line-height: 0.45rem;
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
    width: 70%;
    margin-top: 0.6rem;
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
</style>
