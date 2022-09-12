<template>
  <div class="barrer">
    <img src="@/assets/img/pix/1.jpg" alt="">
    <div class="desc">
      <h1>行政部门</h1>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;HelloWorld行政部门是一个友爱团结的大家庭。
加入HelloWorld行政部门，你可以提高自己的组织管理能力
参加并策划组织社团的活动；你也可以提高自己的社交能力
你还可以制作视频和海报，可以参与摄影和撰稿，
还可以记录小伙伴的学习和娱乐瞬间（表情包）……
总之，行政部门是HelloWorld社团对外宣传的重要窗口。
  当然啦，在我们部门也不是不能学习。
无论是前端还是后端开发，
如果你感兴趣，都可以去其他的部门蹭课，
还不会有硬性的作业要求喔。
  欢迎加入行政部门，以热情的心为社团注入活力！！
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin'
}
</script>

<style lang='less' scoped>
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
      width: 35%;
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
