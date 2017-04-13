<template>
  <nav :class="{active: value}">
    <ul class="moreList">
      <li v-for="(item, $index) in items" :class="{change: item.ischange}" @click="liList(item, $index)"><a>{{item.gameClass}}</a> <span>0</span><i class="iconfont icon-shang"></i>
        <div class="order" :class="{actived: item.isActive}">
          <button-set :btn-count="btnCount"></button-set>
        </div>
      </li>
    </ul>
    <div class="remark">
      <span>已选 1 个注单</span> <span>共 10 币</span>
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
      value: ''
    },
    data () {
      return {
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
          {gameClass: '混合', ischange: false, isActive: true},
          {gameClass: '豹子', ischange: false, isActive: true},
          {gameClass: '特码', ischange: false, isActive: true},
          {gameClass: '特码三包', ischange: false, isActive: true},
          {gameClass: '波色', ischange: false, isActive: true}
        ]
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
    height: 1.7rem;
    width: 100%;
    background: #eaf1f9;
    padding-top: 0.08rem;
    overflow: hidden;
    box-sizing: border-box;
  }
  .actived {
    display: none;
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
    margin: 0 0.2rem;
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
  }

  .btnList button:nth-of-type(1) {
    background: #3969d7;
  }

  .btnList button:nth-of-type(2) {
    background: #dc4e40;
  }

  .moreList {
    width: 100%;
  }

  .moreList li {
    width: 100%;
    line-height: 0.25rem;
    font-size: 0.12rem;
    margin: 0.01rem 0;
    color: #5e98b0;
    position: relative;
    background: -webkit-linear-gradient(left, #a1dff6, #cae9fd);
    background: -o-linear-gradient(left, #a1dff6, #cae9fd);
    background: -moz-linear-gradient(left, #a1dff6, #cae9fd);
    background: linear-gradient(left, #a1dff6, #cae9fd);
  }
  .moreList li.change{
    color: #fff;
    background: -webkit-linear-gradient(left, #2aa8f2, #b196e7);
    background: -o-linear-gradient(left, #2aa8f2, #b196e7);
    background: -moz-linear-gradient(left, #2aa8f2, #b196e7);
    background: linear-gradient(left, #2aa8f2, #b196e7);
  }
  .moreList li.change i{
    transform: rotate(180deg);
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
  }

  .moreList li i {
    position: absolute;
    right: 0.12rem;
  }

</style>
