<template>
  <div class="showhome">
    <!-- 顶部导航条 -->
    <div class="home">
      <div class="top-barrer">
        <div class="icon-hw">
          <img src="@/assets/logo.jpg">
        </div>
        <div class="right-info">
          <li><a href="">部门介绍</a></li>
          <li><a href="">CCF介绍</a></li>
          <li><a href="">加入我们</a></li>
        </div>
      </div>
    </div>
    <!-- 使用fullpage制作 -->
    <mv-full-page
    :isPointer='true'
    pointerPos='right'
    :isV='isV'
    :pages='3'
    :page.sync='currentPage'
    :bgArr='bgArr'
    :isCache='false'
    :transition="{
        duration: '700ms', // 动画时长
        timingFun: 'ease', // 动画速度曲线
        delay: '0s', // 动画延迟
      }"
    >
      <template #page1>
        <!-- 部门介绍展示 -->
        <div class="page1">
          <dep-intro></dep-intro>
        </div>
      </template>

      <template #page2>
        <div class="page2">
        <!-- CCF介绍展示 -->
          <ccfintro></ccfintro>
        </div>
      </template>
      <template #page3>
        <div class="page3">
          <!-- 报名页面展示 -->
          <new-login></new-login>
        </div>
      </template>
    </mv-full-page>
  </div>
</template>

<script>
import Ccfintro from './Ccfintro.vue'
import DepIntro from './DepIntro.vue'
import NewLogin from './NewLogin.vue'
export default {
  components: { DepIntro, Ccfintro, NewLogin },
  name: 'Home',
  data () {
    return {
      isV: true,
      currentPage: 1
      // bgArr: ['#fff', '#fff', 'pink', 'green']
    }
  },
  methodes: {
  }
}
</script>
<style scoped lang="less">
  .home{
    width: 100%;
    position: absolute;
    z-index: 999;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    box-shadow: 5px 0px 5px rgba(0,0,0,0.3);
    min-width: 80%;
    .top-barrer{
      z-index: 99;
      background-color: #fff;
      min-width: 50%;
      width: 90%;
      height: 70px;
      display: flex;
      justify-content: space-between;
      align-content: center;
      .icon-hw{
        width: 20%;
        height: 80%;
        img{
          margin-top: 5px;
          height: 100%;
        }
      }
      .right-info{
        height: 100%;
        line-height: 70px;
        display: flex;
        width: 40%;
        justify-content: space-between;
        li{
          min-width: 150px;
          width: 80%;
          height: 100%;
          a{
            width: 100%;
            min-width: 40%;
            color: rgb(103, 107, 115);
            transition: 0.2s;
            &:hover{
              color: rgb(55, 120, 229);
            }
          }
        }
      }
    }
  }
  .page1{
    width: 100%;
    margin-top: 80px;
  }
  .page2{
    width: 100%;
    .test{
      width: 100%;
    }
  }
</style>
