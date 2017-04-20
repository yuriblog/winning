<template>
  <div class="wrap">
    <p class="top">
      <img src="../../assets/person.jpg">
      <span>test001</span>
      <i class="iconfont icon-qianjinxiayige"></i>
    </p>
    <nav>
      <ul>
        <li>
          <i style="color: #45b0e6" class="iconfont icon-m-loginNickname"></i>
          <span>昵称</span>
          <span>尚未设置 <i class="iconfont icon-qianjinxiayige"></i></span>
        </li>
        <li>
          <i style="color: #e03b42" class="iconfont icon-zhenshixingming"></i>
          <span>真实姓名</span>
          <span>尚未设置 <i class="iconfont icon-qianjinxiayige"></i></span>
        </li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li>
          <i style="color: #1d9943" class="iconfont icon-weixin1"></i>
          <span>微信号</span>
          <span>未知 <i class="iconfont icon-qianjinxiayige"></i></span>
        </li>
        <li>
          <i style="color: #e56c19" class="iconfont icon-shoujihao"></i>
          <span>手机号码</span>
          <span>未知 <i class="iconfont icon-qianjinxiayige"></i></span>
        </li>
        <li>
          <i style="color: #91b7de" class="iconfont icon-email"></i>
          <span>E-MAIL</span>
          <span>尚未设置 <i class="iconfont icon-qianjinxiayige"></i></span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {}
    },
    created () {
      this.$emit('viewIn', {title: '用户资料', level: 'second'})
    }
  }
</script>


<style scoped>
  .wrap{
    width: 100%;
  }
  .top{
    margin-top: 0.1rem;
    height: 0.65rem;
    line-height: 0.65rem;
    width: 100%;
    background: #fff;
    position: relative;
  }
  .top img {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 0.08rem;
    margin: 0.12rem 0.1rem;
  }
  .top span{
    font-size: 0.2rem;
    font-weight: 300;
    position: absolute;
    top:0.03rem;
    left: 0.6rem;
  }
  .top i{
    position: absolute;
    top:0.03rem;
    right:0.1rem;
  }
  nav {
    background: #fff;
    width: 100%;
    padding-left: 0.1rem;
    margin-top: 0.1rem;
    box-sizing: border-box;
  }
  nav ul li{
    height: 0.4rem;
    line-height: 0.4rem;
    border-bottom: 0.01rem solid #f5f5f5;
    position: relative;
  }
  nav ul li i:nth-of-type(1){
    margin-right: 0.1rem;
  }
  nav ul li span:nth-of-type(2){
    position: absolute;
    right:0;
  }
</style>
