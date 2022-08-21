<template>
  <div class="barrer">
    <img src="@/assets/img/4.jpg">
    <div class="desc">
      <h1>前端部门</h1>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;
  前端是指用户直接可以看得见的部分，
包括Web页面结构、
Web的外观视觉表达以及Web层面的交互实现。
在这里，你可以参与社团的一些前端项目。
如果你想和众多道友一同学习交流Web知识、
探索互联网的乐趣，那就加入前端组吧！
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Front'
}
</script>

<style lang="less" scoped>
  .barrer{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    min-width: 800px;
    img{
      margin-top: 2%;
      border-radius: 15px;
      width:60%;
      min-width: 600px;
    }
    .desc{
      width: 38%;
      h1{
        margin-top: 5%;
        margin-left: 5%;
        font-size: 40px;
        font-family: 'bigtitle';
        margin-bottom: 30px;
      }
      p{
        font-family: 'descrip';
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
</style>
