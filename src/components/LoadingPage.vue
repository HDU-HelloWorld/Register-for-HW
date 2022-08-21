<template>
  <div class="body">
    <div id="particles-background" class="vertical-centered-box"></div>
    <div id="particles-foreground" class="vertical-centered-box"></div>

    <div class="vertical-centered-box">
      <div class="content">
        <div class="loader-circle"></div>
        <div class="loader-line-mask">
          <div class="loader-line"></div>
        </div>
        <svg
          width="36px"
          height="24px"
          viewBox="0 0 36 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M8.98885921,23.8523026 C8.8942483,23.9435442 8.76801031,24 8.62933774,24 L2.03198365,24 C1.73814918,24 1.5,23.7482301 1.5,23.4380086 C1.5,23.2831829 1.55946972,23.1428989 1.65570253,23.0416777 L13.2166154,12.4291351 C13.3325814,12.3262031 13.4061076,12.1719477 13.4061076,11.999444 C13.4061076,11.8363496 13.3401502,11.6897927 13.2352673,11.587431 L1.68841087,0.990000249 C1.57298556,0.88706828 1.5,0.733668282 1.5,0.561734827 C1.5,0.251798399 1.73814918,2.85130108e-05 2.03198365,2.85130108e-05 L8.62933774,2.85130108e-05 C8.76855094,2.85130108e-05 8.89532956,0.0561991444 8.98994048,0.148296169 L21.4358709,11.5757407 C21.548593,11.6783875 21.6196864,11.8297916 21.6196864,11.999444 C21.6196864,12.1693815 21.5483227,12.3219261 21.4350599,12.4251432 L8.98885921,23.8523026 Z M26.5774333,23.8384453 L20.1765996,17.9616286 C20.060093,17.8578413 19.9865669,17.703871 19.9865669,17.5310822 C19.9865669,17.3859509 20.0390083,17.2536506 20.1246988,17.153855 L23.4190508,14.1291948 C23.5163648,14.0165684 23.6569296,13.945571 23.8131728,13.945571 C23.9602252,13.945571 24.0929508,14.0082997 24.1894539,14.1092357 L33.861933,22.9913237 C33.9892522,23.0939706 34.0714286,23.2559245 34.0714286,23.4381226 C34.0714286,23.748059 33.8332794,23.9998289 33.5394449,23.9998289 L26.9504707,23.9998289 C26.8053105,23.9998289 26.6733958,23.9382408 26.5774333,23.8384453 Z M26.5774333,0.161098511 C26.6733958,0.0615881034 26.8053105,0 26.9504707,0 L33.5394449,0 C33.8332794,0 34.0714286,0.251769886 34.0714286,0.561706314 C34.0714286,0.743904453 33.9892522,0.905573224 33.861933,1.00822006 L24.1894539,9.89030807 C24.0929508,9.99152926 23.9602252,10.0542579 23.8131728,10.0542579 C23.6569296,10.0542579 23.5163648,9.98354562 23.4190508,9.87063409 L20.1246988,6.8459739 C20.0390083,6.74617837 19.9865669,6.613878 19.9865669,6.46874677 C19.9865669,6.29624305 20.060093,6.14198767 20.1765996,6.03848544 L26.5774333,0.161098511 Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
    </div>
    <div class="connect">
      Connectiing to HelloWorld
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'LoadingPage',
  mounted () {
    /*!
 * Particleground
 *
 * @author Jonathan Nicol - @mrjnicol
 * @version 1.1.0
 * @description Creates a canvas based particle system background
 *
 * Inspired by http://requestlab.fr/ and http://disruptivebydesign.com/
 */
    particleground(document.getElementById('particles-foreground'), {
      dotColor: 'rgba(255, 255, 255, 1)',
      lineColor: 'rgba(255, 255, 255, 0.05)',
      minSpeedX: 0.3,
      maxSpeedX: 0.6,
      minSpeedY: 0.3,
      maxSpeedY: 0.6,
      density: 50000, // One particle every n pixels
      curvedLines: false,
      proximity: 250, // How close two dots need to be before they join
      parallaxMultiplier: 10, // Lower the number is more extreme parallax
      particleRadius: 4, // Dot size
    })

    particleground(document.getElementById('particles-background'), {
      dotColor: 'rgba(255, 255, 255, 0.5)',
      lineColor: 'rgba(255, 255, 255, 0.05)',
      minSpeedX: 0.075,
      maxSpeedX: 0.15,
      minSpeedY: 0.075,
      maxSpeedY: 0.15,
      density: 30000, // One particle every n pixels
      curvedLines: false,
      proximity: 20, // How close two dots need to be before they join
      parallaxMultiplier: 20, // Lower the number is more extreme parallax
      particleRadius: 2, // Dot size
    })
  // 三秒后跳转到主页
    setTimeout(() => {
      // 销毁组件
      this.$destroy()
      this.$router.push('/home')
    }, 3000)
  }
}
</script>

<style lang="less" scoped>
// START: TEMPLATE
@blue: #26bbf0;
@green: #c2d5a0;
@red: #cf6a6d;
@yellow: #ffbc0d;

@black: #343536;
@black-2: #424950;
@grey: #89949b;
@grey-2: #9aa8b1;
@light-grey: #c4c9cd;
@light-grey-2: #dbdfe1;
@white: #f3f4f5;

.body {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: 'proxima-nova-soft', sans-serif;
  -webkit-user-select: none;
  overflow: hidden;
  display: flex;
  justify-content: center;

  .vertical-centered-box {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    &:after {
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      margin-right: -0.25em;
    }
    .content {
      box-sizing: border-box;
      display: inline-block;
      vertical-align: middle;
      text-align: left;
      font-size: 0;
    }
  }
}

* {
  transition: all 0.3s;
}
// END: TEMPLATE

body {
  background: mix(#3f3251, #002025, 70%);
}

#prism-logo {
  path {
    // fill: #20293b;
    // stroke: rgba(255,255,255,1);
    // stroke-width: 1px;
  }
}

.loader-circle {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  margin-left: -60px;
  margin-top: -60px;
  // .animation(fade 1.2s infinite ease-in-out);
}

.loader-line-mask {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 60px;
  height: 120px;
  margin-left: -60px;
  margin-top: -60px;
  overflow: hidden;
  transform-origin: 60px 60px;
  -webkit-mask-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  animation: rotate 1.2s infinite linear;
  .loader-line {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  }
}

.connect {
  color: #fff;
  position: absolute;
  bottom: 35vh;
  font-size: 3vh;
}

#particles-background,
#particles-foreground {
  left: -51%;
  top: -51%;
  width: 202%;
  height: 202%;
  transform: scale3d(0.5, 0.5, 1);
}

#particles-background {
  background: mix(#3f3251, #002025, 70%);
  background-image: -moz-linear-gradient(45deg, #3f3251 2%, #002025 100%);
  background-image: -webkit-linear-gradient(45deg, #3f3251 2%, #002025 100%);
  background-image: linear-gradient(45deg, #3f3251 2%, #002025 100%);
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fade {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.25;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
