<template>
  <div class="content">
    <div class="contro">
      <!-- 部门介绍导航栏 -->
      <div class="imgs-icon">
        <li @click="changeIntro($event, 1)" @mouseover="mouseOver" @mouseleave="mouseLeave">
          <div class="navList borderBlue">
            <img src="@/assets/front.png" />
          </div>
        </li>
        <li @click="changeIntro($event, 2)" @mouseover="mouseOver" @mouseleave="mouseLeave">
          <div class="navList">
            <img src="@/assets/back.jpg" />
          </div>
        </li>
        <li @click="changeIntro($event, 3)" @mouseover="mouseOver" @mouseleave="mouseLeave">
          <div class="navList">
            <img src="@/assets/peoplesmart.png" />
          </div>
        </li>
        <li @click="changeIntro($event, 4)" @mouseover="mouseOver" @mouseleave="mouseLeave">
          <div class="navList">
            <img src="@/assets/admin.png" />
          </div>
        </li>
      </div>
    </div>
    <div class="showinfo">
      <!-- 指定组件的呈现位置 -->
      <Front v-if="introIndex == 1"></Front>
      <Back v-if="introIndex == 2"></Back>
      <Peoplesmart v-if="introIndex == 3"></Peoplesmart>
      <Admin v-if="introIndex == 4"></Admin>
    </div>
    <Sakana/>
  </div>
</template>
<script>
import Admin from '@/components/DepartIntro/Admin'
import Back from '@/components/DepartIntro/Back'
import Front from '@/components/DepartIntro/Front'
import Peoplesmart from '@/components/DepartIntro/Peoplesmart'
import Sakana from '@/components/Sakana.vue'
export default {
  name: 'DepIntro',
  data () {
    return {
      introIndex: '1',
      timer: ''
    }
  },
  components: {
    Admin,
    Back,
    Front,
    Peoplesmart,
    Sakana
  },
  methods: {
    changeIntro (targetNode, index) {
      // 切换介绍与图片
      this.introIndex = index
      // 给target的父级元素添加class
      // targetNode.target.parentNode.classList.add('borderBlue')
      let navList = document.querySelectorAll('.navList')
      for (let i = 0; i < 4; i++) {
        navList[i].classList.remove('borderBlue')
      }
      targetNode.target.parentNode.classList.add('borderBlue')
    },
    //  定时器展示组件信息
    changeComInfo () {
      let navList = document.querySelectorAll('.navList')
      if (this.introIndex === 4) {
        this.introIndex = 1
      } else {
        this.introIndex++
      }
      for (let i = 0; i < 4; i++) {
        navList[i].classList.remove('borderBlue')
      }
      navList[this.introIndex - 1].classList.add('borderBlue')
    },
    mouseOver () {
      clearInterval(this.timer)
    },
    mouseLeave () {
      this.timer = setInterval(this.changeComInfo, 1500)
    }
  },
  mounted () {
    this.timer = setInterval(this.changeComInfo, 1500)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
<style scoped lang="less">
.content {
  width: 100%;
  position: absolute;
  height: 100%;
  margin-top: 1%;
  display: flex;
  flex-direction: column;
  .contro {
    position: relative;
    z-index: 999;
    width: 55%;
    height: 15%;
    min-width: 300px;
    top: 88%;
    .imgs-icon {
      margin-left: 70%;
      z-index: 999;
      height: 100%;
      width: 40%;
      display: flex;
      justify-content: space-between;
      align-content: right;
      text-align: center;
      li {
        width: 15%;
        border-radius: 8px;
        list-style-type: none;
        min-width: 50px;
        .navList {
          display: block;
          width: 100%;
          border-radius: 8px;
          transition: 0.2s;
          outline: 2.8px solid #fff;
          cursor: pointer;
          &:hover {
            outline: 2.8px solid rgba(117, 159, 231, 0.98);
            border-radius: 8px;
          }
          img {
            min-width: 100%;
            box-sizing: border-box;
            padding: 5px;
            vertical-align: top;
            border-radius: 8px;
            width: 100%;
          }
        }
        // 将class同时有navList和borderBlue的outline颜色设为蓝色
        .navList.borderBlue {
          outline: 2.8px solid rgba(117, 159, 231, 0.98);
          border-radius: 8px;
        }
      }
    }
  }
  .showinfo {
    top: -50px;
    width: 100%;
    position: relative;
  }
}
#sakana-widget{
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 999;
}
</style>
