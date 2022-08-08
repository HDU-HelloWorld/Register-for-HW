<template>
  <div class="barrer">
    <img src="@/assets/img/3.png">
    <div class="desc">
      <h1>人工智能部门</h1>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;
  在刚刚开始的大学生活中，
  你是否为所学的计算机课程
  中不包含人工智能而感到烦恼，
  或者你是人工智能发烧友，
  正在为找不到志同道合的知己而发愁，
  是否你不满足于目前所求，
  想进一步提高自己的计算机水平，来吧，
  我们人工智能部门将给你提供一个学习交流的场所，
  让你在人工智能的天空自由翱翔~
      </p>
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
      margin-top: 2%;
      border-radius: 15px;
      width:60%
    }
    .desc{
      width: 38%;
      h1{
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
