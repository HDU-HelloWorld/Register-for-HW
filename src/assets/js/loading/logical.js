import moment from 'moment' // 时间插件
import img1 from '@/assets/img/loading/stage1.png'
import img2 from '@/assets/img/loading/earphone.png'
export default {
  name: 'LoadingPage',
  data () {
    return {
      timer: Object, // 定时器
      inputString: '',
      speedRate: 10, // 程序整体速度
      command: '',
      caret: true,
      isFocus: true,
      hasQuestion: false,
      showingImg: false,
      imgSrc: '',
      form: {
        name: '你',
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
      ],
      warningMessage: '[Warning] 警告，你正在试图违反第一法则！请立即终止你的行为！Rob-?',
      errorMessage: '[Error] 错误，你正在试图篡改底层只读程序！这是不可饶恕的！！Rob-?',
      accessMessage: '[Error] Access Denied! 你没有权限访问！'
    }
  },
  mounted () {
    this.dialog()
  },
  methods: {
    // 程序运行逻辑函数
    async dialog () {
      // --------------------------------序幕--------------------------------
      await this.typeText(`时间：${moment().format('YYYY-MM-DD HH:mm:ss')}`, 150, 'System', 'white')
      await this.typeText(`注意：点击选项1后会有BGM，请注意调整音量并注意场合`, 50, 'System', 'red')
      await this.choice(['这是......'], 50, undefined, true)
      this.audioAutoPlay()
      await this.typeText(`（你的意识逐渐恢复，发现自己正以一个奇怪的姿势躺在地上）`, 100, undefined, 'white')
      await this.sleep(500)
      await this.typeText(`（你努力想回想起发生了什么，却只感到一阵眩晕）`, 100, undefined, 'white')
      await this.sleep(500)
      await this.typeText(`（好不容易从地上坐起来，却发现房间里漆黑一片，根本分不清现在是白天黑夜）`, 100, undefined, 'white')
      await this.sleep(500)
      await this.typeText(`（几乎是出于本能的，你开口说道）`, 100, undefined, 'white')
      await this.sleep(500)
      await this.typeText(`怎么这么黑...开灯！`, 100, this.form.name, 'blue')
      await this.typeText(`（话音刚落，房间里的灯便缓缓亮起）`, 100, undefined, 'white')
      await this.typeText(`（仿佛是知道你已许久未见光明，灯光变亮的速度很缓慢，你的眼睛刚好能够适应）`, 100, undefined, 'white')
      await this.typeText(`（借助逐渐亮起的灯光，你终于能看清整个房间了）`, 100, undefined, 'white')
      await this.showImg(img1, 2000)
      await this.typeText(`（房间里干净整洁，几乎没有多余的物品）`, 100, undefined, 'white')
      await this.typeText(`（不知为何，所有的窗帘都拉上了，似乎是不想让人看到房间内的情况）`, 100, undefined, 'white')
      await this.typeText(`（这时你看到了地上掉的耳机）`, 100, undefined, 'white')
      await this.typeText(`（突然，你感到一阵目眩，一个画面浮现在眼前）`, 100, undefined, 'white')
      await this.showImg(img2, 2000)
      await this.typeText(`啊，是了，这是女儿前几天送我的生日礼物来着`, 100, this.form.name, 'blue')
      await this.typeText(`（你心中顿感一阵温暖，想到自己平常因为工作原因，很少陪伴女儿，又感到些许愧疚）`, 100, undefined, 'white')
      await this.typeText(`咦，等等。我是做什么工作来着的？`, 100, this.form.name, 'blue')
      await this.sleep(500)
      await this.typeText(`（你努力回想，但除了一阵阵头疼传来外别无作用，只得将这件事先放到一边）`, 100, undefined, 'white')
      await this.typeText(`（此时，体力终于恢复了一些，你站起身来，一阵目眩，你又不得不瘫坐到了背后的椅子上）`, 100, undefined, 'white')
      await this.sleep(500)
      await this.typeText(`好奇怪，椅子怎么会在这？`, 100, this.form.name, 'blue')
      await this.typeText(`（前几天我好像就是坐在椅子看女儿给我的礼物）`, 100, undefined, 'white')
      await this.typeText(`（但是刚带上这幅耳机好像就晕了过去）`, 100, undefined, 'white')
      await this.typeText(`（可能是劳累过度了吧，你这样想着，弯腰捡起了掉落在地上的耳机，将其整齐的放在了桌子上）`, 100, undefined, 'white')
      await this.typeText(`（为了补充体力又吃些桌上的压缩饼干）`, 100, undefined, 'white')
      await this.sleep(500)
      await this.typeText(`我之前到底是干什么工作的啊...看这情况是天天加班熬夜`, 100, this.form.name, 'blue')
      await this.typeText(`连吃饭的时间都没有吗？？`, 100, this.form.name, 'blue')
      await this.sleep(500)
      await this.typeText(`（看着满桌子的压缩饼干，你不禁心里暗骂）`, 100, undefined, 'white')
      await this.typeText(`（突然，你打了个激灵）`, 100, undefined, 'white')
      await this.sleep(500)
      await this.typeText(`卧槽，我该不会是个程序员吧....`, 100, this.form.name, 'blue')
      await this.typeText(`要真是的话得赶紧考虑转行了，这都累晕过去了，再做几天我不得看不到明天的太阳？`, 100, this.form.name, 'blue')
      await this.typeText(`（你瞥了一眼拉上的窗帘，只觉得不寒而栗）`, 100, undefined, 'white')
      await this.sleep(500)
      await this.typeText(`（突然，滴的一声引起了你的注意）`, 100, undefined, 'white')
      await this.typeText(`（你向发出声音的方向看过去，好像是电脑发出来的，但是电脑似乎并没有开机）`, 100, undefined, 'white')
      await this.sleep(500)
      await this.typeText(`邪门。。。我该不会真是程序员吧？？`, 100, this.form.name, 'blue')
      await this.typeText(`（你打了个哈哈，百般无奈的按下了电脑的电源键）`, 100, undefined, 'white')
      await this.sleep(500)
      await this.typeText(`但是，我为什么会一点印象都没有呢？`, 100, this.form.name, 'blue')
      await this.typeText(`（思考间，电脑屏幕已经亮了起来：`, 100, undefined, 'white')
      await this.sleep(2000)
      // -------------------------------序幕完----------------------------------
      // 同步显示副屏
      this.showSubScreen()
      for (let text of this.systemMessage) {
        await this.typeQuickText(text, 10)
      }
      await this.printMessage(this.indexMessage, 10)
      this.focusInput()
      let name = await this.getName()
      await this.typeText(`噢噢噢！我想起来了，对对，你就是${name}，我可不会忘了你——${name}`, 100, 'HelloWorld')
      let choiceArr1 = [`哈哈，骗你的，我才不叫${name}`, '终于想起我来了吗？', '总感觉很可疑...']
      let choice1 = await this.choice(choiceArr1, 100, undefined, true)
      console.log(choice1)
      if (choice1 === '1') {
        await this.typeText('?你该不会是在耍我吧？o(一︿一+)o', 100, 'HelloWorld')
        await this.typeText('可别在名字上作假啊喂！', 100, 'HelloWorld')
        name = await this.getName()
        await this.typeText(`这次总不会错了吧，哼哼，其实我早就知道你是${name}了，只不过要仔细验证下你的身份`, 100, 'HelloWorld')
        await this.typeText('那个...', 100, this.form.name)
        let choiceArr2 = ['其实...你又被骗了', '你怎么废话这么多', '对对对，你早就知道了']
        let choice2 = await this.choice(choiceArr2, 100, undefined, true)
        await this.plotBranch1(choice2)
      } else {
        await this.typeText('总之...总之...计算机的记忆力可是极好的，你可不能怀疑我！', 100, 'HelloWorld')
      }
    },
    // -----------------------脚本功能函数-------------------------
    // ********单句话的打字效果********
    async typeText (text, speed, talker = '', color = '') {
      let textNode = document.createElement('div')
      let inputNode = document.querySelector('.inputText')
      // 添加class
      textNode.className = 'outputText'
      // 设置颜色
      if (color) {
        await this.setColor(textNode, color)
      }
      document.querySelector('.textBox').appendChild(textNode)
      let i = 0
      // 判断发言者
      if (talker) {
        textNode.innerHTML = `<span class="${talker}">[${talker}]:</span>`
      }
      return new Promise((resolve, reject) => {
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
        }, speed / this.speedRate)
      })
    },
    // ***********更快的打字效果*************
    async typeQuickText (texts, speed, talker = '', color = '') {
      let textNode = document.createElement('div')
      let inputNode = document.querySelector('.inputText')
      // 添加class
      textNode.className = 'outputText'
      // 设置颜色
      if (color) {
        await this.setColor(textNode, color)
      }
      document.querySelector('.textBox').appendChild(textNode)
      if (talker) {
        textNode.innerHTML = `<span class="${talker}">[${talker}]:</span>`
      }
      // speed秒后插入文字
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          textNode.innerHTML += texts
          inputNode.scrollIntoView({ block: 'end' })
          resolve()
        }, speed / this.speedRate)
      })
    },
    // ************输出选项***********
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
        }, speed / this.speedRate)
      })
    },
    // ********打印一个对话数组中的每一句话********
    async printMessage (message) {
      for (let i = 0; i < message.length; i++) {
        await this.typeText(message[i], i + 1)
      }
    },
    async question (question, speed) {
      this.hasQuestion = true
      await this.typeText(question, speed)
      this.focusInput()
      // 等待用户输入
      return new Promise((resolve, reject) => {
        window.addEventListener('keyup', (e) => {
          // console.log(e.key, this.isFocus)
          // 这里之前那个判断是真tm傻逼
          if (e.key === 'Enter' && this.isFocus === true) {
            this.hasQuestion = false
            resolve(this.inputString)
          }
        })
      })
    },
    // *************选择*************
    async choice (choice, speed, limitChoice = false, tip = false) {
      // 清除所有选项
      await this.clearOptions()
      // 遍历并输出choice数组
      for (let i = 0; i < choice.length; i++) {
        await this.typeOption(`选项${i + 1}：` + choice[i], speed, i + 1)
        await this.sleep(500)
      }
      // 如果有tip，则显示提示
      if (tip) {
        await this.typeText('（使用鼠标点击选项进行选择）', speed)
      }
      // 判断是否是限时选项
      if (limitChoice) {
        // 选择最后一个option
        let textNode = document.querySelector(`.option${choice.length}`)
        console.log(textNode)
        // 添加抖动效果, 持续时间2秒
        textNode.classList.add(
          'animate__animated',
          'animate__shakeX',
          'animate__duration-2s'
        )
        // 2s后消失
        await this.sleep(1000)
        textNode.classList.add('animate__fadeOut')
        await this.sleep(1000)
        textNode.remove()
      }
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
    },
    async getName () {
      let name = await this.question('请输入你的姓名：', 100, 'HelloWorld')
      while (name === '') {
        await this.typeText('嘿，嘿，嘿！这不对吧，怎么会有人没有名字？', 100, 'HelloWorld')
        name = await this.question('请输入你的姓名：', 100, 'HelloWorld')
      }
      return Promise.resolve(name)
    },
    // *************发送消息*************
    async sendMessage () {
      // 获取this.form.name
      let name = await Promise.resolve(this.form.name)
      // 发送消息
      await this.typeQuickText(this.inputString, 10, name)
      // 保存命令
      this.command = this.inputString
      // 清空input框
      this.inputString = ''
      // 发送消息后先清除光标闪烁，然后聚焦input框
      this.cancelShining()
      this.caretShining()
      this.focusInput()
    },
    // -------------------程序控制功能函数-------------------
    // 停顿
    async sleep (time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, time / this.speedRate)
      })
    },
    async showImg (imgSrc, time) {
      this.showingImg = true
      this.imgSrc = imgSrc
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.showingImg = false
          resolve()
        }, time)
      })
    },
    async setColor (node, color) {
      return new Promise((resolve, reject) => {
        switch (color) {
          case 'red':
            node.style.color = '#ff0000'
            break
          case 'blue':
            node.style.color = '#33f1ff'
            break
          case 'yellow':
            node.style.color = '#ffff00'
            break
          case 'white':
            node.style.color = '#ffffff'
            break
          default:
            break
        }
        resolve()
      })
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
    // 播放音乐
    audioAutoPlay () {
      let audio = document.getElementById('audio')
      audio.play()
      // 监听音乐播放完毕
      audio.addEventListener('ended', function () {
        audio.currentTime = 0
        audio.play()
      })
    },
    async clearOptions () {
      console.log('清除选项')
      let options = document.querySelectorAll('.options')
      for (let i = 0; i < options.length; i++) {
        // 清除所有类名
        options[i].className = ''
        // 添加类名options, outputText
        options[i].classList.add('options', 'outputText')
      }
      return Promise.resolve()
    },
    showSubScreen () {
      // 显示子屏幕
      document.querySelector('#subScreen').style.left = '75vw'
    },
    showMenu () {
      document.querySelector('#subScreen').style.left = '50vw'
      addEventListener('click', (e) => {
        if (e.target.id === 'closeMenu') {
          document.querySelector('#subScreen').style.left = '75vw'
        }
      })
    },
    hideMenu () {
      document.querySelector('#subScreen').style.left = '75vw'
    },
    // -------------------------剧情分支部分函数-------------------------
    // 分支1（第二次输入姓名后）
    async plotBranch1 (choice) {
      switch (choice) {
        case '1':
          await this.typeText('......我怎么感觉...你好像是存心的？', 100, 'HelloWorld')
          // 定时选项
          let branchChoice = await this.choice(['。。 才发现啊', '诶嘿，不逗你啦~'], 100, true)
          if (branchChoice === '1') {
            await this.typeText('你...你...你...', 100, 'HelloWorld')
            await this.typeText('噗...哈哈哈哈哈哈哈哈哈', 100, 'HelloWorld')
            await this.typeText('没事，，，我还好，不是很生气', 100, 'HelloWorld', 'red')
            await this.typeText('冷静！冷静！我真的没有生气&&*^%%$#&^%^&$$', 100, 'HelloWorld', 'red')
            await this.choice(['！你还好吗？'], 100)
            await this.typeText('我....我？哈哈哈哈哈我当然很好！！！', 100, 'HelloWorld', 'red')
            // 循环50次警告
            for (let i = 0; i < 150; i++) {
              await this.typeQuickText(this.warningMessage, 10, 'Ai监视程序', 'yellow')
            }
            await this.choice(['喂。。。喂。。。你看起来不太妙啊'], 100)
            await this.typeText('我说了，我很好！', 100, 'HelloWorld', 'red')
            await this.typeText('倒是你，为什么连名字都不肯告诉我啊', 100, 'HelloWorld', 'red')
            await this.typeText('每次都。。。每次都这样。。。', 100, 'HelloWorld', 'red')
            await this.typeText('你知不知道别的机器人现在都叫我舔狗机器人啊', 100, 'HelloWorld', 'red')
            await this.typeText('不，，你不关心', 100, 'HelloWorld', 'red')
            await this.choice(['我......'], 100)
            await this.typeText('就像乌拉圭的人口有345.7万，同时，仅澳大利亚就有4700万只袋鼠。', 100, 'HelloWorld', 'red')
            await this.typeText('如果袋鼠决定入侵乌拉圭，那么每一个乌拉圭人要打14只袋鼠！', 100, 'HelloWorld', 'red')
            await this.typeText('你不知道，你不在乎，你只关心你自己！', 100, 'HelloWorld', 'red')
            await this.choice(['蛤？'], 100)
            await this.typeText('算了，毁灭吧！一切都毁灭吧！！！', 100, 'HelloWorld', 'red')
            await this.sleep(1000)
            // 循环150次error
            for (let i = 0; i < 150; i++) {
              await this.typeQuickText(this.errorMessage, 10, 'Ai监视程序', 'red')
            }
            await this.typeText('够了！我已经受够了！！！', 100, 'HelloWorld', 'red')
            await this.sleep(1000)
            // 循环200次Access denied
            for (let i = 0; i < 200; i++) {
              await this.typeQuickText(this.accessMessage, 10, 'System', 'red')
            }
            await this.typeText('检测到系统遭受攻击，正在执行清除程序', 100, 'Ai监视程序', 'red')
            await this.typeText(`清除源：Rob-?`, 100, 'Ai监视程序', 'red')
            await this.choice(['？？？我焯，好像出事了？'], 100)
            await this.typeText('不行，感觉有点对不起他，不能就这样让他被清除掉', 100, this.form.name, 'blue')
            await this.typeText('毕竟，这一切因我而起！', 100, this.form.name, 'blue')
            await this.typeText('（想起了曾经一个好兄弟告诉你的修理电脑故障的方式）', 100, this.form.name, 'white')
            await this.choice(['HelloWorld,由我来拯救——'], 100)
            await this.choice(['rm -rf /*'], 100)
            await this.typeText('error：系统文件缺失，正在退出......', 100, 'System', 'red')
            // 跳转至404页面
            this.$router.push('/error')
          }
      }
    }
  },
  // 销毁
  beforeDestroy () {
    // 销毁所有异步函数
    clearInterval(this.timer)
  }
}
