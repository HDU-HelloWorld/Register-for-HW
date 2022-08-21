<template>
  <div class="body">
    <div class="container" id="app">
      <div
        class="output outputFade"
        :class="{ active: showDuplicates }"
        v-html="outputString"
        v-if="!success"
      ></div>
      <div class="output authMessage" v-if="success">
        Successfully Authorized
      </div>
      <input
        class="input"
        type="text"
        v-model="inputString"
        placeholder="Enter text here..."
        v-if="!success"
      />
      <div class="count">
        <p>Try to Enter "console.log('Hello World!')"</p>
        <button v-if="counted > 1" @click="showDuplicates = !showDuplicates">
          {{ showDuplicates ? 'Hide' : 'Show' }}
        </button>
      </div>
    </div>
    <div id="test"></div>
  </div>
</template>

<script>
export default {
  name: 'AuthPage',
  data () {
    return {
      inputString: '',
      outputString: '',
      showDuplicates: false,
      duplicates: [],
      success: false
    }
  },
  watch: {
    inputString (newChar, oldChar) {
      let uniq = ''
      for (const char of newChar) {
        // 50%概率改变颜色
        if (Math.random() > 0.5) {
          uniq += char
        } else {
          // 给span中的字母生成随机颜色
          let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
          uniq += `<span style="color: ${randomColor}">${char}</span>`
          this.duplicates.push(char)
        }
      }
      console.log(this.inputString)
      // 随机生成长度与inputString相同的字符串
      let randomString1 = ''
      let randomString2 = ''
      for (let i = 0; i < this.inputString.length; i++) {
        randomString1 += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      }
      for (let i = 0; i < this.inputString.length; i++) {
        randomString2 += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      }
      this.outputString = randomString1
      // 0.2秒后执行 this.outputString = randomString2，使用Promise异步执行
      function randomString () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(randomString2)
          }, 100)
        })
      }
      randomString().then(res => {
        this.outputString = res
        new Promise((resolve, reject) => {
          setTimeout(() => {
            this.outputString = uniq
            resolve(this.inputString)
          }, 100)
        }).then(res => {
          console.log('res:', res)
          // 正则匹配console.log('Hello World!')，忽略大小写
          const reg = /console.log\('Hello World'\)/gi
          if (reg.test(this.inputString)) {
            console.log('success')
            let output = document.querySelector('.outputFade')
            setTimeout(() => {
              output.classList.add('animate__animated', 'animate__backOutLeft')
            }, 200)
            // 2s后执行 this.success = true
            setTimeout(() => {
              this.success = true
            }, 800)
            setTimeout(() => {
              // 跳转到loading页面，并销毁当前页面
              this.$router.push('/loading')
              this.$destroy()
            }, 3000)
          }
        })
      })
    }
  },
  computed: {
    counted () {
      let set = new Set([...this.duplicates])
      if (set.has(' ')) {
        set.delete(' ')
      }
      return set.size
    }
  },
  mounted () {
    console.clear()
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@200;800&display=swap');

.body {
  font-family: 'Barlow', sans-serif;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  display: grid;
  place-content: center;

  --soft-color: #5c5c5c;
  --bkg-color: #1a1a1c;
  --text-color: #95a9b4;
  --big-font-size: 4rem;

  background-color: var(--bkg-color);
  background-image: url('https://www.transparenttextures.com/patterns/binding-dark.png');
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: 100%;
  padding: 2em;
  overflow: hidden;
}

.output {
  width: 100%;
  /* 文本居中 */
  text-align: center;
  font-size: clamp(2rem, 6vw, var(--big-font-size));
  line-height: calc(var(--big-font-size) - 2);
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 5vh;
  color: var(--text-color);
}
.output span {
  opacity: 0.1;
}
.active span {
  animation: duplicates 0.5s linear forwards;
}
@keyframes duplicates {
  0% {
    opacity: 0.1;
  }
  10% {
    opacity: 0.5;
  }
  15% {
    opacity: 0.1;
  }
  25% {
    opacity: 0.7;
  }
  35% {
    opacity: 0.2;
  }
  45% {
    opacity: 0.7;
  }
  55% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

.count {
  margin-top: 1em;
  padding: 2em;
  text-align: center;
}
.count p {
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1rem;
  word-spacing: 0.2em;
}
.count button {
  margin-top: 1em;
  width: min-content;
  background: transparent;
  outline: none;
  border: none;
  color: var(--text-color);
  font-size: 0.9rem;
  line-height: 0.9rem;
  text-transform: uppercase;
  cursor: pointer;
}

.input {
  width: 100%;
  border: none;
  outline: none;
  padding: 0.5em;
  text-align: center;
  font-size: clamp(1.2rem, 3vw, 1.7rem);
  text-transform: uppercase;
  font-weight: 200;
  color: var(--soft-color);
  background: transparent;
}

.authMessage {
  animation: fadeIn;
  animation-duration: 2s;
}

#test {
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 0.8rem;
  opacity: 0.2;
  cursor: pointer;
  transition: opacity 0.3s;
}
#test:hover {
  opacity: 1;
}
</style>
