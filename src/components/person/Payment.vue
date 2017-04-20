<template>
  <div class="pay_wrap">
    <div class="pay_content">
    <p class="paytitle">{{paytitle}}</p>
    <ul class="password">
      <li v-for="item in items">{{item}}</li>
    </ul>
    <p class="forget"><a>忘记密码</a></p>
    <div class="keyboard">
      <p class="remark"><i class="iconfont icon-anquan"></i>安全键盘</p>
      <el-row>
        <el-col :span="8"><span @click="setpsd(1)">1</span></el-col>
        <el-col :span="8"><span @click="setpsd(2)">2</span></el-col>
        <el-col :span="8"><span @click="setpsd(3)">3</span></el-col>
        <el-col :span="8"><span @click="setpsd(4)">4</span></el-col>
        <el-col :span="8"><span @click="setpsd(5)">5</span></el-col>
        <el-col :span="8"><span @click="setpsd(6)">6</span></el-col>
        <el-col :span="8"><span @click="setpsd(7)">7</span></el-col>
        <el-col :span="8"><span @click="setpsd(8)">8</span></el-col>
        <el-col :span="8"><span @click="setpsd(9)">9</span></el-col>
        <el-col :span="8"><span @click="cancel">取消</span></el-col>
        <el-col :span="8"><span @click="setpsd(0)">0</span></el-col>
        <el-col :span="8"><span @click="del"><i class="iconfont icon-shanjianyiwei2"></i></span></el-col>
      </el-row>
    </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        items: [],
        pswList: [],
        paytitle: '请设置支付密码'
      }
    },
    created () {
      this.items.length = 6
    },
    methods: {
      del () {
        this.pswList.pop()
        this.items.shift()
        this.items.length = 6
      },
      cancel () {
        this.$emit('close')
      },
      setpsd (num) {
        this.pswList.push(num)
        this.items.unshift('•')
        this.items.pop()
        if (this.pswList.length === 6) {
          this.paytitle = '请确认支付密码'
          this.items = []
          this.items.length = 6
        }
        if (this.pswList.length === 12) {
          this.pswList.forEach((item, index, arr) => {
            console.log(index)
            if (index <= 5 && item !== arr[index + 6]) {
              this.$message.error('两次密码不一致,请重新输入')
              this.items = []
              this.items.length = 6
              this.pswList = []
            } else if (index === 5) {
              this.$emit('close')
              return
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  .pay_wrap {
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.2);
    position: absolute;
    top:0;
  }
  .pay_content {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #f7f7f7;
  }
  .paytitle {
    width: 100%;
    text-align: center;
    height: 0.3rem;
    line-height: 0.3rem;
    font-weight: bold;
    border-bottom: 0.01rem solid #f1f1f1;
  }
  .password {
    width: 80%;
    margin-left: 10%;
    margin-top: 0.2rem;
    display: flex;
    height: 0.4rem;
    overflow: hidden;
    background: #fff;
  }
  .password li{
    flex: 1;
    height: 0.2rem;
    text-align: center;
    line-height: 0.2rem;
    margin-top: 0.1rem;
    border-right: 0.01rem solid #cdcdcd;
  }
  .password li:nth-last-of-type(1){
    border: none;
  }
  .forget {
    width: 80%;
    margin-left: 10%;
    text-align: right;
    margin-top: 0.1rem;
  }
  .keyboard {
    background: #fff;
    margin-top: 0.1rem;
  }
  .keyboard .remark {
    width: 100%;
    text-align: center;
    height: 0.25rem;
    line-height: 0.25rem;
  }
  .keyboard .remark i{
    color: #ff1716;
  }
  .keyboard ul{
    width: 100%;
  }
  .keyboard .el-col{
    text-align: center;
    height: 0.4rem;
    line-height: 0.4rem;
    border:0.01rem solid #f1f1f1;
  }
  .keyboard .el-col span {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .keyboard .el-col:nth-last-of-type(1),.keyboard .el-col:nth-last-of-type(3){
    background: #f7f7f7;
  }
</style>
