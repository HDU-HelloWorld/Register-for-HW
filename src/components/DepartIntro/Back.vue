<template>
  <div class="barrer">
    <img src="@/assets/img/1.jpeg">
    <div class="desc">
      <h1>后端部门</h1>
    <pre>New_Student 屏幕前的你 = new New_Student();
        if(屏幕前的你.Join_Our_Group == true) {
        My_Thread 学习后端 = new My_Thread();
        My_Thread 学习java = new My_Thread();
        学习后端.run();
        学习java.run();
      }
    加入我们,让我们一起来学习酷炫的后端
    以及实用的Java!
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Back'
}
</script>

<style scoped lang="less">
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
      width: 38.5%;
      h1{
        margin-top: 5%;
        margin-left: 5%;
        font-size: 40px;
        font-family: 'bigtitle';
        margin-bottom: 30px;
      }
      pre{
        font-family: 'descrip';
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
</style>
