<template>
  <nav :class="{active: value}">
    <div class="top">
      <el-row :gutter="10">
        <el-col :span="3">&nbsp;</el-col>
        <el-col :span="3"><img src="../../assets/50.jpg"></el-col>
        <el-col :span="3"><img src="../../assets/100.jpg"></el-col>
        <el-col :span="3"><img src="../../assets/200.jpg"></el-col>
        <el-col :span="3"><img src="../../assets/500.jpg"></el-col>
        <el-col :span="3"><img src="../../assets/1000.jpg"></el-col>
        <el-col :span="3"><img src="../../assets/2000.jpg"></el-col>
        <el-col :span="3">&nbsp;</el-col>
      </el-row>
      <p>请选择或者输入快捷下注金额 : <input type="text"></p>
    </div>
    <ul class="moreList">
      <li v-for="(item, $index) in items" :class="{change: item.ischange}" @click="liList(item, $index)"><i class="iconfont icon-1"></i><a>{{item.gameClass}}</a> <span>0</span>
        <div class="order" :class="{actived: item.isActive}">
          <button-set :btn-count="btnCount"></button-set>
        </div>
      </li>
    </ul>
    <div class="remark">
      <span>已选 1 个注单</span><input type="text" placeholder="快捷金额"> <span>共 <a style="color: #d14b4c">10</a> 币</span>
    </div>
    <div class="btnList">
      <button>确定</button>
      <button @click="cancel">取消</button>
    </div>
  </nav>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  export default {
    props: {
      value: '',
      btnCount: '',
      items: ''
    },
    data () {
      return {
      }
    },
    methods: {
      cancel () {
        this.$emit('input', true)
      },
      liList (item, index) {
        this.items.forEach((item) => {
          Vue.set(item, 'ischange', false)
          Vue.set(item, 'isActive', true)
        })
        Vue.set(item, 'ischange', true)
        Vue.set(item, 'isActive', false)
      }
    }
  }
</script>
<style scoped>
  .order {
    height: 1.5rem;
    width: 100%;
    background: #eaf1f9;
    padding-top: 0.08rem;
    overflow: hidden;
    box-sizing: border-box;
  }
  .actived {
    display: none;
  }
  .top {
    border-bottom: 0.1rem solid #f5f5f5;
  }
  .top img {
    width: 100%;
    border-radius: 50%;
  }
  .top .el-row{
    margin-top: 0.1rem;
  }
  .top p {
    margin: 0.1rem 0.4rem;
  }
  .top p input {
    width: 0.6rem;
    height: 0.2rem;
    border: 0.01rem solid #34b9fc;
    text-align: center;
    border-radius: 0.05rem;
  }
  nav {
    width: 100%;
    background: #fff;
  }

  nav.active {
    top: 100vh;
  }

  .remark {
    width: 100%;
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
  }

  .remark span {
    margin: 0 0.1rem;
  }
  .remark input{
    width: 0.6rem;
    height: 0.2rem;
    border: 0.01rem solid #34b9fc;
    text-align: center;
    border-radius: 0.05rem;
  }

  .btnList {
    width: 100%;
    height: 0.35rem;
  }

  .btnList button {
    float: left;
    width: 50%;
    color: #fff;
    height: 0.35rem;
    border: none;
    background: #0a9ef4;
    box-sizing: border-box;
  }

  .btnList button:nth-of-type(1) {
    border-right: 0.01rem solid #8cd2ff;
  }

  .moreList {
    width: 100%;
    max-height: 3.2rem;
    overflow-y: scroll;
  }

  .moreList li {
    width: 100%;
    line-height: 0.3rem;
    font-size: 0.12rem;
    margin: 0.01rem 0;
    color: #000;
    position: relative;
    background: #fff;
    border-bottom: 0.01rem solid #f5f5f5;
  }
  .moreList li.change{
  }
  .moreList li.change i{
    transform: rotate(0deg);
  }
  .moreList li a {
    margin-left: 0.07rem;
  }

  .moreList li span {
    display: inline-block;
    width: 0.17rem;
    height: 0.17rem;
    border-radius: 50%;
    line-height: 0.17rem;
    text-align: center;
    color: #fff;
    background: #3f7896;
    margin-left: 0.08rem;
    position: absolute;
    right: 0.1rem;
    top:0.1rem;
  }

  .moreList li i {
    display: inline-block;
    transform: rotate(-90deg);
    color: #b9b9b9;
  }

</style>
