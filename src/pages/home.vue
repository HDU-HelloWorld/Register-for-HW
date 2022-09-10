<!-- eslint-disable vue/valid-v-model -->
<template>
  <div class="showhome">
    <!-- 顶部导航条 -->
    <div class="home">
      <div class="top-barrer">
        <div class="icon-hw">
          <img src="@/assets/logo.png" />
          <img src="@/assets/X.png" class="ccfLogo" />
          <img src="@/assets/CCFlogo.png" />
        </div>
        <div class="right-info">
          <li @click="test" class="navshow"><a>CCF × HW</a></li>
          <li @click="test" class="navshow"><a>Welcome</a></li>
          <li @click="test" class="navshow"><a>部门介绍</a></li>
          <li @click="test" class="navshow"><a>CCF介绍</a></li>
          <li @click="test" class="navshow"><a>加入我们</a></li>
        </div>
      </div>
    </div>
    <LittleObjects @goRegister="goRegister" :page="currentPage"></LittleObjects>
    <!-- 使用fullpage制作 -->
    <mv-full-page
      :isPointer="showPointer"
      pointerPos="right"
      :isV="isV"
      :pages="5"
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
          <StartPage></StartPage>
        </div>
      </template>
      <template #page2>
        <div class="page page2">
          <LearnWhat></LearnWhat>
        </div>
      </template>
      <template #page3>
        <!-- 部门介绍展示 -->
        <div class="page">
          <dep-intro style="width: 80%"></dep-intro>
        </div>
      </template>
      <template #page4>
        <div class="page">
          <!-- CCF介绍展示 -->
          <ccfintro></ccfintro>
        </div>
      </template>
      <template #page5>
        <div class="page">
          <!-- 报名页面展示 -->
          <new-login></new-login>
        </div>
      </template>
    </mv-full-page>
  </div>
</template>

<script>
import StartPage from '@/components/StartPage.vue'
import Ccfintro from '@/components/Ccfintro.vue'
import DepIntro from '@/components/DepIntro.vue'
import NewLogin from '@/components/NewLogin.vue'
import WelcomePage from '@/components/WelcomePage.vue'
import LearnWhat from '@/components/LearnWhat.vue'
import LittleObjects from '@/components/LittleObjects'
export default {
  components: { DepIntro, Ccfintro, NewLogin, WelcomePage, StartPage, LearnWhat, LittleObjects },
  name: 'Home',
  data () {
    return {
      isV: true,
      showPointer: false,
      currentPage: 1,
      page: 0,
      config: {
        height: '100%',
        width: '100%'
      },
      bgArr: ['#fff',
        {
          isBg: true,
          src: require('@/assets/bgcimg/1.jpg')
        },
        {
          isBg: true,
          src: require('@/assets/bgcimg/3.jpg')
        },
        {
          isBg: true,
          src: require('@/assets/bgcimg/4.jpg')
        },
        {
          isBg: true,
          src: require('@/assets/bgcimg/5.png')
        }]
    }
  },
  methods: {
    test (event) {
      //  点击时颜色发生变化
      let navshows = document.querySelectorAll('.navshow')
      for (let i = 0; i < 5; i++) {
        navshows[i].firstElementChild.style.color = 'rgb(103, 107, 115)'
      }
      event.target.style.color = 'rgb(55, 120, 229)'
      //  点击对应导航时发生页面跳转
      let info = event.target.innerText
      if (info === 'CCF × HW') {
        this.currentPage = 1
      }
      if (info === 'Welcome') {
        this.currentPage = 2
      }
      if (info === '部门介绍') {
        this.currentPage = 3
      }
      if (info === 'CCF介绍') {
        this.currentPage = 4
      }
      if (info === '加入我们') {
        this.currentPage = 5
      }
    },
    goRegister () {
      this.currentPage = 5
    }
  },
  mounted () {
    console.log('mounted')
    let navshows = document.querySelectorAll('.navshow')
    let index = this.currentPage - 1
    for (let i = 0; i < 5; i++) {
      navshows[i].firstElementChild.style.color = 'rgb(103, 107, 115)'
    }
    navshows[index].firstElementChild.style.color = 'rgb(55, 120, 229)'
  },
  watch: {
    currentPage: {
      handler (newValue, oldValue) {
        let rightBar = document.querySelector('.right-info')
        let logo = document.querySelector('.icon-hw')
        if (newValue > oldValue) {
          rightBar.style.width = '30%'
          logo.style.width = '10%'
        } else {
          rightBar.style.width = '50%'
          logo.style.width = '20%'
        }
        let navshows = document.querySelectorAll('.navshow')
        let index = newValue - 1
        for (let i = 0; i < 5; i++) {
          navshows[i].firstElementChild.style.color = 'rgb(103, 107, 115)'
        }
        navshows[index].firstElementChild.style.color = 'rgb(55, 120, 229)'
        if (newValue === 1) {
          this.showPointer = false
        } else {
          this.showPointer = true
          this.$nextTick(() => {
            let pointer = document.querySelector('.pointer-wrapper')
            pointer.classList.add('animate__animated', 'animate__fadeInRight')
          })
        }
      }
    }
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
  background: rgba(255, 255, 255, 0);
  // box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  .top-barrer {
    width: 90%;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-content: center;
    .icon-hw {
      width: 20%;
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.5s ease-in-out;
      img {
        margin-top: 5px;
        height: 100%;
      }
      .ccfLogo {
        height: 50%;
      }
    }
    .right-info {
      height: 100%;
      align-items: center;
      display: flex;
      width: 50%;
      justify-content: space-between;
      transition: all 0.5s ease-in-out;
      li {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      a {
        width: 100%;
        color: rgb(103, 107, 115);
        transition: all 0.4s;
        font-size: 0.8rem;
        display: flex;
        justify-content: center;
        cursor: pointer;
        &:hover {
          color: rgb(55, 120, 229) !important;
        }
      }
    }
  }
}
.page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .test {
    width: 100%;
  }
}
.page2 {
  .componentBox {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .card {
      width: 4vw;
      height: 45vh;
      margin: 0.5vw;
      border-radius: 3vw;
      background-color: rgb(168, 168, 168);
    }
    .active {
      width: 30vw;
    }
  }
}
</style>
