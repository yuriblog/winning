<template>
  <div class="pers_wrap">
    <div class="pers_top">
      <p class="pers_set">
        <i @click="goSet" class="iconfont icon-shezhi"></i>
        <i class="iconfont icon-xiaoxi"></i>
      </p>
      <div class="info">
        <p class="pic"><img @click="goUserData" src="../assets/person.jpg"></p>
        <p v-if="isLogin">{{username}}</p>
        <p v-if="!isLogin" @click="goRegister">登录/注册</p>
        <p v-if="isLogin"><span>积分:622.00</span></p>
      </div>
    </div>
    <nav class="deal">
      <ul>
        <li @click="goRecharge">
          <span style="background: #e55356"><i class="iconfont icon-chongzhi"></i></span>
          <p>充值</p>
        </li>
        <li @click="goWithdraw">
          <span style="background: #50ad4b"><i class="iconfont icon-meiyuandollar154"></i></span>
          <p>提现</p>
        </li>
        <li @click="goBank">
          <span style="background: #f3a91c"><i class="iconfont icon-wodeyinxingqia"></i></span>
          <p>银行卡</p>
        </li>
      </ul>
    </nav>
    <div class="purchase">
      <ul>
        <li @click="goFinancial">
          <i style="color: #da7e81" class="iconfont icon-finance"></i> 财务记录 <i class="iconfont icon-qianjinxiayige"></i>
        </li>
        <li @click="goBetManage">
          <i style="color: #efa068" class="iconfont icon-sfsicontouzhuchenggong"></i> 投注管理 <i class="iconfont icon-qianjinxiayige"></i>
        </li>
        <li @click="goInvite">
          <i style="color: #63bed1" class="iconfont icon-yaoqinghaoyou"></i> 邀请好友 <i class="iconfont icon-qianjinxiayige"></i>
        </li>
        <li>
          <i style="color: #52aa5c" class="iconfont icon-redbag"></i> 红包中心 <i class="iconfont icon-qianjinxiayige"></i>
        </li>
        <li>
          <i style="color: #999ac8" class="iconfont icon-tongji"></i> 综合统计 <i class="iconfont icon-qianjinxiayige"></i>
        </li>
      </ul>
    </div>
    <p v-if="isLogin" @click="exitLogin" class="btnbox"><button>注销登录</button></p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created () {
      this.$emit('viewIn', {title: '', level: 'first'})
      if (localStorage.getItem('username')) {
        this.username = localStorage.getItem('username')
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    },
    watch: {
      username () {
        if (this.username === '') {
          this.isLogin = false
        }
      }
    },
    data () {
      return {
        username: '',
        isLogin: false
      }
    },
    methods: {
      goRegister () {
        this.$router.push({path: '/Register'})
      },
      exitLogin () {
        localStorage.removeItem('username')
        this.username = ''
      },
      goRecharge () {
        this.$router.push({path: '/Recharge'})
      },
      goBetManage () {
        this.$router.push({path: '/BettingManage'})
      },
      goFinancial () {
        this.$router.push({path: '/Financial'})
      },
      goSet () {
        this.$router.push({path: '/Setting'})
      },
      goUserData () {
        this.$router.push({path: '/UserData'})
      },
      goInvite () {
        this.$router.push({path: '/Invite'})
      },
      goWithdraw () {
        this.$router.push({path: '/Withdraw'})
      },
      goBank () {
        this.$router.push({path: '/BankCard'})
      }
    }
  }
</script>

<style scoped>
  .pers_wrap {
    font-size: 0.1rem;
    width: 100%;
    margin-top: -0.45rem;
    margin-bottom: 0.5rem;
    background: #f5f5f5;
  }
  .pers_top {
    width: 100%;
    height: 1.95rem;
    background: url("../assets/personbg.jpg");
    background-size: 100%;
    overflow: hidden;
    position: relative;
  }
  .pers_set {
    position: relative;
    width: 100%;
    margin: 0.1rem;
    color: #fff;
    font-size: 0.2rem;
    box-sizing: border-box;
  }
  .pers_set i:nth-of-type(2){
    position: absolute;
    right: 0.2rem;
  }
  .info {
    width: 100%;
    text-align: center;
    color: #fff;
  }
  .info p{
    margin: 0.11rem 0;
    font-size: 0.13rem;
  }
  .info p span {
    width: 1.9rem;
    height: 0.28rem;
    line-height: 0.28rem;
    display: inline-block;
    border:0.01rem solid #fff;
    color: #fff;
    border-radius: 0.05rem;
    text-align: center;
  }
  .info .pic img{
    width: 0.68rem;
    height: 0.68rem;
    border-radius: 0.15rem;
  }
  .deal {
    width: 100%;
    height: 0.69rem;
    background: #fff;
  }
  .deal ul {
    width: 100%;
    display: flex;
  }
  .deal ul li{
    flex: 1;
    height: 0.52rem;
    color: #000;
    text-align: center;
    margin-top: 0.09rem;
    border-right: 0.02rem solid #e5e5e5;
  }
  .deal ul li:nth-last-of-type(1){
    border: none;
  }
  .deal ul li p{
    line-height: 0.25rem;
    font-size: 0.15rem;
  }
  .deal ul li span{
    display: inline-block;
    height: 0.31rem;
    width: 0.31rem;
    border-radius: 50%;
    line-height: 0.31rem;
    color: #fff;
  }
  .purchase {
    background: #fff;
    width: 100%;
    margin-top: 0.11rem;
  }
  .purchase ul li{
    color: #000;
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    border-bottom: 0.01rem solid #f5f5f5;
    margin-left: 0.15rem;
    padding-left: 0.02rem;
    box-sizing: border-box;
    position: relative;
  }
  .purchase ul li i:nth-of-type(1){
    margin-right: 0.15rem;
  }
  .purchase ul li i:nth-of-type(2){
    display: inline-block;
    position: absolute;
    right: 0.3rem;
  }
  .btnbox {
    text-align: center;
    width: 100%;
    margin-top: 0.1rem;
  }
  .btnbox button {
    width: 2.35rem;
    height: 0.35rem;
    background: #6699ff;
    border: none;
    outline: none;
    border-radius: 0.05rem;
    color: #fff;
  }
</style>
