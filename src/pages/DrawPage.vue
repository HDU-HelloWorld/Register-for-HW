<template>
<div class="Draw">
  <div class="cover">
    <div id="sakana-widget"></div>
    <div class="banner">
      <div class="banner-top">
        <div class="content" @click="Test">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-color_gift"></use>
        </svg>
          </div>
        <div class="content" @click="Test">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon--gift"></use>
        </svg>
        </div>
        <div class="content" @click="Test">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gifts"></use>
        </svg>
        </div>
      </div>
      <div class="banner-bottom">
        <div class="content" @click="Test">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gift2"></use>
          </svg>
        </div>
        <div class="content" @click="Test">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gift"></use>
          </svg>
        </div>
        <div class="content" @click="Test">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gift1"></use>
          </svg>
        </div>
      </div>
      <div class="button">button</div>
    </div>
    <div class="ShowWardInfo">
      <div class="block">
        <el-carousel :height="bannerHeight + 'px'">
          <el-carousel-item v-for="item in imgs" :key="item.id">
            <img :src="item.image" ref="bannerHeight" @load="imgload" />
          </el-carousel-item>
        </el-carousel>
        <p class="show-title">奖品信息</p>
    </div>
    </div>
  </div>
  <div class="usershow">111</div>
</div>
</template>

<script>
import sakana from '@/assets/Sakala/sakana.js'
export default {
  name: 'DrawPage',
  data () {
    return {
      imgs: [
        {image: '1.png', id: 1},
        {image: '2.png', id: 2},
        {image: '3.png', id: 3},
        {image: '4.jpeg', id: 4}],
      bannerHeight: ' '
    }
  },
  methods: {
    sakana () {
      sakana.initSakanaWidget()
    },
    Test () {
      alert('没有中奖捏')
    },
    //  图片自适应
    imgload () {
      this.$nextTick(() => {
        this.bannerHeight = this.$refs.bannerHeight[0].height
      })
    }
  },
  mounted () {
    this.sakana()
    //  解决图片的路径问题
    this.imgs.forEach(item => {
      if (item.image != null) {
        item.image = require('../assets/img/WardInfo/' + item.image)
      }
    })
    //  奇怪捏,调整自适应轮播图
    this.imgload()
    window.addEventListener(
      'resize',
      () => {
        this.bannerHeight = this.$refs.bannerHeight[0].height
        this.imgload()
      },
      false
    )
  }
}
</script>

<style scoped lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.Draw{
  width: 100vw;
  .cover{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    #sakana-widget{
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 999;
    }
    .banner{
      border: 1px solid #1A507E;
      background: rgba(233,233,233,0.3);
      width: 30%;
      height: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .banner-top{
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: space-between;
        .content{
          .icon{
            width:100px ;
            height: 100px;
            cursor: pointer;
          }
          &:nth-child(2){
            margin-top: 20%;
          }
        }
      }
      .banner-bottom{
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: space-between;
        .content{
          .icon{
            width:100px ;
            height: 100px;
            cursor: pointer;
          }
          &:nth-child(2){
            margin-top: 15%;
          }
        }
      }
      .button {
        width: 130px;
        height: 40px;
        background: linear-gradient(to bottom, #1A507E 0%,#1A507E 100%); /* W3C */
        border: none;
        border-radius: 5px;
        position: relative;
        // border-bottom: 4px solid #2b8bc6;
        color: #fbfbfb;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        text-shadow: 1px 1px 1px rgba(0,0,0,.4);
        font-size: 15px;
        text-align: left;
        text-indent: 5px;
        box-shadow: 0px 4px 4px 4px rgba(0,0,0,.2);
        cursor: pointer;

      /* Just for presentation */
        display: block;
        margin: 0 0 0 12px;
      }
      .button:active {
        box-shadow: 0px 2px 2px 2px rgba(0,0,0,.2);
        top: 1px;
      }

      .button:after {
        content: "";
        width: 0;
        height: 0;
        display: block;
        border-top: 20px solid #DB5A6C;
        border-bottom: 20px solid #DB5A6C;
        border-left: 16px solid transparent;
        border-right: 20px solid #DB5A6C;
        position: absolute;
        // opacity: 0.6;
        right: 0;
        top: 0;
        border-radius: 0 5px 5px 0;
      }
    }
    .ShowWardInfo{
      width: 45%;
      height: 70%;
      border-radius: 15px;
      // box-sizing: border-box;
      // padding: 30px;
      background-color: rgb(141, 177, 174);
      .block{
        width: 100%;
        .el-carousel{
          width: 100%;
          border-radius: 15px;
          .el-carousel__item{
            border-radius: 15px;
            width: 100%;
            overflow: none;
            img{
              margin-top: 20px;
              border-radius: 15px;
              margin-left: 5%;
              width: 90%;
              // height: 1000px;
            }
          }
        }
        .show-title{
          font-size: 24px;
          font-family: 微软雅黑;
          color: #1A507E;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>
