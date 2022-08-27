<template>
  <div class="whole">
    <div class="left">
      <div class="left-top">
        <div class="big">
          <span>CCF Brief introduction</span><br>
          <span>CCF简介</span>
        </div>
        <div class="card">CCF是中国计算机及相关领域的学术团体，宗旨是为本领域专业人士的学术和职业发展提供服务；推动学术进步和技术成果的应用；进行学术评价，引领学术方向；促进技术和产业应用一线的交流和互动；对在学术和技术方面有突出成就的个人、企业和单位给予认可和表彰</div>
      </div>
      <div class="left-bottom">
        <div class="left-card">
          <div class="title">发展背景 DevelopMnet Background</div>
          <p class="item">1962.6 成立中国电子学会计算机专业委员会第一届委员会</p>
          <p class="item">1985.3 中国科协转发国家体改委批准成立中国计算机学会（全国一级学会）</p>
          <p class="item">1989.8 学会主办的第一届国际青年计算机会议( ICYCS'89)在北京举行</p>
          <p class="item">1998.5 中国计算机学会青年计算机科技论坛YOCSEF创建</p>
        </div>
        <div class="right-card">
          <p class="item">1998.8 学会网站正式开通 <a href="http://www.ccf.org.cn">http://www.ccf.org.cn></a></p>
          <p class="item">2003.11 第一届中国计算机大会（CNCC)在北京举行</p>
          <p class="item">2013.5 CCF早期成立的学生分会之一CCF杭州电子科技大学分会成立</p>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="imgs">
        <img src="@/assets/ccflogo.jpg">
      </div>
      <p class="title">CCF介绍</p>
      <div class="shuoming">
        <div class="item">
          <p class="item-title">网址/web</p>
          <div class="content">http://www.ccf.org.cn</div>
        </div>
        <div class="item">
          <p class="item-title">竞赛/contest</p>
          <div class="content">NOI/CCSP/CCF TEC</div>
        </div>
        <div class="item">
          <p class="item-title">数字图书馆/Digital Library</p>
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
      align-items: center;
      background-color: blue;
      .left-top{
        height: 35%;
        width: 100%;
        background-color: red;
        display: flex;
        justify-content: space-between;
        .big{
          width: 30%;
          height: 100%;
          background-color: yellow;
        }
        .card{
          width: 60%;
          height: 100%;
          background-color: #bfa;
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
          background-color: red;
        }
        .right-card{
          background-color: brown;
          height: 100%;
          width: 55%;
        }
      }
    }
    .right{
      width: 25%;
      height: 65%;
      background-color: pink;
      .imgs{
        width: 100%;
        img{
          width: 80%;
          margin: 10%;
          margin-top: 5%;
          border-radius: 30px;
        }
      }
      .title{

      }
    }
  }
</style>
