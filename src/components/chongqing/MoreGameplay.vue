<template>
  <div class="mgWrap" :class="{QC_active: value}">
    <nav class="topnav">
      <ul>
        <li v-for="(item, $index) in items" :class="{active: item.isActive}" @click="selectLi(item, $index)">{{item.kind}}</li>
      </ul>
      <div class="CQ_right">
        <div>
          <button-set :is-lucency="false" :btn-count="btnCounts"></button-set>
        </div>
        <div>
          <button-set :btn-count="btnCount"></button-set>
        </div>
      </div>
    </nav>
    <div class="CQ_content">
      <span>已选 1 个注单</span>
      <input type="text" placeholder="快捷金额">
      <span class="much">共 <a style="color:#ce4f58">10</a> 币</span>
    </div>
    <div class="CQ_btnFoot">
      <button>确定</button>
      <button @click="cancel">取消</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  export default {
    props: {
      value: '',
      items: ''
    },
    data () {
      return {
        btnCounts: [
          {first: '1', second: '200'},
          {first: '2', second: '100'},
          {first: '3', second: '50'},
          {first: '4', second: '30'},
          {first: '5', second: '20'},
          {first: '6', second: '19'},
          {first: '7', second: '18'},
          {first: '8', second: '17'},
          {first: '9', second: '15'},
          {first: '10', second: '14'}
        ],
        btnCount: [
          {first: '大', second: '2.00'},
          {first: '小', second: '2.00'},
          {first: '单', second: '2.00'},
          {first: '双', second: '2.00'},
          {first: '龙', second: '4.00'},
          {first: '虎', second: '4.00'}
        ]
      }
    },
    methods: {
      cancel () {
        // 关闭并把true返回给父组件
        this.$emit('input', true)
      },
      selectLi (item, index) {
        this.items.forEach(item => {
          Vue.set(item, 'isActive', false)
        })
        Vue.set(item, 'isActive', true)
      }
    }
  }
</script>

<style>
  .CQ_btnFoot {
    width: 100%;
    height: 0.35rem;
  }
  .CQ_btnFoot button{
    width: 50%;
    height: 0.35rem;
    float: left;
    border: none;
    color: #fff;
    outline: none;
  }
  .CQ_btnFoot button:nth-of-type(1){
    background: #3969d7;
  }
  .CQ_btnFoot button:nth-of-type(2){
    background: #dc4e40;
  }
  .CQ_content {
    width: 100%;
    height: 0.32rem;
    background: #fff;
    text-align: center;
    line-height: 0.32rem;
  }
  .CQ_content input {
    width: 0.55rem;
    height: 0.18rem;
    border: 0.01rem solid #3ab7fa;
    border-radius: 0.05rem;
    font-size: 0.07rem;
    padding-left: 0.03rem;
    box-sizing: border-box;
  }
  .CQ_content .much {
    margin-left: 0.15rem;
  }
  .mgWrap {
    width: 100%;
    position: relative;
  }
  .topnav {
    width: 100%;
    position: relative;
  }
  .topnav ul li{
    width: 0.58rem;
    height: 0.24rem;
    line-height: 0.24rem;
    text-align: center;
    color: #000;
    background: #c7e2f3;
    border-bottom: 0.01rem solid #fff;
  }
  .topnav ul li.active{
    background: #39b8ff;
    color: #fff;
  }
  .topnav .CQ_right{
    position: absolute;
    left: 0.58rem;
    right: 0;
    top:0;
    height: 100%;
    background: #d2dbe4;
  }
  .topnav .CQ_right>div {
    margin: 0.1rem 0;
  }
  .QC_active {
    top: 100vh;
  }
</style>
