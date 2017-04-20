<template>
  <div class="wrap">
    <nav>
      <ul>
        <li><i style="color: #f49e47" class="iconfont icon-denglu-mima"></i>登录密码 <i class="typeone iconfont icon-gantanhaotishi"></i><span>安全</span> <i
          class="iconfont icon-qianjinxiayige"></i></li>
        <li><i style="color: #e1737e"  class="iconfont icon-denglumima"></i>支付密码 <i class="typetwo iconfont icon-gantanhaotishi"></i><span>尚未设置</span> <i
          class="iconfont icon-qianjinxiayige"></i></li>
        <li><i style="color: #399238"  class="iconfont icon-anquan"></i>安全问题 <i class="typetwo iconfont icon-gantanhaotishi"></i><span>尚未设置</span> <i
          class="iconfont icon-qianjinxiayige"></i></li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li><i style="color: #9698c8"  class="iconfont icon-iconfontxiaoxi1"></i>消息通知
        <el-switch
          v-model="value"
          on-color="#21a639"
          off-color="#666">
        </el-switch>
        </li>
        <li><i style="color: #a47d80"  class="iconfont icon-shanchu"></i>清除缓存 <i class="iconfont icon-qianjinxiayige"></i></li>
        <li><i style="color: #51ccdc"  class="iconfont icon-guanyu"></i>关于LEBT <i class="iconfont icon-qianjinxiayige"></i></li>
      </ul>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        value: true
      }
    },
    created () {
      this.$emit('viewIn', {title: '设置', level: 'second'})
    }
  }
</script>

<style scoped>
  .wrap {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  .wrap nav{
    background: #fff;
    margin-top: 0.1rem;
    width: 100%;
  }
  .wrap nav ul li{
    margin-left: 0.15rem;
    height: 0.4rem;
    line-height: 0.4rem;
    width: 100%;
    border-bottom: 0.01rem solid #f5f5f5;
    position: relative;
  }
  .wrap nav ul li span{
    position: absolute;
    right: 0.5rem;
  }
  .wrap nav ul li i:nth-of-type(1){
    margin-right: 0.1rem;
  }
  .icon-gantanhaotishi{
    position: absolute;
    right: 1rem;
  }
  .typeone{
    color: #359237;
  }
  .typetwo{
    color: #e83b19;
  }
  .icon-qianjinxiayige {
    position: absolute;
    right: 0.2rem;
  }
  .el-switch {
    position: absolute;
    right:0.2rem;
    top:0.1rem;
  }
</style>
