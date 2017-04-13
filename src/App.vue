<template>
  <div class="mainWrap" id="app">
    <header v-if="isHeader">
      <ul>
        <li>
          <i v-show="isBack" @click="goBack" class="iconfont icon-llmainpageback"></i>
        </li>
        <li>
          {{title}}
        </li>
        <li>
          <i class="iconfont icon-kefu"></i>
        </li>
      </ul>
    </header>
    <router-view @viewIn="changeTitle"></router-view>
    <footer v-if="isMain">
      <ul>
        <li>
          <router-link :class="initClass" to="/Home">
            <i class="iconfont icon-shouye-shouye"></i>
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/record">
            <i class="iconfont icon-dingwei"></i>
            <p>记录</p>
          </router-link>
        </li>
        <li>
          <i class="iconfont icon-biaoqianlandongtai"></i>
          <p>动态</p>
        </li>
        <li>
          <router-link to="/Personal">
          <i class="iconfont icon-wode"></i>
          <p>我的</p>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'app',
    data () {
      return {
        isMain: true,
        isBack: false,
        isHeader: true,
        title: '首页',
        initClass: 'active'
      }
    },
    watch: {
      title: function () {
        this.initClass = ''
      }
    },
    methods: {
      goBack () {
        window.history.back(-1)
      },
      changeTitle (val) {
        this.title = val.title
        if (val.title === '') {
          this.isHeader = false
        } else {
          this.isHeader = true
        }
        if (val.level === 'second') {
          this.isBack = true
          this.isMain = false
        } else if (val.level === 'first') {
          this.isBack = false
          this.isMain = true
        }
      }
    }
  }
</script>

<style>
  .mainWrap {
    width: 100%;
  }

  header {
    height: 0.65rem;
    width: 100%;
    background: #39b8ff;
    position: fixed;
    top: 0;
    z-index: 2;
  }

  header ul li .iconfont {
    font-size: 0.26rem;
  }

  header ul {
    display: flex;
  }

  header ul li {
    flex: 1;
    color: #fff;
    text-align: center;
    list-style: none;
    font-size: 0.2rem;
    margin-top: 0.3rem;
    margin-right: 0.15rem;
    margin-left: 0.15rem;
    line-height: 0.25rem;
  }

  header ul li:nth-of-type(1) {
    margin-left: 0.05rem;
  }

  header ul li:nth-of-type(2) {
    flex: 10;
  }

  footer {
    width: 100%;
    height: 0.5rem;
    background: #f2f2f2;
    position: fixed;
    bottom: 0;
  }

  footer ul {
    display: flex;
    width: 100%;
  }

  footer ul li {
    flex: 1;
    line-height: 0.18rem;
    margin-top: 0.08rem;
    list-style: none;
    text-align: center;
    font-size: 0.1rem;
  }

  footer ul li a {
    color: #353535;
  }

  footer ul li a.router-link-active {
    color: #32b9fb;
  }
  footer ul li a.active {
    color: #32b9fb;
  }

  .iconfont {
    font-size: 0.18rem;
  }

  .el-dialog {
    border-radius: 0.12rem !important;
    border: 0.03rem solid #3bb6ff;
    background: #f1fcff;
    overflow: hidden;
  }

  .el-dialog__header {
    display: none;
  }
</style>
