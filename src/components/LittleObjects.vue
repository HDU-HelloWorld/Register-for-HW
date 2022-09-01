<template>
  <div class="fullScreen">
    <transition name="left-line">
      <div class="leftLine floatLine" v-if="showLine">
        <div class="line">
          <!-- Generator: Adobe Illustrator 25.2.1, SVG Export Plug-In  -->
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            class="lineSVG"
            width="1px"
            height="440px"
            viewBox="0 0 1 440"
            style="overflow: visible; enable-background: new 0 0 1 440"
            xml:space="preserve"
          >
            <defs></defs>
            <g>
              <line class="st0" x1="0.5" y1="0" x2="0.5" y2="440" />
            </g>
          </svg>
        </div>
        <div class="text">HelloWorld</div>
        <div class="line">
          <!-- Generator: Adobe Illustrator 25.2.1, SVG Export Plug-In  -->
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            class="lineSVG"
            width="1px"
            height="440px"
            viewBox="0 0 1 440"
            style="overflow: visible; enable-background: new 0 0 1 440"
            xml:space="preserve"
          >
            <defs></defs>
            <g>
              <line class="st0" x1="0.5" y1="0" x2="0.5" y2="440" />
            </g>
          </svg>
        </div>
        <div class="plusObject">+</div>
        <div class="holder"></div>
      </div>
    </transition>
    <transition name="right-line">
      <div class="rightLine floatLine" v-if="showLine">
        <div class="down" @click="goRegister">
          <img src="@/assets/down.png" alt="Sign in" />
        </div>
        <div class="text text1" @click="goRegister">
          Create and do it yourself in HW!
        </div>
        <div class="upperText">
          <div class="line">
            <!-- Generator: Adobe Illustrator 25.2.1, SVG Export Plug-In  -->
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              class="lineSVG"
              width="1px"
              height="440px"
              viewBox="0 0 1 440"
              style="overflow: visible; enable-background: new 0 0 1 440"
              xml:space="preserve"
            >
              <defs></defs>
              <g>
                <line class="st0" x1="0.5" y1="0" x2="0.5" y2="440" />
              </g>
            </svg>
          </div>
          <div class="text">HelloWorld</div>
          <div class="line">
            <!-- Generator: Adobe Illustrator 25.2.1, SVG Export Plug-In  -->
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              class="lineSVG"
              width="1px"
              height="440px"
              viewBox="0 0 1 440"
              style="overflow: visible; enable-background: new 0 0 1 440"
              xml:space="preserve"
            >
              <defs></defs>
              <g>
                <line class="st0" x1="0.5" y1="0" x2="0.5" y2="440" />
              </g>
            </svg>
          </div>
          <div class="holder"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LittleObjects',
  data () {
    return {
      wordList: ['<'],
      showLine: false
    }
  },
  methods: {
    goRegister () {
      this.$emit('goRegister')
    },
    changeVisibility (visibility) {
      this.showLine = visibility
      console.log('changeVisibility', visibility)
    }
  },
  props: ['page'],
  watch: {
    page: function (newVal) {
      if (newVal === 1 || newVal === 5) {
        this.changeVisibility(false)
      } else {
        this.changeVisibility(true)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.fullScreen {
  display: flex;
  position: fixed;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  // fade-in效果
  animation: fadeIn 1s;
  .floatLine {
    width: 4vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    .line {
      height: 15vh;
      overflow: hidden;
      margin: 20px 0;
    }
    .text {
      font-family: 'helloworld';
      font-size: 5px;
      font-weight: 100;
      writing-mode: vertical-lr;
    }
    .plusObject {
      // font-family: 'helloworld';
      font-size: 30px;
      font-weight: 200;
      margin: 20px 0;
    }
    .down {
      width: 1vw;
      img {
        width: 100%;
        margin: 3vh 0;
        pointer-events: auto;
        cursor: pointer;
      }
    }
  }
  .holder {
    height: 20px;
  }
}

.rightLine {
  position: fixed;
  left: 96vw;
  transform: rotate(180deg);
  justify-content: space-between !important;
  .text1 {
    margin: 15vh 0;
  }
}

.st0 {
  fill: none;
  stroke: #000000;
  stroke-miterlimit: 10;
}

.left-line-enter-active, .left-line-leave-active {
  transition: all 0.5s ease-in-out;
}

.left-line-enter, .left-line-leave-to {
  transform: translateX(-20vw);
}

.right-line-enter-active, .right-line-leave-active {
  // 只有X轴的动画
  transition: all 0.5s ease-in-out;
}

.right-line-enter, .right-line-leave-to {
  position: fixed;
  left: 120vw;
}
</style>
