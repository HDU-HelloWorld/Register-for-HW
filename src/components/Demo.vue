<template>
  <div class="demo-body">
    <!-- element输入框 -->
    输入数据
    <el-input class="input" v-model="message"></el-input>
    <el-button type="primary" @click="handleClick" round>Confirm Message</el-button>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    handleClick () {
      this.$message({
        message: 'Hello Vue.js!',
        type: 'success'
      })
      // 向服务器post发送message
      this.$http.post('/api/message', { message: this.message }).then(response => {
        console.log(response.data)
      })
    }
  }
}
</script>

<style scoped>
.demo-body {
  height: 500px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input {
  width: 200px;
  margin: 50px;
}
</style>
