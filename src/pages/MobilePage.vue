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
      <el-form>
        <span class="line">
          <el-form-item prop="name">
            <el-input
              placeholder="姓名"
              class="input"
              v-model="form.name"
            ></el-input>
          </el-form-item>
        </span>
        <span class="line">
          <el-form-item prop="studentId">
            <el-input
              placeholder="学号"
              class="input"
              v-model="form.stuNum"
            ></el-input>
          </el-form-item>
        </span>
      </el-form>
    </div>
    <div class="page2 page">
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
      <!-- <span class="line">
        <el-input
          placeholder="姓名"
          class="input"
          v-model="form.name"
        ></el-input>
      </span>
      <span class="line">
          <el-input
            placeholder="学号"
            class="input"
            v-model="form.studentId"
          ></el-input>
      </span> -->
    </div>
    <button class="nextPage" @click="turnPage">继续</button>
  </div>
</template>

<script>
export default {
  name: 'MobilePage',
  data () {
    return {
      currentPage: 1,
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
      }
    }
  },
  methods: {
    turnPage () {
      this.currentPage++
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
      width: 100%;
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
      .el-form-item {
        padding: 0px;
        margin: 0px;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .input {
          // 输入框
          width: 85%;
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
      }
    }
  }
  // 下一页按钮
  .nextPage {
    position: fixed;
    width: 80px;
    height: 35px;
    bottom: 40vh;
    background-color: rgba(78, 184, 255, 1);
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    // 居中
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.5s;
    &:active {
      background-color: rgba(78, 184, 255, 0.8);
      // transition: all 0.5s;
    }
  }
}
</style>
