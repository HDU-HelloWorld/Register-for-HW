<template>
  <div class="mobile">
    <div class="page1 page">
      <span class="line">
        <img src="@/assets/logo.png" alt="LOGO" class="logo" />
      </span>
      <span class="line">
        <div class="title">欢迎报名</div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobilePage'
}
</script>

<style lang="less" scoped>
.mobile {
  width: 100vw;
  height: 100vh;
  .page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    .line {
      width: 100%;
      display: flex;
      justify-content: center;
      .logo {
        // 保持图片比例不变
        width: 30vw;
        object-fit: contain;
      }
      .title {
        font-size: 2.5vw;
        font-weight: 800;
      }
    }
  }
}
</style>
