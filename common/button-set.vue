<template>
  <div :class="[isLucency ? 'btnSet' : 'btnSets']">
    <el-row :gutter="2">
      <!-- v-for 默认行为试着不改变整体，而是替换元素。迫使其重新排序的元素,需要提供一个 key 的特殊属性-->
      <el-col v-for="(item, $index) in btnCount" :key="item.first" :span="8">
        <button><span :class=item.bgColor>{{item.first}}</span></button>
        <button>{{item.second}}</button>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      btnCount: '',
      isLucency: {
        type: Boolean,
        default: true
      }
    },
    created () {
      this.btnCount.forEach((item, index) => {
        if (index % 3 === 0) {
          item.bgColor = 'green'
        } else if (index % 3 === 1) {
          item.bgColor = 'blue'
        } else if (index % 3 === 2) {
          item.bgColor = 'red'
        }
      })
    },
    data () {
      return {
        bgColor: ''
      }
    }
  }
</script>

<style scoped>
  .btnSets .el-row .el-col button {
    width: 45%;
    height: 0.26rem;
    color: #dc4e40;
    border: 0.01rem solid #3e9def;
    float: left;
    outline: none;
  }
  .btnSets .el-row .el-col button span:nth-of-type(1) {
    display: inline-block;
    width: 0.13rem;
    height: 0.13rem;
    border-radius: 50%;
    color: #fff;
    font-size: 0.08rem;
    line-height: 0.13rem;
    text-align: center;
  }
  .btnSets .el-row .el-col button span:nth-of-type(1).green{
    background: #63b85d;
  }
  .btnSets .el-row .el-col button span:nth-of-type(1).blue{
    background: #276fd1;
  }
  .btnSets .el-row .el-col button span:nth-of-type(1).red{
    background: #d64951;
  }
  .btnSet .el-row .el-col button {
    width: 45%;
    height: 0.26rem;
    color: #fff;
    border: 0.01rem solid #3e9def;
    float: left;
    outline: none;
    background: -webkit-linear-gradient(#9ccffe, #47aeff);
    background: -o-linear-gradient(#9ccffe, #47aeff);
    background: -moz-linear-gradient(#9ccffe, #47aeff);
    background: linear-gradient(#9ccffe, #47aeff);
  }
  .btnSet .el-row .el-col button:nth-of-type(1),.btnSets .el-row .el-col button:nth-of-type(1){
    border-top-left-radius: 0.04rem;
    border-bottom-left-radius: 0.04rem;
  }
  .btnSet .el-row .el-col button:nth-of-type(2),.btnSets .el-row .el-col button:nth-of-type(2){
    border-top-right-radius: 0.04rem;
    border-bottom-right-radius: 0.04rem;
  }
  .btnSet .el-row,.btnSets .el-row {
    text-align: center;
    padding-left: 0.1rem;
    box-sizing: border-box;
  }
  .btnSet .el-row .el-col,.btnSets .el-row .el-col {
    margin-top: 0.08rem;
  }
</style>
