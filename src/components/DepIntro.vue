<template>
  <div class="content">
    <div class="contro">
      <!-- 部门介绍导航栏 -->
      <div class="imgs-icon">
        <li @click="changeColor">
          <router-link class="navList" to="/"
            ><img src="@/assets/front.png"
          /></router-link>
        </li>
        <li @click="changeColor">
          <router-link class="navList" to="/Back"
            ><img src="@/assets/back.jpg"
          /></router-link>
        </li>
        <li @click="changeColor">
          <router-link class="navList" to="/Peoplesmart"
            ><img src="@/assets/peoplesmart.png"
          /></router-link>
        </li>
        <li @click="changeColor">
          <router-link class="navList" to="/Admin"
            ><img src="@/assets/admin.png"
          /></router-link>
        </li>
      </div>
    </div>
    <div class="showinfo">
      <!-- 指定组件的呈现位置 -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DepIntro',
  data () {
    return {
    }
  },
  methods: {
    changeColor (index) {
      // 给target的父级元素添加class
      index.target.parentNode.classList.add('borderBlue')
    }
  },
  mounted () {
    // 根据路由的参数，改变导航栏的颜色
    this.$nextTick(() => {
      let path = this.$route.path
      let navList = document.querySelectorAll('.navList')
      switch (path) {
        case '/':
          navList[0].classList.add('borderBlue')
          break
        case '/Back':
          navList[1].classList.add('borderBlue')
          break
        case '/Peoplesmart':
          navList[2].classList.add('borderBlue')
          break
        case '/Admin':
          navList[3].classList.add('borderBlue')
          break
      }
    })
  }
}
</script>
<style scoped lang="less">
.content {
  width: 100%;
  position: absolute;
  height: 100%;
  .contro {
    position: relative;
    z-index: 999;
    width: 55%;
    height: 15%;
    top: 75%;
    .imgs-icon {
      margin-left: 40%;
      z-index: 999;
      height: 100%;
      width: 60%;
      display: flex;
      justify-content: space-between;
      align-content: center;
      text-align: center;
      li {
        width: 15%;
        border-radius: 8px;
        .navList {
          display: block;
          width: 100%;
          border-radius: 8px;
          transition: 0.2s;
          outline: 2.8px solid #fff;
          &:hover {
            outline: 2.8px solid rgba(117, 159, 231, 0.98);
            border-radius: 8px;
          }
          img {
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
    top: -100px;
    width: 100%;
    position: relative;
  }
}
</style>
