<template>
  <div class="fullScreen">
    <div class="leftLine floatLine">
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
    <div class="rightLine floatLine">
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
  </div>
</template>

<script>
export default {
  name: 'LittleObjects'
}
</script>

<style lang="less" scoped>
.fullScreen {
  display: flex;
  justify-content: space-between;
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
      writing-mode: vertical-lr;
      font-family: 'helloworld';
      font-size: 5px;
      font-weight: 100;
    }
    .plusObject {
      // font-family: 'helloworld';
      font-size: 30px;
      font-weight: 200;
      margin: 20px 0;
    }
  }
  .holder {
    height: 20px;
  }
}

.rightLine {
  justify-content: flex-start !important;
}

.st0 {
  fill: none;
  stroke: #000000;
  stroke-miterlimit: 10;
}
</style>
