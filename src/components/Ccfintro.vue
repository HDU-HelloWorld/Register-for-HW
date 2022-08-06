<template>
  <div class="showinfo">
    <img src="@/assets/ccflogo.jpg" alt="" width="100%" height="500px" />
    <div class="nav">
      <ul>
        <li><a href="#1">简介</a></li>
        <li><a href="#2">发展历程</a></li>
      </ul>
    </div>
    <div>
      <div class="title" id="1">简介</div>
      <br>
      <div class="">
        <p>
          中国计算机学会（CCF）成立于1962年，全国一级学会，独立社团法人，中国科学技术协会成员。
        </p>
        <p>
          CCF是中国计算机及相关领域的学术团体，宗旨是为本领域专业人士的学术和职业发展提供服务；推动学术进步和技术成果的应用；进行学术评价，引领学术方向；促进技术和产业应用一线的交流和互动；对在学术和技术方面有突出成就的个人、企业和单位给予认可和表彰
        </p>
      </div>
    </div>
    <br /><br /><br /><br />
    <div class="title" id="2">发展历程</div>
    <br><br>
    <div class="day12">
      <el-timeline>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ccfintro',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.first {
  height: 1000px;
}
.title {
  text-align: center;
  font-size: 30px;
  color: #2a2e2e;
  font-family: "TencentSansw7";
  font-weight: 800;
  font-style: oblique;
}
.text {
  margin: auto;
}
body {
  background: url("/assets/ccflogo.jpg");
}
p {
  margin-left: 20%;
  margin-right: 20%;
  font-weight: 600;
  padding: auto;
  color: rgb(97, 98, 99);
}
#a {
  font-size: 20px;
}
.nav {
  height: 60px;
}
.nav ul {
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
  list-style: none;
}
.nav ul li {
  float: left;
  font-weight: 600;
  font-size: 20px;
}
.nav ul li a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  width: 119px;
  height: 60px;
  display: block;
  line-height: 60px;
  text-align: center;
  border-right: 1px white solid;
}
.nav ul li a:hover {
  background-color: #65c5f1;
}
.nav ul li a.last {
  border-right: none;
}
.history {
  margin-left: 45%;
}
.card{
  margin:5px 0;
}
.el-timeline {
  width: 80%;
  position: relative;
  left: 30%;
  font-size: 20px;
}
.day12 {
  width: 100%;
  display: inline-block;
  margin-right: 10%;
}
</style>
