<template>
  <div class="startPage">
    <div class="cover">
      <div class="text">
        <span class="spanText">
          <div class="colorText">H</div>
          ello
          <div class="colorText">W</div>
          orld
        </span>
        <span class="spanText"
          >M
          <div class="colorText">ea</div>
          ns</span
        >
        <span class="spanText">
          <div class="colorText">C</div>
          reate</span>
        <span class="spanText">
          AND&nbsp;
          <div class="colorText">DO</div>&nbsp;
          IT!
        </span>
      </div>
      <div class="playVideo">
        <div class="iconBorder">
          <!-- Generator: Adobe Illustrator 25.2.1, SVG Export Plug-In  -->
          <div class="iconCover">
            <svg
              t="1661604427919"
              class="icon icon-play"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2171"
            >
              <path
                d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
                fill="#fff"
                p-id="2172"
              ></path>
            </svg>
          </div>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="1368px"
            height="770px"
            viewBox="0 0 1368 770"
            style="overflow: hidden; enable-background: new 0 0 1368 770"
            xml:space="preserve"
            class="svgBorder"
          >
            <defs></defs>
            <path class="st0" d="M1367,246" />
            <path
              class="st0"
              d="M1367,769H1V1h1074.67L1122,1c82.08,82.08,163.04,163.04,245,245V769z"
            />
          </svg>
        </div>
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
      font-size: 8vh;
      line-height: 8vh;
      font-weight: bold;
      margin: 5vh 0;
      // 设置不可选取
      user-select: none;
      span {
        display: flex;
      }
      .colorText {
        // display: inline-block;
        color: aquamarine;
      }
    }
    .playVideo {
      cursor: pointer;
      .iconCover {
        position: absolute;
        width: 10vh;
        height: 5vh;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          width: 2vh;
          path {
            transition: all 0.5s;
          }
        }
      }
      .iconBorder {
        width: 100%;
        height: 100%;
        .svgBorder {
          width: 10vh;
          height: 5vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .st0 {
          fill: rgba(0, 0, 0, 0.6);
          stroke: #ffffff;
          stroke-width: 30px;
          stroke-miterlimit: 0;
          transition: all 0.5s;
        }
      }
      &:hover {
        path {
          fill: aquamarine;
          transition: all 0.5s;
        }
        .st0 {
          stroke: aquamarine;
          transition: all 0.5s;
        }
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
