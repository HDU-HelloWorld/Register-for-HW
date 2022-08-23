<template>
  <div class="body">
    <div id="typedtext">
      <div class="textBox">
        <div class="outputText">this is test message</div>
      </div>
      <div class="inputText" @click="focusInput">
        [HelloWorld]:
        <div class="input" @click="focusInput">
          <el-input
            class="inputBox"
            ref="inputBox"
            v-model="inputString"
            @click="focusInput"
            @focus="caretShining"
            @blur="cancelShining"
            @keyup.enter.native="sendMessage"
            @keydown.left.prevent.native
            autofocus
          ></el-input
          ><span @click="focusInput"
            >{{ inputString }}
            <div class="caret" v-show="caret"></div
          ></span>
        </div>
      </div>
    </div>
    <!-- <class id="typedtext" v-for="message in indexMessage" :key="message">{{message}}</div> -->
  </div>
</template>

<script>
import moment from 'moment' // 时间插件
export default {
  name: 'LoadingPage',
  data () {
    return {
      timer: Object, // 定时器
      inputString: '',
      command: '',
      caret: true,
      isFocus: true,
      form: {
        name: '',
        gender: '',
        stuNum: '',
        phone: '',
        qqnumber: '',
        college: '',
        department: '',
        email: '',
        selfIntroduction: '',
        honor: ''
      },
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
        '正在尝试连接到Hello World......'
      ],
      systemMessage: [
        `System information as of ${moment().format('MMMM Do YYYY, h:mm:ss a')} CST`,
        'System load:  0.2                Processes:             167',
        'Usage of /:   15.6% of 59.00GB   Users logged in:       1',
        'Memory usage: 30%                IPv4 address for eth0: 10.0.4.4',
        'Swap usage:   0%',
        '* Super-optimized for small spaces - read how we shrank the memory',
        'footprint of MicroK8s to make it the smallest full K8s around.',
        '[    2.875438] systemd[1]: Reached target User and Group Name Lookups.',
        '[    2.877202] systemd[1]: Reached target Slices.',
        '[    2.878786] systemd[1]: Reached target Swap.',
        '[    2.880348] systemd[1]: Listening on Device-mapper event daemon FIFOs.',
        '[    2.882540] systemd[1]: Listening on LVM2 poll daemon socket.',
        '[    2.887387] systemd[1]: Listening on multipathd control socket.',
        '[    2.894775] systemd[1]: Listening on RPCbind Server Activation Socket.',
        '[    2.899053] systemd[1]: Listening on Syslog Socket.',
        '[    2.900665] systemd[1]: Listening on initctl Compatibility Named Pipe.',
        '[    2.902739] systemd[1]: Listening on Journal Audit Socket.',
        '[    2.904867] systemd[1]: Listening on Journal Socket (/dev/log).',
        '[    2.911771] systemd[1]: Listening on Journal Socket.',
        '[    2.913560] systemd[1]: Listening on Network Service Netlink Socket.',
        '[    2.915461] systemd[1]: Listening on udev Control Socket.',
        '[    2.917140] systemd[1]: Listening on udev Kernel Socket.',
        '[    2.924711] systemd[1]: Mounting Huge Pages File System...',
        '[    2.930802] systemd[1]: Mounting POSIX Message Queue File System...',
        '[    2.934690] systemd[1]: Mounting RPC Pipe File System...',
        '[    2.938318] systemd[1]: Mounting Kernel Debug File System...',
        '[    2.947184] systemd[1]: Mounting Kernel Trace File System...',
        '[    2.951939] systemd[1]: Starting Journal Service...',
        '[    2.960331] systemd[1]: Starting Set the console keyboard layout...',
        '[    2.978524] RPC: Registered named UNIX socket transport module.',
        '[    2.978525] RPC: Registered udp transport module.',
        '[    2.978526] RPC: Registered tcp transport module.',
        '[    2.978527] RPC: Registered tcp NFSv4.1 backchannel transport module.',
        '[    2.988978] systemd[1]: Starting Create list of static device nodes for the current kernel...',
        '[    2.999265] systemd[1]: Starting Monitoring of LVM2 mirrors, snapshots etc. using dmeventd or progress polling...',
        '[    3.020124] systemd[1]: Condition check resulted in Load Kernel Module drm being skipped.',
        '[    3.022987] systemd[1]: Condition check resulted in OpenVSwitch configuration for cleanup being skipped.',
        '[    3.034299] systemd[1]: Condition check resulted in Set Up Additional Binary Formats being skipped.',
        '[    3.039639] systemd[1]: Starting Load Kernel Modules...',
        '[    3.042915] systemd[1]: Starting Remount Root and Kernel File Systems...',
        '[    3.052517] systemd[1]: Starting udev Coldplug all Devices...',
        '[    3.058186] EXT4-fs (vda2): re-mounted. Opts: (null)',
        '[    3.070113] systemd[1]: Mounted Huge Pages File System.',
        '[    3.083705] systemd[1]: Started Journal Service.',
        '[    3.125786] systemd-journald[363]: Received client request to flush runtime journal.',
        '[    4.033504] alua: device handler registered',
        '[    4.035247] emc: device handler registered',
        '[    4.037912] rdac: device handler registered',
        '[    4.167429] audit: type=1400 audit(1655210273.676:2): apparmor="STATUS" operation="profile_load" profile="unconfined" name="lsb_release" pid=660 comm="apparmor_parser"',
        '[    4.174532] audit: type=1400 audit(1655210273.684:3): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/sbin/tcpdump" pid=659 comm="apparmor_parser"',
        '[    4.176394] audit: type=1400 audit(1655210273.684:4): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/lib/NetworkManager/nm-dhcp-client.action" pid=661 comm="apparmor_parser"',
        '[    4.176398] audit: type=1400 audit(1655210273.684:5): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/lib/NetworkManager/nm-dhcp-helper" pid=661 comm="apparmor_parser"',
        '[    4.176400] audit: type=1400 audit(1655210273.684:6): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/lib/connman/scripts/dhclient-script" pid=661 comm="apparmor_parser"',
        '[    4.176402] audit: type=1400 audit(1655210273.684:7): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/{,usr/}sbin/dhclient" pid=661 comm="apparmor_parser"',
        '[    4.182691] audit: type=1400 audit(1655210273.692:8): apparmor="STATUS" operation="profile_load" profile="unconfined" name="nvidia_modprobe" pid=662 comm="apparmor_parser"',
        '[    4.182696] audit: type=1400 audit(1655210273.692:9): apparmor="STATUS" operation="profile_load" profile="unconfined" name="nvidia_modprobe//kmod" pid=662 comm="apparmor_parser"',
        '[    4.183281] audit: type=1400 audit(1655210273.692:10): apparmor="STATUS" operation="profile_load" profile="unconfined" name="/usr/sbin/named" pid=663 comm="apparmor_parser"',
        '[    5.525957] ISO 9660 Extensions: Microsoft Joliet Level 3',
        '[    5.526765] ISO 9660 Extensions: RRIP_1991A',
        '[    5.923651] ISO 9660 Extensions: Microsoft Joliet Level 3',
        '[    5.924004] ISO 9660 Extensions: RRIP_1991A',
        '[    8.334780] Loading iSCSI transport class v2.0-870.',
        '[   11.204695] ISO 9660 Extensions: Microsoft Joliet Level 3',
        '[   11.205223] ISO 9660 Extensions: RRIP_1991A',
        '[   59.337071] bpfilter: Loaded bpfilter_umh pid 1361',
        '[   59.337342] Started bpfilter',
        '访问宣传网站<a href="http://helloworld-hdu.com/#/home">http://helloworld-hdu.com/#/home</a>'
      ]
    }
  },
  mounted () {
    this.dialog()
  },
  methods: {
    // 单句话的打字效果
    async typeText (text, speed) {
      return new Promise((resolve, reject) => {
        let textNode = document.createElement('div')
        let inputNode = document.querySelector('.inputText')
        // 添加class
        textNode.className = 'outputText'
        document.querySelector('.textBox').appendChild(textNode)
        let i = 0
        let timer = setInterval(() => {
          inputNode.scrollIntoView({ block: 'end' })
          if (i < text.length) {
            textNode.innerHTML += text[i]
            // 将 textNode 添加到 #typedtext 的末尾
            i++
          } else {
            clearInterval(timer)
            resolve()
          }
        }, speed)
      })
    },
    // 更快的打字效果
    async typeQuickText (texts, speed) {
      let textNode = document.createElement('div')
      let inputNode = document.querySelector('.inputText')
      // 添加class
      textNode.className = 'outputText'
      document.querySelector('.textBox').appendChild(textNode)
      // speed秒后插入文字
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          textNode.innerHTML = texts
          inputNode.scrollIntoView({ block: 'end' })
          resolve()
        }, speed)
      })
    },
    // 输出选项
    async typeOption (text, speed, index) {
      return new Promise((resolve, reject) => {
        let textNode = document.createElement('div')
        let inputNode = document.querySelector('.inputText')
        // 添加class
        textNode.classList.add('outputText', 'options', `option${index}`)
        // 设置options样式
        textNode.style.cursor = 'pointer'
        textNode.style.color = '#33f1ff'
        textNode.style.marginLeft = '40px'
        document.querySelector('.textBox').appendChild(textNode)
        let i = 0
        let timer = setInterval(() => {
          inputNode.scrollIntoView({ block: 'end' })
          if (i < text.length) {
            textNode.innerHTML += text[i]
            // 将 textNode 添加到 #typedtext 的末尾
            i++
          } else {
            clearInterval(timer)
            resolve()
          }
        }, speed)
      })
    },
    // 停顿
    async sleep (time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, time)
      })
    },
    // 打印一个对话数组中的每一句话
    async printMessage (message) {
      for (let i = 0; i < message.length; i++) {
        await this.typeText(message[i], i + 1)
      }
    },
    // 程序运行逻辑函数
    async dialog () {
      for (let text of this.systemMessage) {
        await this.typeQuickText(text, 10)
      }
      await this.printMessage(this.indexMessage, 10)
      await this.focusInput()
      let name = await this.question('请输入你的姓名：', 100)
      while (name === '') {
        await this.typeText('嘿，嘿，嘿！这不对吧，怎么会有人没有名字？', 100)
        name = await this.question('请输入你的姓名：', 100)
      }
      await this.typeText(`噢噢噢！我想起来了，对对，你就是${name}，我可不会忘了你——${name}`, 100)
      let choiceArr1 = [`哈哈，骗你的，我才不叫${name}`, '终于想起我来了吗？', '总感觉很可疑...']
      let choice1 = await this.choice(choiceArr1, 100)
      console.log(choice1)
      if (choice1 === '1') {
        await this.typeText('?你该不会是在耍我吧？o(一︿一+)o', 100)
      } else {
        await this.typeText('总之...总之...计算机的记忆力可是极好的，你可不能怀疑我！', 100)
      }
    },
    // 光标闪烁函数
    caretShining () {
      this.isFocus = true
      // 先清楚闪烁，防止多次闪烁
      this.cancelShining()
      // 每0.5s修改caret的值
      this.timer = setInterval(() => {
        this.caret = !this.caret
      }, 500)
    },
    cancelShining () {
      // 查找当前focus的元素
      let focusItem = document.activeElement
      // 清除setInterval函数
      clearInterval(this.timer)
      // console.log('触发blur', focusItem.tagName)
      if (focusItem.tagName !== 'INPUT') {
        this.isFocus = false
        this.caret = false
      }
    },
    // 聚焦input框
    focusInput () {
      this.$nextTick(() => {
        this.isFocus = true
        this.$refs.inputBox.focus()
        console.log('聚焦input框')
      })
    },
    async sendMessage () {
      // 发送消息
      await this.typeQuickText(this.inputString, 10)
      // 保存命令
      this.command = this.inputString
      // 清空input框
      this.inputString = ''
      // 发送消息后先清除光标闪烁，然后聚焦input框
      this.cancelShining()
      this.caretShining()
      this.focusInput()
    },
    async question (question, speed) {
      await this.typeText(question, speed)
      this.focusInput()
      // 等待用户输入
      return new Promise((resolve, reject) => {
        window.addEventListener('keyup', (e) => {
          // console.log(e.key, this.isFocus)
          // 这里之前那个判断是真tm傻逼
          if (e.key === 'Enter' && this.isFocus === true) {
            resolve(this.inputString)
          }
        })
      })
    },
    async choice (choice, speed) {
      // 遍历并输出choice数组
      for (let i = 0; i < choice.length; i++) {
        await this.typeOption(`选项${i + 1}：` + choice[i], speed, i + 1)
        await this.sleep(500)
      }
      await this.typeText('（使用鼠标点击选项进行选择）', speed)
      this.focusInput()
      return new Promise((resolve, reject) => {
        window.addEventListener('click', (e) => {
          let option = e.target.className.slice(-1)
          // console.log(option)
          // 正则匹配数字
          let reg = /\d/
          if (reg.test(option)) {
            resolve(option)
          }
        })
      })
    }
  },
  // 销毁
  beforeDestroy () {
    // 销毁所有异步函数
    clearInterval(this.timer)
  }
}
</script>

