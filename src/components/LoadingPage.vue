<template>
  <div class="body">
    <div id="typedtext">
      <div class="outputText">this is test message</div>
      <div v-for="text in indexMessage" class="outputText" :key="text"></div>
    </div>
    <!-- <class id="typedtext" v-for="message in indexMessage" :key="message">{{message}}</div> -->
  </div>
</template>

<script>
export default {
  name: 'LoadingPage',
  data () {
    return {
      indexMessage: [
        '正在启动系统...',
        '正在检查系统log...',
        'Success: 未发现错误',
        '正在进行自检...',
        'Success: 磁盘写入正常',
        'Success: 内存读取正常',
        'Success: 显卡正常',
        'Success: CPU运算速度...世界级',
        'Success: 网络连接正常',
        '正在尝试连接到Hello World'
      ]
    }
  },
  async mounted () {
    this.printMessage(this.indexMessage)
  },
  methods: {
    // 单句话的打字效果
    async typeText (text, index) {
      return new Promise((resolve, reject) => {
        let textNode = document.querySelectorAll('.outputText')[index]
        let i = 0
        let timer = setInterval(() => {
          if (i < text.length) {
            textNode.innerHTML += text[i]
            i++
          } else {
            clearInterval(timer)
            resolve()
          }
        }, 10)
      })
    },
    // 打印一个对话数组中的每一句话
    async printMessage (message) {
      for (let i = 0; i < message.length; i++) {
        await this.typeText(message[i], i + 1)
      }
    }
  }
}
</script>

<style scoped>
.body {
  color: #33ff66;
  background-color: black;
  letter-spacing: 3px;
  font-weight: bold;
  font-family: 'Barlow', sans-serif;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  --soft-color: #5c5c5c;
  --bkg-color: #1a1a1c;
  --text-color: #95a9b4;
  --big-font-size: 4rem;

  background-color: var(--bkg-color);
  background-image: url('https://www.transparenttextures.com/patterns/binding-dark.png');
}
</style>
