<template>
  <div class="wrap">
    <div class="topNav">
      <ul>
        <li v-for="(item, $index) in items" @click="liList(item, $index)" :class="{'active': item.active,
        'unactive': !item.active}">
          {{item.val}}
        </li>
      </ul>
    </div>
    <div class="content">
      <table style="border-collapse: separate;border-spacing: 0 0.05rem">
        <thead>
        <tr>
          <td>期号</td>
          <td>开奖时间</td>
          <td>开奖号码</td>
          <td>状态</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{{newNO}}</td>
          <td>03-21 22:00</td>
          <td>?</td>
          <td @click="goBuy" class="stateCol">竞猜</td>
        </tr>
        <tr v-for="item in number">
          <td>{{item.NO}}</td>
          <td>{{item.time}}</td>
          <td>{{item.number}}</td>
          <td>{{item.state}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  export default {
    name: 'Record',
    data () {
      return {
        newNO: '',
        number: [],
        url: '../../static/record/xy28.json',
        active: false,
        path: 'Luck',
        index: 0,
        items: [
          {val: '幸运28'},
          {val: '加拿大28'},
          {val: '北京赛车'},
          {val: '重庆时时彩'},
          {val: '幸运飞艇'}
        ]
      }
    },
    created () {
      this.$emit('viewIn', {title: '开奖号码', level: 'first'})
      if (localStorage.getItem('index')) {
        this.index = parseInt(localStorage.getItem('index'))
        if (this.index === 0) {
          this.getNumber()
        }
      } else {
        this.getNumber()
      }
      Vue.set(this.items[this.index], 'active', true)
    },
    watch: {
      index: function (val, oldVal) {
        if (val === 0) {
          this.url = '../../static/record/xy28.json'
          this.path = 'Luck'
        } else if (val === 1) {
          this.url = '../../static/record/jnd28.json'
          this.path = 'Canada'
        } else if (val === 2) {
          this.url = '../../static/record/beijin.json'
          this.path = 'Racing'
        } else if (val === 3) {
          this.path = 'Ticket'
          this.url = '../../static/record/chonqing.json'
        } else if (val === 4) {
          this.url = '../../static/record/feiting.json'
        }
        this.getNumber()
      }
    },
    methods: {
      goBuy () {
        this.$router.push({path: '/' + this.path}) // 路径跳转
      },
      getNumber () {
        this.http.get(this.url).then((data) => {
          this.number = data.data
          this.newNO = data.data[0].NO + 1
        })
      },
      liList (item, index) {
        this.index = index
        localStorage.setItem('index', this.index)
        this.items.forEach((item) => {
          Vue.set(item, 'active', false)
        })
        Vue.set(item, 'active', true)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .wrap {
   margin-top: 0.65rem;
   margin-bottom: 0.5rem;
   width: 100%;
   overflow: hidden;
   background: #f6f7f9;
 }
 .topNav ul {
   display: flex;
   width: 94%;
   margin-left: 2%;
   margin-top: 0.12rem;
   border: 0.02rem solid #39b8ff;
   border-radius: 0.05rem;
   font-size: 0.17rem;
   color: #39b8ff;
 }
  .topNav ul li{
    flex: 1;
    font-size: 0.11rem;
    color: #353535;
    text-align: center;
    height: 0.22rem;
    line-height: 0.22rem;
  }
 .topNav ul li {
   position: relative;
 }
 .topNav ul li:after{
   content: '|';
   color: #39b8ff;
   position: absolute;
   right: -0.015rem;
   top:0;
   font-size: 0.15rem;
 }
 .topNav ul li:nth-last-of-type(1):after{
   content: '';
 }
  .topNav ul li.active{
    background: #39b8ff;
    color: #fff;
  }

  .content {
    margin-top: 0.13rem;
    width: 100%;
  }
  .content table {
    font-size: 0.1rem;
    width: 100%;
  }
 .content table thead tr{
   background: #f0f1f5;
   width: 100%;
   height: 0.27rem;
   line-height: 0.27rem;
 }
 .content table tbody tr{
   background: #fff;
   width: 100%;
   height: 0.35rem;
   line-height: 0.35rem;
 }
 .content table tbody tr td:nth-last-of-type(1) {
   color: #73d0ff;
 }
 .stateCol {
   color: #ff4556 !important;
 }
 .content table tr td{
   width: 0.8rem;
   text-align: center;
   border: none;
   border-bottom: 0.01rem solid #dbdbdb;
   border-top: 0.01rem solid #dbdbdb;
 }
</style>
