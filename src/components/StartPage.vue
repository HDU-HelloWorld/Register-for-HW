<template>
  <div class="startPage">
    <div class="cover">
      <div class="text">
        <span class="spanText">HelloWorld</span>
        <span class="spanText">Means</span>
        <span class="spanText">Create!</span>
      </div>
      <div class="playVideo">
        <div class="iconBorder"></div>
      </div>
    </div>
    <div class="videoBox">
      <video autoplay loop muted>
        <source :src="video" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
import ccfVideo from '../assets/video/ccf.mp4'
export default {
  name: 'StartPage',
  data () {
    return {
      video: ccfVideo
    }
  }
}
</script>

<style lang="less" scoped>
.startPage {
  width: 100%;
  height: 100%;
  .cover {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.8);
    .text {
      color: #fff;
      display: flex;
      flex-direction: column;
      font-size: 5vh;
    }
    .playVideo {
      width: 8vh;
      height: 4vh;
      background: linear-gradient(
        -135deg,
        transparent 1vh,
        rgba(0, 0, 0, 0.9) 0
      );
      .iconBorder {
        width: 100%;
        height: 100%;
        border: 1px solid #fff;
      }
    }
  }
  .videoBox {
    width: 100%;
    height: 100%;
    video {
      z-index: -1;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
