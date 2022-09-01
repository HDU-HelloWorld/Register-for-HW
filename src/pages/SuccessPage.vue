<template>
  <div class="success">
    <div class="textBox">
      <h1>恭喜你成功提交报名表！</h1>
      <h1>HW全体成员欢迎你的加入！</h1>
    </div>
    <div class="btnBox">
      <el-button @click="goQuery" type="primary">查询报名信息</el-button>
      <el-button @click="goHome">回到首页 ({{ countTime }})</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuccessPage',
  data () {
    return {
      countTime: 5
    }
  },
  mounted () {
    this.countDown()
  },
  methods: {
    countDown () {
      let timer = setInterval(() => {
        this.countTime--
        if (this.countTime === 0) {
          clearInterval(timer)
          this.$router.push('/home')
        }
      }, 1000)
    },
    goQuery () {
      this.$router.push('/confirm')
    },
    goHome () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less"  scoped>
.success {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .textBox {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
