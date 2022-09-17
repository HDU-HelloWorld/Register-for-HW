<template>
  <div class="mobile">
    <div class="page1 page">
      <div class="line topLine"></div>
      <span class="line">
        <img src="@/assets/logo.png" alt="LOGO" class="logo" />
      </span>
      <span class="line">
        <div class="title text">欢迎报名
        </div>
      </span>
      <span class="line">
        <div class="subTitle text">
          欢迎报名加入HelloWorld大家庭，但在此之前我们需要收集一些您的信息
        </div>
      </span>
      <div class="input-box">
        <el-form>
          <span class="line">
            <el-input
              placeholder="name"
              class="input"
              v-model="form.name"
              data-num = 0
              @focus="download($event)"
              @blur="unfocused"
              @clear="empty"
              @input="inputText($event)"
              clearable
            ></el-input>
            <span :class="[{'focusBlur , classTwo':theClass.name == 1 },{'focusBlurTwo , classThree':theClass.name == 2},{'classOne':theClass.name == 0 }]"
                   class="left">姓名</span>
          </span>
          <span class="line">
            <el-input
              placeholder="stuNum"
              data-num = 2
              class="input inline-input"
              v-model="form.stuNum"
              @focus="download($event)"
              @blur="unfocused"
              @clear="empty"
              @input="inputText($event)"
              clearable
            ></el-input>
            <span :class="[{'focusBlur , bottomClassTwo':theClass.stuNum == 1 },{'focusBlurTwo , bottomClassThree':theClass.stuNum == 2},{'classOne':theClass.stuNum == 0 }]"
                   class="left bottom">学号</span>
            <div class="warming">{{this.warning}}</div>
            <!-- <el-input
              placeholder="gender"
              class="input inline-input"
              v-model="form.gender"
            ></el-input> -->
            <el-select
            v-model="form.gender"
            class="input inline-input selectInput"
            placeholder="性别"
            id = "selectInput"
            popper-class="eloption"
            :popper-append-to-body="true">
              <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.label">
              </el-option>
            </el-select>
          </span>
        </el-form>
        <el-form>
          <span class="line">
            <el-input
              placeholder="qqnumber"
              class="input"
              v-model="form.qqnumber"
              @focus="download($event)"
              @blur="unfocused"
              @clear="empty"
              @input="inputText($event)"
              clearable
            ></el-input>
            <span :class="[{'focusBlur , classTwo':theClass.qqnumber == 1 },{'focusBlurTwo , classThree':theClass.qqnumber == 2},{'classOne':theClass.qqnumber == 0 }]"
                   class="left">QQ号</span>
          </span>
          <span class="line">
            <el-input
              placeholder="phone"
              class="input"
              v-model="form.phone"
              @focus="download($event)"
              @blur="unfocused"
              @clear="empty"
              @input="inputText($event)"
              clearable
            ></el-input>
            <span :class="[{'focusBlur , classTwo':theClass.phone == 1 },{'focusBlurTwo , classThree':theClass.phone == 2},{'classOne':theClass.phone == 0 }]"
                   class="left">手机号</span>
          </span>
          <span class="line auth-line">
            <el-input
              placeholder="authCode"
              class="input auth-code"
              v-model="authCode"
              @focus="download($event)"
              @blur="unfocused"
              @clear="empty"
              @input="inputText($event)"
              clearable
            ></el-input>
            <span :class="[{'focusBlur , classTwo':theClass.authCode == 1 },{'focusBlurTwo , classThree':theClass.authCode == 2},{'classOne':theClass.authCode == 0 }]"
                   class="left authCode">验证码</span>
            <button
              class="get-authcode"
              @click.prevent="getAuthCode"
              :disabled="!authCodeButton"
            >
              {{ authCodeButtonText }}
            </button>
          </span>
        </el-form>
        <el-form>
          <span class="line">
            <el-input
              placeholder="college"
              class="input"
              v-model="form.college"
              @focus="download($event)"
              @blur="unfocused"
              @clear="empty"
              @input="inputText($event)"
              clearable
            ></el-input>
            <span :class="[{'focusBlur , classTwo':theClass.college == 1 },{'focusBlurTwo , classThree':theClass.college == 2},{'classOne':theClass.college == 0 }]"
                   class="left">学院</span>
          </span>
          <span class="line">
            <el-select
            v-model="form.department"
            class="input selectInput"
            id="selectInput"
            placeholder="志愿部门"
            popper-class="eloption"
            :popper-append-to-body="true"
            >
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            >
            </el-option>
            </el-select>
          </span>
          <span class="line">
            <el-input
              placeholder="email"
              class="input"
              v-model="form.email"
              @focus="download($event)"
              @blur="unfocused"
              @clear="empty"
              @input="inputText($event)"
              clearable
            ></el-input>
            <span :class="[{'focusBlur , classTwo':theClass.email == 1 },{'focusBlurTwo , classThree':theClass.email == 2},{'classOne':theClass.email == 0 }]"
                   class="left">邮箱</span>
          </span>
        </el-form>
        <el-form>
          <span class="line">
            <el-input
              placeholder="selfIntroduction"
              type="textarea"
              autosize
              class="input"
              v-model="form.selfIntroduction"
              @focus="download($event)"
              @blur="unfocused"
              @clear="empty"
              @input="inputText($event)"
              clearable
            ></el-input>
            <span :class="[{'focusBlur , classTwo':theClass.selfIntroduction == 1 },{'focusBlurTwo , classThree':theClass.selfIntroduction == 2},{'classOne':theClass.selfIntroduction == 0 }]"
                   class="left">自我介绍</span>
          </span>
          <span class="line">
            <el-input
              placeholder="honor"
              type="textarea"
              autosize
              class="input"
              v-model="form.honor"
              @focus="download($event)"
              @blur="unfocused"
              @clear="empty"
              @input="inputText($event)"
              clearable
            ></el-input>
            <span :class="[{'focusBlur , classTwo':theClass.honor == 1 },{'focusBlurTwo , classThree':theClass.honor == 2},{'classOne':theClass.honor == 0 }]"
                   class="left">获奖（荣誉）经历</span>
          </span>
        </el-form>
      </div>
    </div>
    <button class="lastPage btn" @click="turnBack">上一步</button>
    <button class="nextPage btn" @click="turnPage">继续</button>
  </div>
