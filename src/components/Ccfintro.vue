<template>
  <div>
    <img src="@/assets/ccflogo.jpg" alt="" width="100%" height="500px" />
    <div class="nav">
      <ul>
        <li><a href="#1">简介</a></li>
        <li><a href="#2">发展历程</a></li>
      </ul>
    </div>
    <div>
      <div class="title" id="1">简介</div>
      <div class="text">
        <p id="a">
          中国计算机学会（CCF）成立于1962年，全国一级学会，独立社团法人，中国科学技术协会成员。
        </p>
        <p>
          CCF是中国计算机及相关领域的学术团体，宗旨是为本领域专业人士的学术和职业发展提供服务；推动学术进步和技术成果的应用；进行学术评价，引领学术方向；促进技术和产业应用一线的交流和互动；对在学术和技术方面有突出成就的个人、企业和单位给予认可和表彰
        </p>
      </div>
    </div>
    <br><br><br><br>
    <div>
      <div class="title" id="2">发展历程</div>
      <div class="text">
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
  methods: {
  }
}
</script>

<style>
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
  background-color: rgb(163, 198, 238);
}
.nav ul li a.last {
  border-right: none;
}
</style>
