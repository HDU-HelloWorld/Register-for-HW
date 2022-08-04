<template>
<div>
  <div class="home">
    <!-- 顶部导航条 -->
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
  <dep-intro></dep-intro>
</div>
</template>

<script>
import DepIntro from './DepIntro.vue'
export default {
  components: { DepIntro },
  name: 'Home',
  data () {
    return {
    }
  },
  methodes: {
  }
}
</script>
<style scoped lang="less">
  .home{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    border-bottom: 1px rgba(0,0,0,0.3) solid;
    min-width: 80%;
    .top-barrer{
      min-width: 50%;
      width: 90%;
      height: 70px;
      background-color: #fff;
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
</style>
