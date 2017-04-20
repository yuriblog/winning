<template>
  <div class="wrap">
    <div class="firstFloor">
      <p>上期 : 063期 开奖号码 : <span class="blue">1</span><span class="blue">1</span><span class="blue">1</span> <a class="more">更多 <i class="iconfont icon-you"></i></a></p>
    </div>
    <div class="secondFloor">
      <p>当前 : <span style="color: #4ea2f4">064期</span> 距离封盘还有 <span style="color: #d14b4c">2分39秒</span></p>
      <p>本期投注 : 0币,账户余额0.00币</p>
      <div class="bigred">开奖视频</div>
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
      <button @click="moreGame">投 注</button>
    </footer>
    <more-gameplay class="moreGame" v-model="goMore" :btn-count="btnCount" :items="items"></more-gameplay>
  </div>
</template>

<script>
  import MoreGameplay from '../luck28/MoreGameplay'
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
        btnCount: [
          {first: '大', second: '2.00'},
          {first: '小', second: '2.00'},
          {first: '单', second: '2.00'},
          {first: '双', second: '2.00'},
          {first: '小双', second: '4.00'},
          {first: '大双', second: '4.00'},
          {first: '大单', second: '4.00'},
          {first: '小单', second: '4.00'},
          {first: '极大', second: '4.00'},
          {first: '极小', second: '12.00'}
        ],
        items: [
          {gameClass: '整合', ischange: false, isActive: true},
          {gameClass: '万位', ischange: false, isActive: true},
          {gameClass: '千位', ischange: false, isActive: true},
          {gameClass: '百位', ischange: false, isActive: true},
          {gameClass: '个位', ischange: false, isActive: true},
          {gameClass: '和尾数', ischange: false, isActive: true},
          {gameClass: '龙虎斗', ischange: false, isActive: true},
          {gameClass: '棋牌', ischange: false, isActive: true},
          {gameClass: '和数', ischange: false, isActive: true},
          {gameClass: '一字', ischange: false, isActive: true},
          {gameClass: '组选三', ischange: false, isActive: true},
          {gameClass: '组选六', ischange: false, isActive: true},
          {gameClass: '跨度', ischange: false, isActive: true}
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
    margin-top: -0.45rem;
  }

  .firstFloor {
    margin-top: 0.45rem;
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
    overflow: hidden;
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
    background: #ff3301;
    color: #fff;
    width: 0.55rem;
    height: 0.27rem;
    line-height: 0.27rem;
    text-align: center;
    border-radius: 0.05rem;
    position: absolute;
    right: 0.1rem;
    top: 0.2rem;
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
    top:1.45rem;
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
    width: 90%;
    height: 0.35rem;
    color: #fff;
    border-radius: 0.05rem;
    border: none;
    margin-left: 5%;
    outline: none;
    background: #0a9ef4;
  }

  footer .iconfont {
    font-size: 0.25rem;
    position: absolute;
    margin-left: 0.05rem;
    top: 0.02rem;
  }
</style>
