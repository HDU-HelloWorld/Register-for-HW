<template>
  <div class="barrer">
    <img src="@/assets/img/3.png">
    <div class="desc">
      <h1>人工智能部门</h1>
      <pre>
  在刚刚开始的大学生活中，
  你是否为所学的计算机课程
  中不包含人工智能而感到烦恼，
  或者你是人工智能发烧友，
  正在为找不到志同道合的知己而发愁，
  是否你不满足于目前所求，
  想进一步提高自己的计算机水平，来吧，
  我们人工智能部门将给你提供一个学习交流的场所，
  让你在人工智能的天空自由翱翔~
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Peoplesmart'
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
