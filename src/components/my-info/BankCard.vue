<template>
  <div class="wrap">
    <div class="mycard">
    <div v-for="item in items" class="oneCard" :class="[item.cardClass]">
      <span></span>
      <p class="name">{{item.name}}</p>
      <p class="lei">储蓄卡</p>
      <p class="number">*** **** **** {{item.number}}</p>
    </div>
    </div>
    <p class="addCard"><i class="iconfont icon-xinzeng"></i> 添加银行卡 <i class="iconfont icon-qianjinxiayige"></i></p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created () {
      this.$emit('viewIn', {title: '银行卡', level: 'second'})
      this.items.forEach(item => {
        if (item.name === '中国银行') {
          item.cardClass = 'china'
        } else if (item.name === '招商银行') {
          item.cardClass = 'attract'
        } else if (item.name === '建设银行') {
          item.cardClass = 'construction'
        } else if (item.name === '工商银行') {
          item.cardClass = 'Industry'
        } else if (item.name === '农业银行') {
          item.cardClass = 'farming'
        } else if (item.name === '邮政银行') {
          item.cardClass = 'postal'
        }
      })
    },
    data () {
      return {
        items: [
          {name: '招商银行', number: '0136'},
          {name: '建设银行', number: '1365'},
          {name: '工商银行', number: '9531'},
          {name: '中国银行', number: '9531'},
          {name: '邮政银行', number: '9531'},
          {name: '农业银行', number: '9531'}
        ]
      }
    }
  }
</script>

<style scoped>
  .wrap {
    width: 100%;
    min-height: 100vh;
    margin-top: -0.45rem;
    background: #000;
    overflow: hidden;
  }
  .mycard {
    margin-top: 0.45rem;
    overflow: hidden;
  }
  .oneCard {
    position: relative;
    height: 1rem;
    width: 96%;
    margin-left: 2%;
    margin-top: 0.1rem;
    border-radius: 0.05rem;
  }
  /* 中国银行*/
  .china {
    background: -webkit-linear-gradient(left, #af091f, #ca2c41);
    background: -o-linear-gradient(right, #af091f, #ca2c41);
    background: -moz-linear-gradient(right, #af091f, #ca2c41);
    background: linear-gradient(to right, #af091f, #ca2c41);
  }
  .china span {
    background: url("../../assets/sprite.png") no-repeat;
    background-size: 1.8rem 0.3rem;
    background-position: 0 0;
  }
  /* 工商银行*/
  .Industry {
    background: -webkit-linear-gradient(left, #a6120e, #ca2c41);
    background: -o-linear-gradient(right, #a6120e, #ca2c41);
    background: -moz-linear-gradient(right, #a6120e, #ca2c41);
    background: linear-gradient(to right, #a6120e, #ca2c41);
  }
  .Industry span {
    background: url("../../assets/sprite.png") no-repeat;
    background-size: 1.8rem 0.3rem;
    background-position: -0.3rem 0;
  }
  /* 农业银行*/
  .farming {
    background: -webkit-linear-gradient(left, #04927a, #14af95);
    background: -o-linear-gradient(right, #04927a, #14af95);
    background: -moz-linear-gradient(right, #04927a, #14af95);
    background: linear-gradient(to right, #04927a, #14af95);
  }
  .farming span {
    background: url("../../assets/sprite.png") no-repeat;
    background-size: 1.8rem 0.3rem;
    background-position: -0.6rem 0;
  }
  /* 建设银行*/
  .construction {
    background: -webkit-linear-gradient(left, #0a2d8b, #1f45ac);
    background: -o-linear-gradient(right, #0a2d8b, #1f45ac);
    background: -moz-linear-gradient(right, #0a2d8b, #1f45ac);
    background: linear-gradient(to right, #0a2d8b, #1f45ac);
  }
  .construction span {
    background: url("../../assets/sprite.png") no-repeat;
    background-size: 1.8rem 0.3rem;
    background-position: -0.9rem 0;
  }
  /* 招商银行*/
  .attract {
    background: -webkit-linear-gradient(left, #ff580a, #f56d2d);
    background: -o-linear-gradient(right, #ff580a, #f56d2d);
    background: -moz-linear-gradient(right, #ff580a, #f56d2d);
    background: linear-gradient(to right, #ff580a, #f56d2d);
  }
  .attract span {
    background: url("../../assets/sprite.png") no-repeat;
    background-size: 1.8rem 0.3rem;
    background-position: -1.2rem 0;
  }
  /* 邮政银行*/
  .postal {
    background: -webkit-linear-gradient(left, #29715d, #29846b);
    background: -o-linear-gradient(right, #29715d, #29846b);
    background: -moz-linear-gradient(right, #29715d, #29846b);
    background: linear-gradient(to right, #29715d, #29846b);
  }
  .postal span {
    background: url("../../assets/sprite.png") no-repeat;
    background-size: 1.8rem 0.3rem;
    background-position: -1.5rem 0;
  }
  .oneCard span{
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    position: absolute;
    top:0.19rem;
    left: 0.16rem;
  }
  .name {
    position: absolute;
    color: #fff;
    font-size: 0.13rem;
    top:0.19rem;
    left: 0.53rem;
  }
  .lei {
    position: absolute;
    left: 0.53rem;
    top:0.36rem;
    color: #f9f9f9;
  }
  .number {
    position: absolute;
    left: 0.53rem;
    top:0.67rem;
    font-size: 0.15rem;
    letter-spacing: 0.01rem;
    color: #fff;
  }
  .addCard {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    position: relative;
    padding-left: 0.1rem;
    box-sizing: border-box;
    color: #666666;
    font-size: 0.13rem;
  }
  .addCard i{
    color: #fff;
    margin-right: 0.1rem;
  }
  .addCard i:nth-of-type(2){
    position: absolute;
    right: 0.1rem;
  }
</style>
