<template>
  <div class="whole">
    <div class="Intro">
      <div class="title">简介</div>
      <div class="descr">
        中国计算机学会（CCF）成立于1962年，全国一级学会，独立社团法人，中国科学技术协会成员。
      </div>
      <div class="content">CCF是中国计算机及相关领域的学术团体，宗旨是为本领域专业人士的学术和职业发展提供服务；推动学术进步和技术成果的应用；进行学术评价，引领学术方向；促进技术和产业应用一线的交流和互动；对在学术和技术方面有突出成就的个人、企业和单位给予认可和表彰</div>
    </div>
    <div class="develop">
      <img src="@/assets/ccflogo.jpg" alt="" class="disappear">
      <div class="overlay">
      <div class="title1">发展历程</div>
      <div class="day12">
        <el-timeline id="cardone">
          <el-timeline-item timestamp="1962年6月" placement="top" size="large" color="#65c5f1" class="left1">
            <div class="card">
              <h4>成立中国电子学会计算机专业委员会第一届委员会</h4>
            </div>
          </el-timeline-item>
          <el-timeline-item timestamp="1985年3月" placement="top" color="#65c5f1" class="right">
            <div class="card">
              <h4>中国科协转发国家体改委批准成立中国计算机学会（全国一级学会）</h4>
            </div>
          </el-timeline-item>
          <el-timeline-item timestamp="1989年8月" placement="top" color="#65c5f1" class="left2">
            <div class="card">
              <h4>学会主办的第一届国际青年计算机会议（ICYCS'89)在北京举行</h4>
            </div>
          </el-timeline-item>
          <el-timeline-item timestamp="1998年5月" placement="top" color="#65c5f1" class="right">
            <div class="card">
              <h4>中国计算机学会青年计算机科技论坛YOCSEF创建</h4>
            </div>
          </el-timeline-item>
        </el-timeline>
        <el-timeline id="cardtwo">
          <el-timeline-item timestamp="1998年8月" placement="top" color="#65c5f1" class="left3">
            <div class="card">
              <h4>学会网站正式开通，<a href="http://www.ccf.org.cn">http://www.ccf.org.cn</a></h4>
            </div>
          </el-timeline-item>
          <el-timeline-item timestamp="2003年11月" placement="top" color="#65c5f1" class="right">
            <div class="card">
              <h4>第一届中国计算机大会（CNCC)在北京举行</h4>
            </div>
          </el-timeline-item>
          <el-timeline-item timestamp="2013年5月20日" placement="top" color="#65c5f1" class="left3">
            <div class="card">
              <h4>CCF早期成立的学生分会之一CCF杭州电子科技大学分会成立</h4>
            </div>
          </el-timeline-item>
        </el-timeline>
      </div></div>

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
    let Heig = document.querySelector('.whole')
    Heig.style.height = window.screen.height
    console.log(window.screen.height)
  }
}
</script>

<style scoped lang="less">
.whole{
  width: 100%;
}
img {
  margin-left: 15%;
  box-sizing: border-box;
  padding: 5px;
  vertical-align: top;
  border-radius: 80px;
  width: 70%;
  height: 450px;
  margin-top: 1%;
  opacity: 1;
  transition: 0.5s ease;
}
.Intro{
  margin-top: 5%;
  width: 100%;
  height: 30%;
  .title {
  margin-top: 50px;
  text-align: center;
  font-size: 30px;
  color: #2a2e2e;
  font-family: "TencentSansw7";
  font-weight: 800;
  font-style: oblique;
  width: 100%;
  }
  .descr{
    margin-left: 20%;
    margin-right: 20%;
    font-weight: 600;
    padding: auto;
    font-size: 23px;
    color: rgb(97, 98, 99);
  }
  .content {
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 20px;
  font-weight: 600;
  padding: auto;
  font-size: 20px;
  color: rgb(97, 98, 99);
  }
}
.develop{
  height: 80%;
  .title1 {
    width: 100%;
    text-align: center;
    margin-top: -450px;
    font-size: 40px;
    color: #2a2e2e;
    font-family: "TencentSansw7";
    font-weight: 800;
    font-style: oblique;
    margin-bottom: 35px;
  }
}
.develop:hover .overlay {
  opacity: 1;
}
.develop:hover .disappear {
  opacity: 0;
}
.overlay {
  opacity: 0;
  transition: 0.5s ease;
  margin-top: -20px;
}
.card{
  margin:5px 0;
}
.el-timeline {
  width: 100%;
  position: relative;
  left: 20%;
  font-size: 15px;
}
.day12 {
  height: 80%;
  display: flex;
  justify-content: space-between;
  width: 80%;
}
</style>
