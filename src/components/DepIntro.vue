<template>
  <div class="content">
    <div class="imgs">
      <div class="imgs-icon">
        <li><a><img src="@/assets/front.png"></a></li>
        <li><a><img src="@/assets/back.jpg"></a></li>
        <li><a><img src="@/assets/peoplesmart.png"></a></li>
        <li><a><img src="@/assets/admin.png"></a></li>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="less">
  .content{
    width: 100%;
    .imgs{
      width:55%;
      height: 500px;
      position: absolute;
      .imgs-icon{
        height: 80px;
        position: relative;
        left: 55%;
        top: 450px;
        width:40%;
        display: flex;
        justify-content: space-between;
        align-content: center;
        text-align: center;
        li{
          width: 20%;
          border-radius: 8px;
          a{
            display: block;
            width: 100%;
            border-radius: 8px;
            transition: 0.2s;
            outline: 2.8px solid #fff;
            &:hover{
              outline: 2.8px solid rgba(117, 159, 231, 0.98);
              border-radius: 8px;
            }
            img{
              box-sizing: border-box;
              padding: 5px;
              vertical-align: top;
              border-radius: 8px;
              width: 100%;
            }
          }
        }
      }
    }
  }
</style>
