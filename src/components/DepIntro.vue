<template>
  <div class="content">
    <div class="contro">
      <!-- 部门介绍导航栏 -->
      <div class="imgs-icon">
        <li @click="changeColor"><router-link  class="navlist" to="/"><img src="@/assets/front.png"></router-link></li>
        <li @click="changeColor"><router-link  class="navlist" to="/Back"><img src="@/assets/back.jpg"></router-link></li>
        <li @click="changeColor"><router-link  class="navlist" to="/Peoplesmart"><img src="@/assets/peoplesmart.png"></router-link></li>
        <li @click="changeColor"><router-link  class="navlist" to="/Admin"><img src="@/assets/admin.png"></router-link></li>
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
    changeColor () {
      let navlists = document.querySelectorAll('.navlist')
      for (let i = 0; i < navlists.length; i++) {
        navlists[i].onclick = function () {
          // 恢复成默认样式
          for (let j = 0; j < navlists.length; j++) {
            navlists[j].style.outlineColor = '#fff'
          }
          // 添加点击样式
          this.style.outlineColor = 'rgba(117, 159, 231, 0.98)'
        }
      }
    }
  }
}
</script>
<style scoped lang="less">
  .content{
    width: 100%;
    position: absolute;
    .contro{
      position: relative;
      z-index: 999;
      width:55%;
      height: 80px;
      top: 450px;
      .imgs-icon{
        margin-left: 40%;
        z-index: 999;
        height: 80px;
        width:60%;
        display: flex;
        justify-content: space-between;
        align-content: center;
        text-align: center;
        li{
          width: 15%;
          border-radius: 8px;
          a{
            display: block;
            width: 100%;
            border-radius: 8px;
            transition: 0.2s;
            outline: 2.8px solid #fff;
            &:hover{
              outline: 2.8px solid rgba(117, 159, 231, 0.98);
              border-radius: 8px;
            }
            img{
              box-sizing: border-box;
              padding: 5px;
              vertical-align: top;
              border-radius: 8px;
              width: 100%;
            }
          }
        }
      }
    }
    .showinfo{
      top: -80px;
      width: 100%;
      position: relative;
    }
  }
</style>
