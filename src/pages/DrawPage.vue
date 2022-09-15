<template>
<div>
  <!-- PC -->
<div class="PcDraw">
  <div class="cover">
    <div id="sakana-widget"></div>
    <div class="banner">
      <div class="banner-top">
        <div class="content">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-color_gift"></use>
        </svg>
          </div>
        <div class="content">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon--gift"></use>
        </svg>
        </div>
        <div class="content">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gifts"></use>
        </svg>
        </div>
      </div>
      <div class="banner-bottom">
        <div class="content">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gift2"></use>
          </svg>
        </div>
        <div class="content">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gift"></use>
          </svg>
        </div>
        <div class="content">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gift1"></use>
          </svg>
        </div>
      </div>
      <div class="button" @click="get_prize">开抽！！</div>
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
</div>
<!-- 手机 -->
<div class="MoDraw">
  <div class="Motitle">
    奖品信息！！
  </div>
  <div class="Moswiper">
    <div class="Mocontain" v-for="item in imgs" :key="item.id">
      <img :src="item.image">
    </div>
  </div>
  <div class="Mo-control">
    <li class="control-li active"></li>
    <li class="control-li"></li>
    <li class="control-li"></li>
    <li class="control-li"></li>
  </div>
  <div class="Mo-banner">
    <div class="banner-top">
      <div class="Mocontent">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-color_gift"></use>
      </svg>
        </div>
      <div class="Mocontent">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon--gift"></use>
      </svg>
      </div>
      <div class="Mocontent">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gifts"></use>
      </svg>
      </div>
    </div>
    <div class="banner-bottom">
      <div class="Mocontent">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gift2"></use>
        </svg>
      </div>
      <div class="Mocontent">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gift"></use>
        </svg>
      </div>
      <div class="Mocontent">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gift1"></use>
        </svg>
      </div>
    </div>
      <div class="button" @click="get_prize">开抽！！</div>
  </div>
</div>
</div>
</template>

