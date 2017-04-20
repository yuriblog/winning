<template>
  <div class="wrap">
    <p class="top">
      <el-select v-model="value" placeholder="请选择银行名称">
        <el-option v-for="item in options" :label="item.label" :value="item.value" key="item.value">
        </el-option>
      </el-select>
    </p>
    <div class="mid">
      <h3>请输入提款金额</h3>
      <span class="remark">*注:单日提款次数无上限,总额无上限!</span>
      <p class="betnum">
        <i class="iconfont icon-chongzhi"></i>
        <input type="text" value="0.00">
      </p>
      <p class="yue">账户余额 : 0.00</p>
    </div>
    <p class="psw">安全密码 : <input type="password" placeholder="请输入安全密码"></p>
    <button class="btn">确认提现</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        options: []
      }
    },
    created () {
      this.$emit('viewIn', {title: '提现', level: 'second'})
    }
  }
</script>

<style scoped>
  .wrap {
    width: 100%;
    font-size: 0.13rem;
  }
  .top{
    margin-top: 0.1rem;
    width: 100%;
    height: 0.4rem;
  }
  .mid {
    margin-top: 0.06rem;
    background: #fff;
    overflow: hidden;
  }
  .mid h3{
    padding-left: 0.1rem;
    font-weight: bold;
    margin-top: 0.1rem;
  }
  .remark {
    display: inline-block;
    margin-left: 0.1rem;
    margin-top: 0.1rem;
    color: #e43c21;
  }
  .betnum {
    width: 100%;
    border-bottom: 0.01rem solid #f5f5f5;
    margin-top: 0.1rem;
    padding-left: 0.1rem;
  }
  .betnum i{
    color: #e55356;
    font-size: 0.3rem;
  }
  .betnum input {
    border:none;
    color: #e55356;
    font-size: 0.2rem;
    padding-left: 0.1rem;
  }
  .yue {
    height: 0.4rem;
    line-height: 0.4rem;
    padding-left: 0.1rem;
  }
  .psw {
    margin-top: 0.1rem;
    height: 0.4rem;
    line-height: 0.4rem;
    background: #fff;
    padding-left: 0.1rem;
  }
  .psw input {
    border: none;
    padding-left: 0.1rem;
  }
  .btn {
    width: 90%;
    margin-left: 5%;
    height: 0.32rem;
    color: #fff;
    background: #999999;
    border: none;
    border-radius: 0.05rem;
    margin-top: 0.4rem;
  }
</style>
