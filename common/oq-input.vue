<template>
  <div class="oqinput">
    <input v-if="isText" v-model="val" @blur="ensureVal" class="loginInput" type="text" :name="namekind" :placeholder="placeholder"/>
    <input v-if="!isText" v-model="val" @blur="ensureVal" class="loginInput" type="password" :name="namekind" :placeholder="placeholder"/>
    <span v-if="isProblem" class="errorshow">
      {{errorVal}}
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      value: '',
      classname: '',
      namekind: {
        type: String,
        default: 'tel'
      },
      firstpsw: '',
      placeholder: ''
    },
    data () {
      return {
        val: '',
        isText: true,
        isProblem: false,
        errorVal: '',
        verify: false
      }
    },
    created () {
      if (this.namekind === 'tel') {
        this.isText = true
      } else {
        this.isText = false
      }
    },
    watch : {
      isProblem (newval, oldval) {
        if (newval) {
          setTimeout(() => {
            this.isProblem = false
          }, 2000)
        }
      }
    },
    methods: {
      ensureVal () {
        this.$emit('input', this.val)
        if (this.namekind === 'tel') {
          if (this.val === '') {
            this.errorVal = '用户名不能为空'
            this.isProblem = true
          } else if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.val))) {
            this.errorVal = '号码格式有误'
            this.isProblem = true
          } else {
            this.verify = true
          }
        } else if (this.namekind === 'pwd') {
          if (this.val === '') {
            this.errorVal = '密码不能为空'
            this.isProblem = true
          } else if (this.val.length < 6 || this.val.length > 13) {
            this.errorVal = '密码为6-13位'
            this.isProblem = true
          } else {
            this.verify = true
          }
        } else if (this.namekind === 'ensurepwd') {
          if (this.val !== this.firstpsw) {
            this.errorVal = '两次密码不一致'
            this.isProblem = true
          } else {
            this.verify = true
          }
        }
      },
      submit () {
        this.ensureVal()
      }
    }
  }
</script>

<style>
.oqinput {
  display: inline-block;
  position: absolute;
  width: 100%;
}
  .loginInput {
    width: 100%;
    position: absolute;
    left: 0.05rem;
    border: none;
    line-height: 0.25rem;
    border-bottom: 0.01rem solid #fff;
    padding-left: 0.1rem;
    box-sizing: border-box;
    background: rgba(0,0,0,0);
    color: #fff;
  }
  .loginInput::-webkit-input-placeholder {
    color: #fff;
  }
  .errorshow {
    padding: 0.1rem 0.15rem;
    border:0.01rem solid #ff0000;
    background: #f5f5f5;
    color: #ff0000;
    position: absolute;
    left: 0;
    top:0.25rem;
    z-index: 2;
  }
.errorshow:after {
  content: '';
  width: 0.12rem;
  height: 0.12rem;
  background: #f5f5f5;
  position: absolute;
  top:-0.069rem;
  border-top: 0.01rem solid #ff0000;
  border-left: 0.01rem solid #ff0000;
  transform: rotate(45deg);
}
</style>