<script>
import sakana from '@/assets/Sakala/sakana.js'
// 新创alert函数来修改alert框样式
window.alert = alert
function alert (data) {
  var a = document.createElement('div')
  var p = document.createElement('p')
  var btn = document.createElement('div')
  var textNode = document.createTextNode(data)
  var btnText = document.createTextNode('好的')
  // 控制样式  样式实在是不会写捏
  css(a, {
    'position': 'fixed',
    'left': '0',
    'right': '0',
    'top': '20%',
    'width': '30%',
    'height': '30%',
    'margin': '0 auto',
    'background': 'rgba(162,226,199,.95)',
    'font-size': '20px',
    'text-align': 'center',
    'z-index': '999999999',
    'box-shadow': '5px 5px 5px 5px rgba(0,0,0,.4)',
    'border-radius': '18px'
  })
  css(btn, {
    'position': 'relative',
    'top': '45%',
    'left': '35%',
    'width': '30%',
    'height': '20%',
    'background': 'rgba(252,177,171,.9)',
    'border-radius': '10px',
    'font-size': '20px',
    'font-family': '微软雅黑',
    'color': '#1A507E',
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center'
  })
  // 内部结构套入
  p.appendChild(textNode)
  btn.appendChild(btnText)
  a.appendChild(p)
  a.appendChild(btn)
  // 整体显示到页面内
  document.getElementsByTagName('body')[0].appendChild(a)

  // 确定绑定点击事件删除标签
  btn.onclick = function () {
    a.parentNode.removeChild(a)
  }
}
function css (targetObj, cssObj) {
  var str = targetObj.getAttribute('style') ? targetObj.getAttribute('style') : ''
  for (var i in cssObj) {
    str += i + ':' + cssObj[i] + ';'
  }
  targetObj.style.cssText = str
}
export default {
  name: 'DrawPage',
  data () {
    return {
      imgs: [
        {image: '1.png', id: 1},
        {image: '2.png', id: 2},
        {image: '3.png', id: 3},
        {image: '4.jpeg', id: 4}],
      bannerHeight: ' ',
      //  抽奖和概率的数组
      Prize: [
        {grade: '一等奖', weight: 1},
        {garde: '二等奖', weight: 5},
        {garde: '三等奖', weight: 20},
        {garde: '未中奖', weight: 74}
      ],
      timer: ' ',
      index: 0
    }
  },
  methods: {
    sakana () {
      sakana.initSakanaWidget()
    },
    //  图片自适应
    imgload () {
      this.$nextTick(() => {
        this.bannerHeight = this.$refs.bannerHeight[0].height
      })
    },
    //  选中样式函数
    prize_style (index) {
      let content = document.querySelectorAll('.content')
      let Mocontent = document.querySelectorAll('.Mocontent')
      content[index - 1].style.border = '3px solid #1A507E'
      content[index - 1].style.background = '#db5a6bc7'
      Mocontent[index - 1].style.border = '3px solid #1A507E'
      Mocontent[index - 1].style.background = '#db5a6bc7'
    },
    //  清除样式函数
    style_init (index) {
      let content = document.querySelectorAll('.content')
      content[index - 1].style.border = '3px solid transparent'
      content[index - 1].style.background = ''
      let Mocontent = document.querySelectorAll('.Mocontent')
      Mocontent[index - 1].style.border = '3px solid transparent'
      Mocontent[index - 1].style.background = ''
    },
    //  抽奖函数
    get_prize () {
      // 生成随机数
      let a = Math.floor((Math.random() * 6) + 1)
      //  动画循环
      let that = this
      for (let i = 1; i <= 27; i++) {
        (function (k) {
          setTimeout(() => {
            if (k === 1) {
              // console.log(this)
              that.prize_style(k)
              that.style_init(6)
            } else {
              that.prize_style(k)
              that.style_init(k - 1)
            }
          }, 200 * i)
        })(i % 7)
        // that.style_init(i)
      }
      //  之后随机生成奖品
      (function () {
        setTimeout(() => {
          that.style_init(6)
          that.prize_style(a)
        }, 200 * 27 + 200)
      })()
      setTimeout(() => {
        alert('xz太强啦！')
      }, 200 * 27 + 400)
      //  清除样式
      for (let index = 1; index <= 6; index++) {
        that.style_init(index)
      }
    },
    //  手机端轮播图定时器
    Moswiper () {
      let Moswiper = document.querySelector('.Moswiper')
      let control = document.querySelectorAll('.control-li')
      for (let i = 0; i < 4; i++) {
        control[i].classList.remove('active')
      }
      control[this.index].classList.add('active')
      Moswiper.style.left = '-' + 100 * this.index + 'vw'
      this.index++
      if (this.index === 4) {
        this.index = 0
      }
    }
  },
  computed: {
    weightSum () {
      let weightsum = 0
      for (let i = 0; i < this.Prize.length; i++) {
        weightsum += this.Prize[i].weight
      }
      return weightsum
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
    this.timer = setInterval(this.Moswiper, 1500)
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
// PC端
@media only screen and(min-width: 768px) {
  .PcDraw{
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  .cover{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgb(228,217,212);
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
          width: 100px;
          height: 100px;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 18px;
          // background: #db5a6bc7;
          .icon{
            width:80px ;
            height: 80px;
            cursor: pointer;
          }
          &:nth-child(2){
            margin-top: 15%;
          }
        }
      }
      .banner-bottom{
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: space-between;
        .content{
          width: 100px;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 18px;
          .icon{
            width:80px ;
            height: 80px;
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
        left: 50%;
        transform: translateX(-50%);
        bottom: 10px;
        color: #fbfbfb;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        text-shadow: 2px 2px 2px rgba(0,0,0,.4);
        font-size: 18px;
        box-shadow: 4px 4px 4px 4px rgba(0,0,0,.2);
        border-radius: 10px;
        cursor: pointer;
      /* Just for presentation */
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.25s;
        text-shadow: 0 0 5px red,0 0 10px red,0 0 15px red,0 0 20px red;
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
      background: rgb(17, 208, 202);
      box-shadow: 5px 5px 5px 5px rgba(0,0,0,.2);
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
  .MoDraw{
    display: none !important;
    touch-action: auto !important;
  }
}
//手机端
@media only screen and (max-width: 767px) {
  body{
  width: 100vw;
  height: 150vh;
}
  .PcDraw{
    display: none !important;
  }
  .MoDraw{
    overflow: scroll;
    width: 100vw;
    height: 120vh;
    .Motitle{
      height: 3vh;
      text-align: center;
      font-size: 24px;
      margin: 1vh 0;
      font-family: 'bigtitle';
    }
    width: 100vw;
    .Moswiper{
      width: 400vw;
      border-radius: 12px;
      position: relative;
      left:0vw;
      transition: 0.5s;
      .Mocontain{
        overflow: hidden;
        width: 100vw;
        border-radius: 12px;
        float: left;
        margin-top: 3vh;
        img{
          border-radius: 12px;
          margin-left: 2.5%;
          width: 95%;
        }
      }
    }
    .Mo-control{
      margin-left: 25vw;
      width: 50vw;
      height: 2vh;
      display: flex;
      justify-content: space-between;
      justify-content: space-between;
      .control-li{
        width: 22%;
        list-style: none;
        height: 1.8vh;
        background-color:#1A507E;
      }
      .control-li.active{
        background-color: #DB5A6C;
      }
    }
    .Mo-banner{
      width: 100vw;
      margin: 5vh 0;
      .banner-top{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .Mocontent{
          width: 30%;
          font-size: 22vw;
          display: flex;
          justify-content: center;
          align-items: center;
          &:nth-child(2){
            margin-top: 5vh;
          }
        }
      }
      .banner-bottom{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .Mocontent{
          width: 30%;
          font-size: 22vw;
          display: flex;
          justify-content: center;
          align-items: center;
          &:nth-child(2){
            margin-top: 5vh;
          }
        }
      }
      .button{
        margin-top: 4vh;
        width: 130px;
        height: 40px;
        background: linear-gradient(to bottom, #1A507E 0%,#1A507E 100%); /* W3C */
        border: none;
        border-radius: 5px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        bottom: 10px;
        color: #fbfbfb;
        font-weight: 600;
        font-family: 'Open Sans', sans-serif;
        text-shadow: 2px 2px 2px rgba(0,0,0,.4);
        font-size: 18px;
        box-shadow: 4px 4px 4px 4px rgba(0,0,0,.2);
        border-radius: 10px;
        cursor: pointer;
      /* Just for presentation */
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.25s;
        text-shadow: 0 0 5px red,0 0 10px red,0 0 15px red,0 0 20px red;
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
  }
}
</style>
