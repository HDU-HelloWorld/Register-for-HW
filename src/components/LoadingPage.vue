<template>
  <div class="body">
    <div id="typedtext">
      <div class="textBox">
        <div class="outputText">this is test message</div>
      </div>
      <div class="inputText">
        [HelloWorld]<el-input class="inputBox" v-model="inputString"></el-input>
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
      inputString: '',
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
    }
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
  .inputBox /deep/ .el-input__inner {
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    padding: 2px;
    height: 20px;
    letter-spacing: 3px;
    font-weight: bold;
    font-family: 'Barlow', sans-serif;
    font-size: 15px;
    color: #33ff66;
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