</template>

<script>
export default {
  name: 'MobilePage',
  data () {
    return {
      placeHolder: '',
      input: '',
      theClass: {
        name: 0,
        stuNum: 0,
        phone: 0,
        qqnumber: 0,
        college: 0,
        email: 0,
        selfIntroduction: 0,
        honor: 0,
        authCode: 0
      },
      mode: 1,
      currentPage: 1,
      authCodeButtonText: '获取验证码',
      authCodeButton: true,
      turnPageStatu: '',
      form: {
        name: '',
        gender: '',
        stuNum: '',
        phone: '',
        qqnumber: '',
        college: '',
        department: '',
        email: '',
        selfIntroduction: '',
        honor: ''
      },
      authCode: '',
      AuthCode: '-1',
      warning: '',
      options1: [{
        value: 'man',
        label: '男'
      }, {
        value: 'woman',
        label: '女'
      }],
      options2: [{
        value: '选项1',
        label: '人工智能部门'
      }, {
        value: '选项2',
        label: '行政部门'
      }, {
        value: '选项3',
        label: '前端部门'
      }, {
        value: '选项4',
        label: '后端部门'
      }]
    }
  },
  methods: {
    turnPage () {
      if (this.currentPage === 1) {
        if (this.turnPageStatu === 0) {
          this.warning = '请输入正确的学号后在点击！！'
          return
        }
      }
      if (this.currentPage === 2) {
        // 验证手机验证码
        if (String(this.authCode) === String(this.AuthCode)) {
          this.$message({
            message: '验证成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: '验证码错误',
            type: 'error'
          })
          return
        }
      }
      if (this.currentPage >= 4) {
        // 提交表单
        this.submitForm()
        return
      }
      this.currentPage++
    },
    turnBack () {
      if (this.currentPage === 1) return
      this.currentPage--
    },
    getAuthCode () {
      // 验证码获取方式替换为向服务器发送请求获取验证码
      // 首先校验手机号是否正确
      let message = this.$message
      if (this.form.phone === '') {
        message({
          message: '请输入手机号',
          type: 'error'
        })
        return
      }
      if (!this.form.phone.match(/^1[3-9][0-9]\d{8}$/)) {
        message({
          message: '请输入正确的手机号',
          type: 'error'
        })
        return
      }
      // 生成四位数字验证码并存放在this.authCode中
      if (this.AuthCode === '-1') {
        this.AuthCode = String(Math.floor(Math.random() * 9000 + 1000))
      }
      let data = {
        phone: this.form.phone,
        timestamp: new Date().getTime(),
        code: this.AuthCode
      }
      // 像/api/getAuthCode接口发送请求获取验证码，字段为mobile
      let that = this
      // 这里http://localhost:3000/api/getAuthCode 居然是发送到本地的3000端口，而不是发送到服务器的3000端口
      // 发送到服务器的3000端口
      // 判断开发模式还是生产模式
      let url = 'http://localhost:3000/api/getAuthCode'
      if (this.mode === 1) {
        url = 'http://helloworld-hdu.com:3000/api/getAuthCode'
      }
      this.$axios.post(url, data).then(function (response, code) {
        // console.log(response)
        if (response.status === 200) {
          // console.log('验证码发送成功')
          that.AuthCode = response.data
          // 禁用按钮60秒
          let time = 60
          let timer = setInterval(() => {
            time--
            if (time === 0) {
              clearInterval(timer)
              that.authCodeButton = true
              that.authCodeButtonText = '获取验证码'
            } else {
              that.authCodeButton = false
              that.authCodeButtonText = time + 's'
            }
          }, 1000)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // 表单提交
    submitForm () {
      let that = this
      let message = this.$message
      // 将表单提交到3000端口的/api/register接口
      // http://localhost:3000/api/register 居然直接提交到了本地，而不是服务器的3000端口
      // 判断开发模式还是生产模式
      let url = 'http://localhost:3000/api/register'
      if (this.mode === 1) {
        url = 'http://helloworld-hdu.com:3000/api/register'
      }
      this.$axios.post(url, this.form).then(function (response, code) {
        if (response.status === 200) {
          message({
            message: '提交成功',
            type: 'success'
          })
          that.$router.push('/success')
        }
      }).catch((err) => {
        // console.log(err)
        // console.log(err.response)
        let data = err.response.data
        if (data.name === 'SequelizeUniqueConstraintError') {
          if (data.msg.indexOf('stuNum') !== -1) {
            message({
              message: '学号已被注册',
              type: 'error'
            })
          } else {
            message({
              message: '您已经提交过表单啦，请勿重复提交',
              type: 'error'
            })
          }
        } else {
          message({
            message: '提交失败',
            type: 'error'
          })
        }
      })
    },
    inputFn (event) {
      const MyReg = new RegExp('^[0-9]{8}$')
      if (this.form.stuNum === '') {
        this.warning = '请输入学号！！'
        this.turnPageStatu = 0
      } else if (MyReg.test(this.form.stuNum) === false) {
        this.warning = '输入学号的格式不正确！！'
        this.turnPageStatu = 0
      } else {
        this.warning = ''
        this.turnPageStatu = 1
      }
    },
    // 获得焦点事件
    download (e) {
      this.placeHoder = e.target.placeholder
      this.num = e.target.dataset.num
      this.theClass[this.placeHoder] = 1 // 获取焦点等于1，展示第二套样式，文字提示平移到input框上面
      this.input = e.target.value
    },
    inputText (e) {
      this.input = e // 当input值改变时，展示第二套样式，文字提示平移到input框上面
    },
    // 清空事件
    empty () {
      this.theClass[this.placeHoder] = 0 // 失焦等于 0,展示默认样式
    },
    // 失去焦点事件
    unfocused () {
      if (this.input !== '') {
        this.theClass[this.placeHoder] = 2 // 如果框中有值,展示第三套样式
      } else if (this.input === '') {
        this.theClass[this.placeHoder] = 0 // 失焦等于 0,展示默认样式
      }
    }
  },

  watch: {
    currentPage: (val) => {
      let inputBox = document.querySelector('.input-box')
      inputBox.style.left = `${250 - val * 100}vw`
    }
  }
}
</script>

<style lang="less" scoped>
.mobile {
  width: 100vw;
  height: 100vh;
  .page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    .topLine {
      height: 5vh;
    }
    .line {
      position: relative;
      width: 100vw;
      display: flex;
      justify-content: center;
      .logo {
        // 保持图片比例不变
        width: 15vw;
        object-fit: contain;
        margin: 2vh 0;
      }
      .title {
        font-size: 6vw;
        font-weight: 400;
      }
      .text {
        margin: 1vh 0;
      }
      .subTitle {
        width: 60%;
        // 文字居中
        text-align: center;
      }
      .input {
        // 输入框
        width: 80%;
        margin: 1vh 0;
        /deep/ .el-input__inner{
          &::placeholder {
            color: white;
          }
        }
        // border-color: #000;
        // 已弃用的placeholder动画效果方案
        // & /deep/ .el-input__inner {
        //   // 修改el-input的样式
        //   &:focus {
        //     border-color: #000;
        //     transition: all 0.2s;
        //     &::placeholder {
        //       z-index: 999;
        //       font-size: 5px;
        //       transition: all 0.2s ease-in-out;
        //       // 向上移动
        //       transform: translateY(-130%);
        //       background-color: #fff;
        //     }
        //   }
        // }
      }
      span {
        /* 默认情况下的样式 */
        position: absolute;
        background: #fff;
        left: 2.8%;
        padding: 0px 7px;
        display: inline-block;
        color: #9e9e9e;
        font-size: 14px;
        pointer-events: none;
        height: 20px;
        display: flex;
        align-items: center;
        transition: all 0.3s;
      }
      /* 获取焦点后的第一种样式 */
      .focusBlur {
        position: absolute;
        font-size: 12px;
        height: 16px;
        background-color: white;
      }
      /* 如果框中有值顶部文字颜色展示为黑色，第二种样式 */
      .focusBlurTwo {
        position: absolute;
        font-size: 12px;
        height: 16px;
        background-color: white;
      }
      .classOne{
        transform: translateY(90%);
      }
      .classTwo{
        transform: translateY(20%);
        transform: translateX(10%);
        color: rgb(49, 148, 247);
      }
      .classThree{
        transform: translateY(20%);
        transform: translateX(10%);
      }
      .left{
        left: 11%;
      }
      .right{
        left: 55.5%;
      }
      .bottom{
        bottom: 66%;
      }
      .bottomClassTwo{
        bottom: 73%;
        transform: translateX(10%);
        color: rgb(49, 148, 247);
      }
      .bottomClassThree{
        bottom: 73%;
        transform: translateX(10%);
      }
      .authCode{
        bottom: 65%;
      }
      .get-authcode {
        width: 30%;
        height: 5vh;
        background-color: rgba(78, 184, 255, 1);
        border: 1px solid #fff;
        border-radius: 5px;
        color: #fff;
        transition: all 0.5s;
        &:active {
          background-color: rgba(78, 184, 255, 0.8);
        }
      }
      .auth-code {
        width: 45%;
        margin-right: 5%;
      }

      .inline-input {
        width: 36%;
        margin: 1vw 4%;
      }
    }

    // 验证码行
    .auth-line {
      display: flex;
      align-items: center;
    }

    // 放置所有input的盒子
    .input-box {
      position: relative;
      left: 150vw;
      width: 400vw;
      display: flex;
      transition: all 1s;
    }
  }
  // 下一页按钮
  .btn {
    position: fixed;
    width: 80px;
    height: 35px;
    bottom: 20vh;
    background-color: rgba(78, 184, 255, 1);
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    transition: all 0.5s;
    &:active {
      background-color: rgba(78, 184, 255, 0.8);
      // transition: all 0.5s;
    }
  }
  .lastPage {
    right: 55%;
  }
  .nextPage {
    left: 55%;
  }
}
.warming{
  width: 100vw;
  height: 10vh;
  position: absolute;
  top: 15vh;
  left:10vw;
  font-size: 1vw;
  color: #DB5A6C;
}
.eloption .el-select-dropdown__wrap {
  background-color: bisque !important;
  max-height: 350px !important;
}
/deep/ textarea::-webkit-input-placeholder {
  -webkit-text-fill-color: white;
}
/deep/ textarea::-moz-input-placeholder {
  -webkit-text-fill-color: white;
}
/deep/ textarea::-ms-input-placeholder {
  -webkit-text-fill-color: white;
}
.selectInput{
  /deep/ .el-input__inner{
    &::placeholder {
      color: #9e9e9e !important;
      font-size: 14px !important;
    }
  }
}

</style>
