<template>
  <div class="wrap">
    <div class="firstFloor">
      <p>上期 : 063期 开奖号码 : <span class="blue">1</span><span class="blue">1</span><span class="blue">1</span> <a class="more">更多 <i class="iconfont icon-you"></i></a></p>
    </div>
    <div class="secondFloor">
      <p>当前 : <span style="color: #4ea2f4">064期</span> 距离封盘还有 <span style="color: #d14b4c">2分39秒</span></p>
      <p>本期投注 : 0币,账户余额0.00币</p>
      <div class="bigred">投</div>
    </div>
    <div class="remessage">
      <div class="oneMessage">
        <p class="sendTime">晚上10:35:25</p>
        <div class="detail">
          <span class="picBox"><img src="../../assets/person.jpg" alt=""></span>
          <p class="account">100002</p>
          <div class="buyHistory">
            <span style="color: #eb042e;">第 813641 期</span> 购买了 大 200, 双 500, 大双 1000
          </div>
        </div>
      </div>
      <div class="oneMessage">
        <p class="sendTime">晚上10:35:25</p>
        <div class="detail">
          <span class="picBox"><img src="../../assets/person.jpg" alt=""></span>
          <p class="account">100002</p>
          <div class="buyHistory">
            <span style="color: #eb042e;">第 813641 期</span> 购买了 冠军9.200 单.500 亚军6.100 大.100，季军3.200，第四名8.100，第五名1.100，冠亚和18.50
          </div>
        </div>
      </div>
      <p class="count">还有30秒封盘</p>
    </div>
    <footer>
      <button @click="moreGame">更多玩法</button>
      <i class="iconfont icon-jia"></i>
    </footer>
    <more-gameplay class="moreGame" v-model="goMore" :items="items"></more-gameplay>
  </div>
</template>

<script>
  import MoreGameplay from './MoreGameplay'
  export default {
    name: 'Ticket',
    components: {
      MoreGameplay
    },
    created () {
      /*
       *  传递参数
       * */
      this.$emit('viewIn', {title: '重庆时时彩', level: 'second'})
    },
    data () {
      return {
        goBetting: false,
        goMore: true,
        items: [
          {kind: '整合', isActive: true},
          {kind: '万位', isActive: false},
          {kind: '千位', isActive: false},
          {kind: '百位', isActive: false},
          {kind: '个位', isActive: false},
          {kind: '和尾数', isActive: false},
          {kind: '龙虎斗', isActive: false},
          {kind: '棋牌', isActive: false},
          {kind: '和数', isActive: false},
          {kind: '一字', isActive: false},
          {kind: '组选三', isActive: false},
          {kind: '组选六', isActive: false},
          {kind: '跨度', isActive: false}
        ]
      }
    },
    methods: {
      moreGame () {
        this.goMore = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .moreGame {
    position: absolute;
    bottom: 0;
  }

  .wrap {
    height: 100vh;
    overflow: hidden;
    font-size: 0.11rem;
    position: relative;
  }

  .firstFloor {
    margin-top: 0.65rem;
    overflow: hidden;
    width: 100%;
    height: 0.4rem;
    background: #fff;
    border-bottom: 0.01rem solid #d9d9d9;
    position: relative;
  }

  .firstFloor p {
    margin: 0.1rem 0.1rem;
    position: relative;
  }
  .secondFloor {
    width: 100%;
    height: 0.6rem;
    background: #fff;
    border-bottom: 0.01rem solid #d9d9d9;
    position: relative;
  }
  .secondFloor p {
    margin: 0.15rem 0.1rem;
    position: relative;
  }

  .blue {
    width: 0.18rem;
    height: 0.18rem;
    display: inline-block;
    background: #31a0f9;
    color: #fff;
    line-height: 0.18rem;
    text-align: center;
    border-radius: 50%;
  }

  .minired {
    background: #d14b4c;
    color: #fff;
    width: 0.18rem;
    height: 0.18rem;
    display: inline-block;
    line-height: 0.18rem;
    text-align: center;
    border-radius: 50%;
  }

  .midred {
    background: #d14b4c;
    color: #fff;
    width: 0.21rem;
    height: 0.21rem;
    display: inline-block;
    line-height: 0.21rem;
    text-align: center;
    border-radius: 50%;
    font-size: 0.13rem;
    position: absolute;
    right: 0;
  }

  .bigred {
    background: #d14b4c;
    color: #fff;
    width: 0.34rem;
    height: 0.34rem;
    line-height: 0.34rem;
    text-align: center;
    border-radius: 50%;
    font-size: 0.16rem;
    position: absolute;
    right: 0.1rem;
    top: 0.03rem;
  }

  .more {
    color: #4ea2f4;
    font-size: 0.12rem;
    position: absolute;
    right: 0;
  }

  .more .iconfont {
    font-size: 0.12rem;
  }

  .remessage {
    width: 100%;
    background: #dcdedd;
    position: absolute;
    top:1.7rem;
    bottom: 0.5rem;
    overflow-y: scroll;
  }
  .oneMessage {
    width: 100%;
    margin: 0.1rem 0;
  }
  .detail {
    position: relative;
    overflow: hidden;
  }
  .account {
    position: absolute;
    top:0;
    left: 0.68rem;
  }
  .buyHistory {
    width: 1.93rem;
    background: #fff;
    margin-left: 0.68rem;
    line-height: 0.18rem;
    padding: 0.05rem 0.1rem;
    box-sizing: border-box;
    border-radius: 0.05rem;
    margin-top:0.16rem;
    position: relative;
  }
  .buyHistory:after {
    content: '';
    border-top:0.1rem solid #dcdedd;
    border-bottom: 0.1rem solid #dcdedd;
    border-right: 0.1rem solid #fff;
    position: absolute;
    right: 100%;
    top:20%;
  }
  .sendTime {
    width: 0.84rem;
    text-align: center;
    line-height: 0.2rem;
    height: 0.2rem;
    background: #bebfc1;
    color: #fff;
    margin: 0.05rem auto;
  }
  .picBox {
    width: 0.4rem;
    height: 0.4rem;
    display: inline-block;
    position: absolute;
    top:0;
    left: 0.1rem;
  }
  .picBox img {
    width: 100%;
    height: 100%;
    border-radius: 0.05rem;
  }
  .count {
    width: 1.6rem;
    height: 0.18rem;
    background: #999999;
    line-height: 0.18rem;
    text-align: center;
    color: #fff;
    margin: 0.02rem auto;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    background: #fff;
  }

  footer button {
    width: 2.4rem;
    height: 0.35rem;
    text-align: center;
    line-height: 0.35rem;
    color: #fff;
    border-radius: 0.05rem;
    border: 0.01rem solid #41bbf9;
    margin-left: 0.25rem;
    outline: none;
    background: -webkit-linear-gradient(#71cafd, #0d8bca);
    background: -o-linear-gradient(#71cafd, #0d8bca);
    background: -moz-linear-gradient(#71cafd, #0d8bca);
    background: linear-gradient(#71cafd, #0d8bca);
  }

  footer .iconfont {
    font-size: 0.25rem;
    position: absolute;
    margin-left: 0.05rem;
    top: 0.02rem;
  }
</style>
