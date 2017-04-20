<template>
  <div>
    <nav class="topNav">
      <ul>
        <li v-for="item in items" @click="liList(item, items)" :class="{active: item.isActive}">{{item.name}}</li>
      </ul>
    </nav>
    <p class="record">
      <el-dropdown trigger="click" @command="commandList">
      <span class="el-dropdown-link">
        {{searchTime}}<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="过去一周">过去一周</el-dropdown-item>
          <el-dropdown-item command="过去一月">过去一月</el-dropdown-item>
          <el-dropdown-item command="所有记录">所有记录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        searchTime: '过去一周',
        items: [
          {name: '幸运28', isActive: true},
          {name: '加拿大28', isActive: false},
          {name: '北京赛车', isActive: false},
          {name: '重庆时时彩', isActive: false},
          {name: '幸运飞艇', isActive: false}
        ]
      }
    },
    created () {
      this.$emit('viewIn', {title: '投注记录', level: 'second'})
    },
    methods: {
      commandList (command) {
        this.searchTime = command
      },
      liList (item, items) {
        items.forEach(item => {
          item.isActive = false
        })
        item.isActive = true
      }
    }
  }
</script>

<style scoped>
  .topNav ul {
    display: flex;
    background: #fff;
    width: 100%;
    height: 0.35rem;
    border-radius: 0.05rem;
    font-size: 0.17rem;
  }
  .topNav ul li{
    flex: 1;
    font-size: 0.11rem;
    color: #000;
    text-align: center;
    height: 0.35rem;
    line-height: 0.35rem;
  }
  .topNav ul li {
    position: relative;
  }
  .topNav ul li:after{
    content: '|';
    color: #f5f5f5;
    position: absolute;
    right: -0.015rem;
    top:0;
    font-size: 0.15rem;
  }
  .topNav ul li:nth-last-of-type(1):after{
    content: '';
  }
  .topNav ul li.active{
    border-bottom: 0.01rem solid #39b8ff;
  }
 .record {
   width: 100%;
   height: 0.4rem;
   line-height: 0.4rem;
   text-align: center;
   background: #fff;
   font-size: 0.1rem;
   margin-top: 0.1rem;
 }
  .el-dropdown-menu__item {
    font-size: 0.1rem;
  }
</style>
