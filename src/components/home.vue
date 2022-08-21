<!-- eslint-disable vue/valid-v-model -->
<template>
  <div class="showhome">
    <!-- 顶部导航条 -->
    <div class="home">
      <div class="top-barrer">
        <div class="icon-hw">
          <img src="@/assets/logo.jpg" />
        </div>
        <div class="right-info">
          <li @click="test" class="navshow"><a>部门介绍</a></li>
          <li @click="test" class="navshow"><a>CCF介绍</a></li>
          <li @click="test" class="navshow"><a>加入我们</a></li>
        </div>
      </div>
    </div>
    <!-- 使用fullpage制作 -->
    <mv-full-page
      :isPointer="true"
      pointerPos="right"
      :isV="isV"
      :pages="4"
      :page.sync="currentPage"
      :isCache="true"
      :bgArr="bgArr"
      :transition="{
        duration: '500ms', // 动画时长
        timingFun: 'ease-in-out', // 动画速度曲线
        delay: '0s' // 动画延迟
      }"
      :config="config"
    >
      <template #page1>
        <!-- 部门介绍展示 -->
        <div class="page">
          <WelcomePage v-if="isLoad"></WelcomePage>
        </div>
      </template>
      <template #page2>
        <!-- 部门介绍展示 -->
        <div class="page">
          <dep-intro></dep-intro>
        </div>
      </template>
      <template #page3>
        <div class="page">
          <!-- CCF介绍展示 -->
          <ccfintro></ccfintro>
        </div>
      </template>
      <template #page4>
        <div class="page">
          <!-- 报名页面展示 -->
          <!-- <new-login></new-login> -->
        </div>
      </template>
    </mv-full-page>
  </div>
</template>

<script>
import Ccfintro from './Ccfintro.vue'
import DepIntro from './DepIntro.vue'
import NewLogin from './NewLogin.vue'
import WelcomePage from './WelcomePage.vue'
export default {
  components: { DepIntro, Ccfintro, NewLogin, WelcomePage },
  name: 'Home',
  data () {
    return {
      isLoad: false,
      isV: true,
      currentPage: 1,
      page: 0,
      config: {
        height: '100%',
        width: '100%'
      },
      bgArr: ['rgba(0, 0, 0, 0)', '#FAFAFA', '#CAD8D8', {
        isBg: true,
        src: require('@/assets/bgcimg/3.png')
      }]
    }
  },
  methods: {
    test (event) {
      //  点击时颜色发生变化
      let navshows = document.querySelectorAll('.navshow')
      for (let i = 0; i < 3; i++) {
        navshows[i].firstElementChild.style.color = 'rgb(103, 107, 115)'
      }
      event.target.style.color = 'rgb(55, 120, 229)'
      //  点击对应导航时发生页面跳转
      let info = event.target.innerText
      if (info === '部门介绍') {
        this.currentPage = 1
      }
      if (info === 'CCF介绍') {
        this.currentPage = 2
      }
      if (info === '加入我们') {
        this.currentPage = 3
      }
    }
  },
  mounted () {
    this.isLoad = true
    let navshows = document.querySelectorAll('.navshow')
    let index = this.currentPage - 1
    for (let i = 0; i < 3; i++) {
      navshows[i].firstElementChild.style.color = 'rgb(103, 107, 115)'
    }
    navshows[index].firstElementChild.style.color = 'rgb(55, 120, 229)'
  },
  watch: {
    currentPage: {
      handler (newValue) {
        let navshows = document.querySelectorAll('.navshow')
        let index = newValue - 1
        for (let i = 0; i < 3; i++) {
          navshows[i].firstElementChild.style.color = 'rgb(103, 107, 115)'
        }
        navshows[index].firstElementChild.style.color = 'rgb(55, 120, 229)'
      }
    }
  },
  beforeCreate () {
    this.isLoad = false
  }
}
</script>
<style scoped lang="less">
.home {
  width: 100%;
  position: absolute;
  z-index: 999;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  background: rgba(255, 255, 255);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  min-width: 80%;
  .top-barrer {
    z-index: 99;
    min-width: 50%;
    width: 90%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    .icon-hw {
      width: 20%;
      height: 80%;
      img {
        margin-top: 5px;
        height: 100%;
      }
    }
    .right-info {
      height: 100%;
      align-items: center;
      display: flex;
      width: 40%;
      justify-content: space-between;
      li {
        min-width: 150px;
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          width: 100%;
          min-width: 40%;
          color: rgb(103, 107, 115);
          transition: 0.2s;
          font-size: 20px;
          cursor: pointer;
          &:hover {
            color: rgb(55, 120, 229);
          }
        }
      }
    }
  }
}
.page {
  position: absolute;
  width: 100%;
  height: 100%;
  .test {
    width: 100%;
  }
}
canvas {
  /* display: block; */
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
}
</style>
