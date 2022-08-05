<template>
  <div class="barrer">
    <img src="@/assets/img/4.jpg">
    <div class="desc">
      <h1>前端部门</h1>
      <pre>
Web组分为前端、后端以及对接，
前端是指用户直接可以看得见的部分，
包括Web页面结构、
Web的外观视觉表达以及Web层面的交互实现。
后端则更多的是与数据库进行交互以处理相应的业务逻辑，
需要考虑如何实现功能、数据的储存、
平台的稳定性与性能等，
而对接的则是统筹任务和人员工作安排，
需要了解前后端的同时兼顾行政功能。
如果你想和众多道友一同学习交流Web知识、
探索互联网的乐趣，那就加入Web组吧！
      </pre>
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
    img{
      margin-top: 50px;
      border-radius: 15px;
      width:50%
    }
    .desc{
      width: 35%;
      h1{
        width: 100%;
        margin-bottom: 30px;
      }
      pre{
        width: 100%;
        font-size: 20px;
      }
    }
  }
</style>
