<template>
  <div class="mobile">
    <div class="page1 page">
      <div class="line topLine"></div>
      <span class="line">
        <img src="@/assets/logo.png" alt="LOGO" class="logo" />
      </span>
      <span class="line">
        <div class="title text">欢迎报名</div>
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
              placeholder="姓名"
              class="input"
              v-model="form.name"
            ></el-input>
          </span>
          <span class="line">
            <el-input
              placeholder="学号"
              class="input inline-input"
              v-model="form.stuNum"
            ></el-input>
            <el-input
              placeholder="性别"
              class="input inline-input"
              v-model="form.gender"
            ></el-input>
          </span>
        </el-form>
        <el-form>
          <span class="line">
            <el-input
              placeholder="QQ号"
              class="input"
              v-model="form.qqnumber"
            ></el-input>
          </span>
          <span class="line">
            <el-input
              placeholder="手机号"
              class="input"
              v-model="form.phone"
            ></el-input>
          </span>
          <span class="line auth-line">
            <el-input
              placeholder="验证码"
              class="input auth-code"
              v-model="authCode"
            ></el-input>
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
              placeholder="学院"
              class="input"
              v-model="form.college"
            ></el-input>
          </span>
          <span class="line">
            <el-input
              placeholder="志愿部门"
              class="input"
              v-model="form.department"
            ></el-input>
          </span>
          <span class="line">
            <el-input
              placeholder="邮箱"
              class="input"
              v-model="form.email"
            ></el-input>
          </span>
        </el-form>
        <el-form>
          <span class="line">
            <el-input
              placeholder="自我介绍"
              class="input"
              v-model="form.selfIntroduction"
            ></el-input>
          </span>
          <span class="line">
            <el-input
              placeholder="获奖（荣誉）经历"
              class="input"
              v-model="form.honor"
            ></el-input>
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
      mode: 1,
      currentPage: 1,
      authCodeButtonText: '获取验证码',
      authCodeButton: true,
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
      AuthCode: '-1'
    }
  },
  methods: {
    turnPage () {
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
</style>
