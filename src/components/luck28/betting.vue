<template>
  <div>
    <el-dialog class="my-dialog" title="投注" size="large" v-model="value" :close-on-click-modal="false">
      <el-row :gutter="15">
        <el-col :span="8"><img @click="setBet(50)" src="../../assets/50.jpg"></el-col>
        <el-col :span="8"><img @click="setBet(100)" src="../../assets/100.jpg"></el-col>
        <el-col :span="8"><img @click="setBet(200)" src="../../assets/200.jpg"></el-col>
      </el-row>
      <el-row style="margin-top: 0.16rem" :gutter="15">
        <el-col :span="8"><img @click="setBet(500)" src="../../assets/500.jpg"></el-col>
        <el-col :span="8"><img @click="setBet(1000)" src="../../assets/1000.jpg"></el-col>
        <el-col :span="8"><img @click="setBet(2000)" src="../../assets/2000.jpg"></el-col>
      </el-row>
      <el-row style="margin-top: 0.25rem">
        <el-col style="text-align: center" :span="10">第286412期</el-col>
        <el-col style="text-align: center" :span="14">可用余额 : 100币</el-col>
      </el-row>
      <p class="betLine">
        <span class="bigblue">大</span>
        <input class="betnum" v-model="bettingNum" type="text">
        <span style="margin-left: 0.15rem">{{chinessNum}}</span>
      </p>
      <p class="foot">
        <button class="ensure">确定</button>
        <button @click="onClose" class="cancel">取消</button>
      </p>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      value: ''
    },
    data () {
      return {
        bettingNum: 0,
        chinessNum: '零'
      }
    },
    methods: {
      setBet (val) {
        if (val === 50) {
          this.chinessNum = '伍拾整'
        } else if (val === 100) {
          this.chinessNum = '壹佰整'
        } else if (val === 200) {
          this.chinessNum = '贰佰整'
        } else if (val === 500) {
          this.chinessNum = '伍佰整'
        } else if (val === 1000) {
          this.chinessNum = '壹仟整'
        } else if (val === 2000) {
          this.chinessNum = '贰仟整'
        }
        this.bettingNum = val
      },
      onClose () {
        this.$emit('input', false)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .foot {
    position: absolute;
    height: 0.38rem;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .ensure {
    background: #118acf;
  }
  .cancel {
    background: #0a9ef4;
  }
  .foot button {
    float: left;
    width: 50%;
    border: none;
    height: 0.38rem;
    outline: none;
    color: #fff;
  }

  .betLine {
    text-align: center;
    margin-top: 0.14rem;
    margin-bottom: 0.25rem;
  }
  .bigblue{
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    line-height: 0.2rem;
    margin-right: 0.05rem;
    background: #339bff;
    color: #fff;
    border-radius: 50%;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .betnum {
    width: 0.55rem;
    height: 0.19rem;
    border-radius: 0.05rem;
    border: 0.01rem solid #3bb7fd;
    padding-left: 0.07rem;
    box-sizing: border-box;
  }
</style>
