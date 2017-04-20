<template>
  <div class="wrap">
    <nav class="topNav">
      <ul>
        <li class="active">邀请注册人数 0</li>
        <li>注册并充值人数 0</li>
      </ul>
    </nav>
    <div class="popular">
      <p class="record">推广二维码</p>
      <img src="../../assets/erweima.png">
      <input ref="copyName" type="text" v-model="url" readonly/>
      <button @click="copyUrl">复制链接推广</button>
      <p class="remark">请将上面的二维码或者链接发送给您的朋友,您将获得一定的推荐奖励</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        url: 'http://www.yuriblog.com/?incode=123456'
      }
    },
    created () {
      this.$emit('viewIn', {title: '邀请好友', level: 'second'})
    },
    methods: {
      copyUrl () {
        this.$refs.copyName.select()
        document.execCommand('Copy', false, null)
      }
    }
  }
</script>

<style scoped>
  .wrap {
    width: 100%;
  }
  .topNav ul {
    display: flex;
    background: #fff;
    width: 100%;
    height: 0.35rem;
    border-radius: 0.05rem;
    font-size: 0.17rem;
  }
  .topNav ul li{
    flex: 1;
    font-size: 0.11rem;
    color: #000;
    text-align: center;
    height: 0.35rem;
    line-height: 0.35rem;
  }
  .topNav ul li {
    position: relative;
  }
  .topNav ul li:after{
    content: '|';
    color: #f5f5f5;
    position: absolute;
    right: -0.015rem;
    top:0;
    font-size: 0.15rem;
  }
  .topNav ul li:nth-last-of-type(1):after{
    content: '';
  }
  .topNav ul li.active{
    border-bottom: 0.01rem solid #39b8ff;
  }
  .popular {
    width: 100%;
    margin-top: 0.1rem;
    text-align: center;
  }
  .popular img {
    width: 1.37rem;
    height: 1.37rem;
    margin: 0.45rem auto;
  }
  .popular button{
    width: 80%;
    height: 0.32rem;
    background: #38b4fc;
    border:none;
    border-radius: 0.05rem;
    margin-top: 0.15rem;
    color: #fff;
  }
  .popular input{
    border:none;
    display: block;
    background: #f5f5f5;
    width: 80%;
    margin-left: 10%;
    text-align: center;
  }
  .record {
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    background: #fff;
    font-size: 0.15rem;
  }
  .remark {
    width: 70%;
    line-height: 0.2rem;
    margin-left: 15%;
    margin-top: 0.1rem;
  }
</style>
