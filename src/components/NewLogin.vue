<template>
  <div class="login">
    <div class="wrapper">
      <div class="outcard">
        <div class="incard">
          <div class="row" :style="class2">
            <div class="punc">『</div>
            <div class="text1">Welcome to</div>
          </div>
          <div class="row" :style="class3">
            <div class="text2">HelloWorld</div>
            <div class="punc">』</div>
          </div>
        </div>
      </div>
      <div class="form-wrapper" :style="class1">
        <div class="form-left">
          <div class="imgs">
            <img src="@/assets/img/login/avter.jpg" alt="可爱捏" />
          </div>
          <p class="shuoming">let's join us</p>
          <p class="derect">
            Quickly fill out the form to join us, welcome mengxin, welcome to
            the dalao！！！
          </p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div class="form">
          <h1 align="center" class="title">Hello World 22级招新表</h1>
          <el-form :model="form" :rules="rules" ref="form" label-width="90px">
            <!-- 姓名 -->
            <el-row class="first">
              <el-col :span="8">
                <el-form-item label="姓名" prop="name" id="m">
                  <el-input
                    v-model="form.name"
                    class="input"
                    required=""
                  ></el-input>
                  <div class="underline"></div>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="性别" class="input">
                  <el-select v-model="form.gender">
                    <el-option
                      v-for="item in options1"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="学号" prop="stuNum">
                  <el-input v-model="form.stuNum" class="input"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <!-- 学院 -->
            <el-row>
              <el-col :span="10">
                <el-form-item label="所在学院" prop="college">
                  <el-input v-model="form.college" class="input"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="志愿部门">
                  <el-select v-model="form.department" class="input">
                    <el-option
                      v-for="item in options2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.label"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <!-- 电话 -->
            <el-row>
              <el-col :span="9">
                <el-form-item label="电话" prop="phone">
                  <el-input v-model="form.phone" class="input"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="验证码">
                  <el-input
                    v-model="userAuthCode"
                    class="input"
                    placeholder="验证码"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="2" :offset="1">
                <el-button
                  class="requma"
                  @click="getAuthCode"
                  :disabled="!authCodeButton"
                  >{{ authCodeButtonText }}</el-button
                >
              </el-col>
            </el-row>
            <!-- QQ号 -->
            <el-row>
              <el-col :span="10">
                <el-form-item label="QQ号" prop="qqnumber">
                  <el-input v-model="form.qqnumber" class="input"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="邮箱" prop="email">
                  <el-input v-model="form.email" class="input"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <!-- 自我介绍 -->
            <el-row>
              <el-col :span="21">
                <el-form-item label="自我介绍" prop="selfIntroduction">
                  <el-input
                    type="textarea"
                    v-model="form.selfIntroduction"
                    class="input"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <!-- 获奖经历 -->
            <el-row>
              <el-col :span="21">
                <el-form-item label="获奖经历" prop="honor">
                  <el-input
                    type="textarea"
                    v-model="form.honor"
                    class="input"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row id="check">
              <el-col :span="4" :offset="3">
                <el-button
                  type="secondary"
                  @click="submitForm('form')"
                  class="button1"
                  >提交</el-button
                >
              </el-col>
              <el-col :span="4" :offset="3">
                <el-button
                  type="secondary"
                  @click="resetForm('form')"
                  class="button2"
                  >清空</el-button
                >
              </el-col>
              <el-col :span="4" :offset="3">
                <el-button type="secondary" @click="missForm()" class="button2"
                  >返回</el-button
                >
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
      <div class="button" @click="showForm" v-show="showButton">
        <a href="/#/home" class="shuai"
          ><span></span>
          <span></span>
          <span></span>
          <span></span>
          JION US
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import server from '@/assets/data/server.json'
export default {
  name: 'NewLogin',
  data () {
    return {
      mode: 1, // 模式，0代表开发模式，1代表生产模式
      showButton: true,
      AuthCode: '-1',
      userAuthCode: '',
      authCodeButtonText: '获取验证码',
      authCodeButton: true,
      class1: {
        marginTop: '100%'
      },
      class2: {
        marginRight: '0%'
      },
      class3: {
        marginLeft: '0%'
      },
      authCode: '',
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
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 0, max: 15, message: '长度在 0 到 15 个字符', trigger: 'blur' }
        ],
        stuNum: [
          { required: true, message: '请输入学号', trigger: 'blur' },
          { pattern: /^[0-9]*$/, message: '学号应为数字', trigger: 'blur' },
          { min: 8, max: 8, message: '学号格式不正确', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入电话', trigger: 'blur' },
          { pattern: /^1[3-9][0-9]\d{8}$/, message: '请输入正确的电话号码', trigger: 'blur' },
          { min: 0, max: 15, message: '长度在 0 到 15 个字符', trigger: 'blur' }
        ],
        qqnumber: [
          { required: true, message: '请输入qq号', trigger: 'blur' },
          { pattern: /^[0-9]*$/, message: 'qq号应为数字', trigger: 'blur' },
          { min: 5, max: 10, message: 'qq号格式不正确', trigger: 'blur' }
        ],
        college: [
          { required: true, message: '请输入学院', trigger: 'blur' },
          { pattern: /^[\u0391-\uFFE5A-Za-z]+$/, message: '请输入学院', trigger: 'blur' },
          { min: 0, max: 15, message: '长度在 0 到 15 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        selfIntroduction: [
          { required: true, message: '请输入自我介绍', trigger: 'blur' },
          { min: 0, max: 120, message: '长度在 0 到 120 个字符', trigger: 'blur' }
          // 看见这行可以删掉
        ]
      },
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
  change () {
    // this.$forceUpdate()
  },
  methods: {
    submitForm (formName) {
      let message = this.$message
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.form)
          // 判断验证码是否正确
          if (this.AuthCode !== this.userAuthCode) {
            message.error('验证码错误')
            console.log(this.AuthCode, this.userAuthCode)
            return
          }
          // 将表单提交到3000端口的/api/register接口
          // http://localhost:3000/api/register 居然直接提交到了本地，而不是服务器的3000端口
          // 判断开发模式还是生产模式
          let url = 'http://localhost:3000/api/register'
          if (this.mode === 1) {
            url = server.baseUrl + '/api/register'
          }
          this.$axios.post(url, this.form).then(function (response, code) {
            if (response.status === 200) {
              message({
                message: '提交成功',
                type: 'success'
              })
              this.$router.push('/success')
            }
          }).catch((err) => {
            console.log(err.response)
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
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    showForm () {
      this.class1.marginTop = '3%'
      this.class2.marginRight = '200%'
      this.class3.marginLeft = '200%'
      this.showButton = false
    },
    missForm () {
      this.class1.marginTop = '100%'
      this.class2.marginRight = '0%'
      this.class3.marginLeft = '0%'
      this.showButton = true
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
        url = server.baseUrl + '/api/getAuthCode'
      }
      this.$axios.post(url, data).then(function (response, code) {
        if (response.status === 200) {
          console.log(response.data)
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
        console.log(err.response)
      })
    }
  }
}
</script>
<style scoped lang="less">
html {
  box-sizing: border-box;
  font-size: 62.5%; // 1rem = 10px    100% = 16px
  overflow-y: scroll;
  background: #e4ebf5;
}
@keyframes mymove {
  from {
    background-position: 120% 120%;
  }
  to {
    background-position: 0% 0%;
  }
}
@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}
@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}
@keyframes animate3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}
@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
#check {
  margin-top: 20px;
}
//此处设置input框内部样式
/deep/.el-input__inner {
  // width: 204px;
  margin-left: 10px;
  height: 35px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  box-shadow: inset -2px -2px 5px #fff, 2px 2px 5px #c8d0e7;
  background: none;
  font-family: inherit;
  color: #9baacf;
  &::placeholder {
    color: #bec8e4;
  }
  &:focus {
    outline: none;
    box-shadow: 3px 3px 6px #c8d0e7, -2px -2px 5px #fff;
  }
}
//设置label标签
/deep/ .el-form-item__label {
  color: #1a507e;
  user-select: none;
}
/deep/ .el-form-item.is-error {
  .el-input__inner {
    user-select: none;
    border-color: rgba(255, 255, 255);
  }
  .el-form-item__error {
    margin-left: 15px;
    user-select: none;
    color: #db5a6c;
  }
  .el-form-button__error {
    user-select: none;
    border-color: rgba(255, 255, 255);
  }
  // .el-form-select__error {
  //   border-color: rgba(255, 255, 255);
  // }
}
/deep/.el-textarea__inner {
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: inset -2px -2px 5px #fff, 2px 2px 5px #c8d0e7;
  background: none;
  font-family: inherit;
  color: #9baacf;
  &::placeholder {
    color: #bec8e4;
  }
  &:focus {
    border: none;
    outline: none;
    box-shadow: 3px 3px 6px #c8d0e7, -2px -2px 5px #fff;
  }
  &:hover {
    outline: none;
    border: none;
  }
  /* 这个是去掉自我介绍和获奖经历下面拉伸的那个标志 */
  resize: none;
  user-select: none;
}
//修改按钮的样式
/deep/ .el-button {
  margin-top: -20%;
  height: 45px;
  width: 150px;
  margin-bottom: 20px;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 10px;
  background: #e9e9e9;
  box-shadow: 6px 6px 12px #c6c6c6, -6px -6px 12px #ffffff;
  font-size: 20px;
  &:hover {
    background: #e9e9e9;
    box-shadow: inset 5px 5px 10px #c6c6c6, inset -5px -5px 10px #ffffff;
    color: #fea8a9;
    transition: 0.2s;
  }
  &:focus {
    outline: 0;
    border: 0;
  }
}
.form-wrapper {
  top: 13vh;
  position: absolute;
  height: 68vh;
  width: 66%;
  left: 17%;
  border-radius: 15px;
  transition: all 1s;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  .form-left {
    width: 39%;
    height: 100%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background-color: #fea8a9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .imgs {
      margin-top: 5%;
      width: 45%;
      border-radius: 50%;
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    .shuoming {
      font-size: 40px;
      font-family: 'descrip';
      font-weight: 600;
    }
    .derect {
      margin-top: -5%;
      width: 75%;
      font-size: 24px;
      font-family: 'descrip';
      font-weight: 100;
      height: 10%;
    }
  }
  .form {
    background-color: #e4ebf5;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    width: 61%;
    height: 100%;
    .title {
      color: #1a507e;
      font: 500 15px;
      font-family: 'bigtitle';
    }
  }
}
.login {
  height: 100vh;
}
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.incard {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  top: 20vh;
  width: 100%;
  height: 60vh;
  // background-color: aliceblue;
  text-align: center;
  font-size: 8rem;
  letter-spacing: 0.1em;
  font-weight: lighter;
  color: #4ea1d9;
  background-image: linear-gradient(
    -135deg,
    #418ae0,
    #56a0d8,
    #dc8bc3,
    #56a0d8,
    #418ae0,
    #56a0d8,
    #dc8bc3,
    #56a0d8,
    #418ae0
  );
  -webkit-text-fill-color: rgba(0, 0, 0, 0);
  background-clip: border-box;
  -webkit-background-clip: text;
  user-select: none;
  animation: mymove 3s infinite linear;
  background-size: 200% 100%;
}
.punc {
  font-size: 5rem;
  justify-content: start;
  align-self: flex-start;
  margin: 0 30px;
  &:nth-child(2) {
    align-self: flex-end;
  }
}
.row {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 80%;
  transition: all 1s;
}
.row:nth-child(2) {
  margin-top: 20px;
  justify-content: end;
}
.text1 {
  width: 100vh;
  text-align: left;
}
.text2 {
  width: 100vh;
  text-align: right;
}
.button {
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 300px;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  .shuai {
    border-radius: 10px;
    background: #edeaea;
    box-shadow: 6px 6px 12px #c6c6c6, -6px -6px 12px #fff;
    text-align: center;
    font-size: 24px;
    width: 100%;
    height: 100%;
    z-index: 99999;
    display: inline-block;
    padding: 25px 30px;
    margin: 40px 0;
    color: #ab5555;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    margin-right: 50px;
    &:hover {
      background: #c968ed;
      color: #050801;
      box-shadow: 0 0 5px #c968ed, 0 0 25px #c968ed, 0 0 50px #c968ed,
        0 0 200px #c968ed;
      -webkit-box-reflect: below 1px linear-gradient(transparent) #0005;
    }
    &:nth-child(1) {
      filter: hue-rotate(270deg);
    }
    span {
      position: absolute;
      display: block;
      &:nth-child(1) {
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #c968ed);
        animation: animate1 1s linear infinite;
      }
      &:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #c968ed);
        animation: animate2 1s linear infinite;
        animation-delay: 0.25s;
      }
      &:nth-child(3) {
        bottom: 0;
        right: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #c968ed);
        animation: animate3 1s linear infinite;
        animation-delay: 0.5s;
      }
      &:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #c968ed);
        animation: animate4 1s linear infinite;
        animation-delay: 0.75s;
      }
    }
  }
}
.button1 {
  color: #1a507e;
}
.button2 {
  color: #1a507e;
  text-align: center;
  user-select: none;
  letter-spacing: 0.1em;
  border-color: rgba(255, 255, 255, 0.6);
}
/deep/ .el-button.requma {
  font-size: 16px;
  color: #1a507e;
  text-align: center;
  user-select: none;
  letter-spacing: 0.1em;
  height: 35px;
  width: 110px;
  border-radius: 16px;
  box-sizing: border-box;
  background: #e9e9e9;
  margin-top: 2px;
  box-shadow: 6px 6px 12px #c6c6c6, -6px -6px 12px #ffffff;
  &:hover {
    background: #e9e9e9;
    box-shadow: inset 5px 5px 10px #c6c6c6, inset -5px -5px 10px #ffffff;
    color: #fea8a9;
    transition: 0.2s;
  }
  &:focus {
    outline: 0;
    border: 0;
  }
}
</style>
