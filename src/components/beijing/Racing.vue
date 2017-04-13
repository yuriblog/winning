<template>
  <div class="wrap">
    <div v-if="isVideo" class="lotvideo">
      <video autoplay controls loop>
        <source src="http://ooacdagoc.bkt.clouddn.com/test.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
      </video>
    </div>
    <div v-if="!isVideo" class="firstFloor">
      <p>上期 : 813634期 <span class="blue">1</span><span class="blue">1</span><span class="blue">1</span><span class="blue">1</span><span class="blue">1</span><span class="blue">1</span><span class="blue">1</span><span class="blue">1</span><span class="blue">1</span><span class="blue">1</span></p>
      <p>3月22日 14:32冠亚和3小单 龙龙虎虎 <a class="more">更多 <i class="iconfont icon-you"></i></a></p>
    </div>
    <div class="secondFloor">
      <p>当前 : <span style="color: #4ea2f4">813637</span> 距离封盘还有 <span style="color: #d14b4c">2分39秒</span></p>
      <p>本期投注 : 0币,账户余额0.00币</p>
      <div @click="openVideo" class="bigred">{{openClose}}</div>
    </div>
    <div :style="styleobj" class="remessage">
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
      <button>单号1-10</button>
      <button>双面盘</button>
      <button @click="moreGame">冠亚和</button>
      <i class="iconfont icon-jia"></i>
    </footer>
    // 组建传递参数用v-bind方式
    <more-gameplay class="moreGame" v-model="goMore" :items="items"></more-gameplay>
  </div>
</template>

<script>
  import MoreGameplay from '../chongqing/MoreGameplay'
  export default {
    name: 'Racing',
    components: {
      MoreGameplay
    },
    created () {
      this.$emit('viewIn', {title: '北京赛车', level: 'second'})
    },
    data () {
      return {
        styleobj: {
          top: '1.86rem'
        },
        isVideo: false,
        goMore: true,
        openClose: '开奖视频',
        items: [
          {kind: '冠军', isActive: true},
          {kind: '亚军', isActive: false},
          {kind: '季军', isActive: false},
          {kind: '第四名', isActive: false},
          {kind: '第五名', isActive: false},
          {kind: '第六名', isActive: false},
          {kind: '第七名', isActive: false},
          {kind: '第八名', isActive: false},
          {kind: '第九名', isActive: false},
          {kind: '第十名', isActive: false}
        ]
      }
    },
    methods: {
      moreGame () {
        this.goMore = false
      },
      openVideo () {
        if (this.isVideo) {
          this.isVideo = false
          this.styleobj.top = '1.86rem'
          this.openClose = '开奖视频'
        } else {
          this.isVideo = true
          this.styleobj.top = '3.3rem'
          this.openClose = '关闭视频'
        }
      }
    }
  }
</script>
<style scoped>
  .lotvideo {
    margin-top: 0.65rem;
    width: 100%;
    height: 2.05rem;
    background: #000;
    overflow: hidden;
  }
  .lotvideo video{
    width: 100%;
    height: 100%;
  }
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
    height: 0.6rem;
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
    width: 0.55rem;
    height: 0.27rem;
    line-height: 0.27rem;
    text-align: center;
    border-radius: 0.05rem;
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
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
    padding-left: 0.18rem;
    bottom: 0;
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    background: #fff;
  }

  footer button {
    width: 0.7rem;
    height: 0.27rem;
    color: #fff;
    margin: 0 0.06rem;
    border: 0.01rem solid #41bbf9;
    border-radius: 0.05rem;
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