<style lang="less" scoped>
.body {
  color: #33ff66;
  background-color: black;
  letter-spacing: 3px;
  font-weight: bold;
  font-family: 'Barlow', sans-serif;
  font-size: 15px;
  line-height: 20px;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  --soft-color: #5c5c5c;
  --bkg-color: #1a1a1c;
  --text-color: #95a9b4;
  --big-font-size: 4rem;
  background-color: var(--bkg-color);
  background-image: url('../assets/background/binding-dark.png');
}

.inputText {
  display: flex;
  align-items: end;
  height: 20px;
  cursor: text;
  .input {
    height: 20px;
    display: flex;
    align-items: center;
    span {
      display: flex;
      white-space: nowrap;
    }
    .caret {
      width: 6px;
      height: 17px;
      background-color: #33ff66;
    }
  }
  .inputBox /deep/ .el-input__inner {
    position: absolute;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    width: 50px;
    height: 100%;
    border: 0;
    padding: 0px;
    top: 5px;
    letter-spacing: 3px;
    line-height: 1px;
    font-weight: bold;
    font-family: 'Barlow', sans-serif;
    font-size: 15px;
    color: #33ff66;
    caret-color: rgba(0, 0, 0, 0);
    &:focus {
      outline: 0;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0);
    }
  }
}

#typedtext {
  width: 50%;
  height: 90vh;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  .textBox {
    bottom: 0;
  }
}
</style>
