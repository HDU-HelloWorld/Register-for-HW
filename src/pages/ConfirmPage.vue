<template>
  <!-- 报名信息确认界面 -->
  <div class="confirm">请输入学号与姓名进行查询
    <div class="inputBox">
      <el-input v-model="form.stuNum" placeholder="请输入学号"></el-input>
      <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
    </div>
    <el-button class="query" @click="queryUser">查询</el-button>
    <div class="showInfo">{{userInfo}}</div>若有信息错误，请联系管理员（QQ群:436862917)
  </div>
</template>

<script>
import server from '@/assets/data/server.json'
export default {
  name: 'ConfirmPage',
  data () {
    return {
      form: {
        stuNum: '',
        name: ''
      },
      userInfo: {}
    }
  },
  methods: {
    queryUser () {
      let url = server.baseUrl + '/api/query'
      // url = 'http://localhost:3000/api/query'
      // 判断输入是否为空
      if (this.form.stuNum === '' || this.form.name === '') {
        this.$message({
          message: '请输入学号与姓名',
          type: 'warning'
        })
      } else {
        console.log(this.form)
        this.$axios.get(url, {params: this.form}).then(res => {
          console.log(res)
          if (res.status === 200) {
            this.userInfo = res.data
          } else {
            this.$message({
              message: '查询失败，请确认您填写的信息是否正确',
              type: 'error'
            })
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
