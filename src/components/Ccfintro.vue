<template>
  <div class="whole">
    <div class="left">
      <div class="left-top">
        <div class="big">
          <div class="intro">
            <span class="speic">CCF Brief introduction</span><br>
            <span class="trans">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CCF简介</span>
          </div>
        </div>
        <div class="card">CCF是中国计算机及相关领域的学术团体，宗旨是为本领域专业人士的学术和职业发展提供服务；推动学术进步和技术成果的应用；进行学术评价，引领学术方向；促进技术和产业应用一线的交流和互动；对在学术和技术方面有突出成就的个人、企业和单位给予认可和表彰</div>
      </div>
      <div class="left-bottom">
        <div class="left-card">
          <div class="title">发展背景</div>
          <span>DevelopMnet Background</span>
          <p class="item">1962.6 成立中国电子学会计算机专业委员会第一届委员会</p>
          <p class="item">1985.3 中国科协转发国家体改委批准成立中国计算机学会（全国一级学会）</p>
          <p class="item">1989.8 学会主办的第一届国际青年计算机会议( ICYCS'89)在北京举行</p>
          <p class="item">1998.5 中国计算机学会青年计算机科技论坛YOCSEF创建</p>
        </div>
        <div class="right-card">
          <p class="item">1998.8 学会网站正式开通 <a target="_blank" href="http://www.ccf.org.cn">http://www.ccf.org.cn></a></p>
          <p class="item">2003.11 第一届中国计算机大会（CNCC)在北京举行</p>
          <p class="item">2013.5 CCF早期成立的学生分会之一CCF杭州电子科技大学分会成立</p>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="imgs">
        <div class="imgs-cover">
          <img src="@/assets/logoccf.png">
        </div>
        <p class="title">CCF介绍</p>
      </div>
      <div class="shuoming">
        <div class="item">
          <p class="item-title">网址/web</p><br>
          <div class="content">http://www.ccf.org.cn</div>
        </div>
        <div class="item">
          <p class="item-title">竞赛/contest</p><br>
          <div class="content">NOI/CCSP/CCF TEC</div>
        </div>
        <div class="item">
          <p class="item-title">数字图书馆/Digital Library</p><br>
          <div class="content">文章/视频/音频</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ccfintro',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="less">
  .whole{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .left{
      width: 55%;
      height: 65%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .left-top{
        height: 35%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .big{
          width: 30%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          .intro{
            .speic{
              font-family: Engbe;
              font-size: 25px;
              font-weight: 900;
            }
            .trans{
              font-family: commondesc;
              font-size: 16px;
              font-weight: 10;
            }
          }
        }
        .card{
          width: 60%;
          height: 100%;
          font-family: try;
          font-weight: 900;
          border-radius: 18px;
          background: linear-gradient(145deg, #d2d2d2, #f9f9f9);
          box-shadow:  28px 28px 56px #959595,
                      -28px -28px 56px #ffffff;
          box-sizing: border-box;
          padding: 25px;
          font-size: 19px;
        }
      }
      .left-bottom{
        height: 55%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left-card{
          height: 100%;
          width: 38%;
          font-family: try;
          font-weight: 900;
          border-radius: 18px;
          background: linear-gradient(145deg, #d2d2d2, #f9f9f9);
          box-shadow:  28px 28px 56px #959595,
                      -28px -28px 56px #ffffff;
          box-sizing: border-box;
          padding: 25px;
          .title{
            box-sizing: border-box;
            padding: 8px;
            background-color: #1A507E;
            display: inline;
            color: #ffffff;
            border-radius: 15px;
          }
          .item{
            font-size: 16px;
            position: relative;
            &::before{
              content: '';
              position: absolute;
              left: -12px;
              top: 4px;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: #DB5A6C;
            }
          }
        }
        .right-card{
          height: 100%;
          width: 55%;
          font-family: try;
          font-weight: 900;
          border-radius: 18px;
          background: linear-gradient(145deg, #d2d2d2, #f9f9f9);
          box-shadow:  28px 28px 56px #959595,
                      -28px -28px 56px #ffffff;
          box-sizing: border-box;
          padding: 25px;
          .item{
            font-size: 16px;
            position: relative;
            &::before{
              content: '';
              position: absolute;
              left: -12px;
              top: 4px;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: #DB5A6C;
            }
          }
        }
      }
    }
    .right{
      width: 25%;
      height: 65%;
      font-family: try;
      font-weight: 900;
      border-radius: 18px;
      background: linear-gradient(145deg, #d2d2d2, #f9f9f9);
      box-shadow:  28px 28px 56px #959595,
                  -28px -28px 56px #ffffff;
      box-sizing: border-box;
      padding: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .imgs{
        width: 100%;
        .imgs-cover{
          width: 150px;
          height: 150px;
          margin-left: 30%;
          border-radius: 50%;
          background: #e9e9e9;
          box-shadow:  24px 24px 48px #c6c6c6,
                      -24px -24px 48px #ffffff;
          text-align: center;
          transition: 0.5s;
          &:hover{
            box-shadow: inset 24px 24px 48px #c6c6c6,
            inset -24px -24px 48px #ffffff;
            transition: 0.5s;
          }
          img{
            width: 80%;
            margin-top: 10%;
            border-radius: 50%;
          }
        }
        .title{
          font-family: commondesc;
          width: 100%;
          text-align: center;
        }
      }
      .shuoming{
        margin-top: -20px;
        .item{
          margin-top: -10px;
          .item-title{
            background-color: #DB5A6C;
            font-size: 20px;
            display: inline-block;
            padding: 8px;
            box-sizing: border-box;
            border-radius: 10px;
          }
          .content{
            margin-top: -12px;
            margin-left: 10%;
            border-radius: 5px;
            font-size: 18px;
            padding: 5px;
            color: #fff;
            display: inline-block;
            background-color: #1A507E;
          }
        }
      }
    }
  }
</style>
