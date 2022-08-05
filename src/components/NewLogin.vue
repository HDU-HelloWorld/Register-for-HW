<template>
  <div class="login">
    <div class="wrapper">
      <div class="card">
        <div class="text-1">Welcome to</div>
        <div class="text-2">Hello World</div>
      </div>
      <div class="form">
        <h1 align="center" class="title">Hello World 22级招新信息收集表</h1>
        <el-form :model="form" :rules="rules" ref="form" label-width="80px" >
          <el-row>
            <el-col :span="8" :offset="3">
              <el-form-item label="姓名" prop="name" id="m">
                <el-input v-model="form.name" @change="change()"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="1">
              <el-form-item label="性别">
                <el-select v-model="form.gender" >
                  <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" :offset="3">
              <el-form-item label="学号" prop="stuNum">
                <el-input v-model="form.stuNum"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="1">
              <el-form-item label="所在学院" prop="college" >
                <el-input v-model="form.college"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" :offset="3">
              <el-form-item label="志愿部门">
                <el-select v-model="form.department">
                  <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="1">
              <el-form-item label="电话" prop="phone">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" :offset="3">
              <el-form-item label="qq号" prop="qqnumber">
                <el-input v-model="form.qqnumber"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="1">
              <el-form-item label="邮箱" prop="mail">
                <el-input v-model="form.mail"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="17" :offset="3">
              <el-form-item label="自我介绍" prop="selfintroduction">
                <el-input type='textarea' v-model="form.selfintroduction"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="17" :offset="3">
              <el-form-item label="获奖经历" prop="honor">
                <el-input type='textarea' v-model="form.honor"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row id="check">
              <el-form-item>
                <el-col :span="1" :offset="8">
                <el-button
                  type="primary"
                  @click="submitForm('form')"
                  >提交</el-button
                >
                </el-col>
                <el-col :span="4" :offset="3">
                <el-button type="secondary" @click="resetForm('form')"
                  >清空</el-button
                >
                </el-col>
              </el-form-item>
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewLogin',
  data () {
    return {
      form: {
        name: '',
        gender: '',
        stuNum: '',
        phone: '',
        qqnumber: '',
        college: '',
        department: '',
        mail: '',
        selfintroduction: '',
        honor: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 0, max: 15, message: '长度在 0 到 15 个字符', trigger: 'blur' }
        ],
        stuNum: [
          { required: true, message: '请输入学号', trigger: 'blur' },
          { pattern: /^[0-9]*$/, message: '学号应为数字', trigger: 'blur' },
          { min: 8, max: 8, message: '学号格式不正确', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入电话', trigger: 'blur' },
          { pattern: /^1[3-9][0-9]\d{8}$/, message: '请输入正确的电话号码', trigger: 'blur' },
          { min: 0, max: 15, message: '长度在 0 到 15 个字符', trigger: 'blur' }
        ],
        qqnumber: [
          { required: true, message: '请输入qq号', trigger: 'blur' },
          { pattern: /^[0-9]*$/, message: 'qq号应为数字', trigger: 'blur' },
          { min: 5, max: 10, message: 'qq号格式不正确', trigger: 'blur' }
        ],
        college: [
          { required: true, message: '请输入学院', trigger: 'blur' },
          { pattern: /^[\u0391-\uFFE5A-Za-z]+$/, message: '请输入学院', trigger: 'blur' },
          { min: 0, max: 15, message: '长度在 0 到 15 个字符', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      },
      options1: [{
        value: 'man',
        label: '男'
      }, {
        value: 'woman',
        label: '女'
      }],

      options2: [{
        value: '选项1',
        label: '人工智能部门'
      }, {
        value: '选项2',
        label: '行政部门'
      }, {
        value: '选项3',
        label: '前端部门'
      }, {
        value: '选项4',
        label: '后端部门'
      }]
    }
  },
  change () {
    this.$forceUpdate()
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          console.log(this.form)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
  .title{
    margin-top: 30px;
    margin-bottom: 40px;
    font-size:35px;
  }
  #check{
    margin-top: 20px;
  }
  .form{
    bottom: 20%;
    border-radius: 25px;
    position: fixed;
    width: 50%;
    background-color: rgba(239,239,239);
    margin-left: 100%;
    transition: all 1s;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
  .login{
    height: 100vh;
  }
  .wrapper{
    background-color: rgba(239,239,239);
    width: 100%;
    height: 100vh;
  }
  .wrapper:hover>.form{
    margin-left: 25%;
  }
  .card{
    position: relative;
    top: 20vh;
    left: 20vh;
    width: 90%;
    height: 60vh;
    background-color:aliceblue;
    text-align: center;
    font-size: 10rem;
    line-height: 16rem;
    letter-spacing: .1em;
    font-weight: lighter;
    color: #4ea1d9;
    background-image: linear-gradient(-135deg, #418ae0, #56a0d8, #dc8bc3, #56a0d8, #418ae0, #56a0d8, #dc8bc3, #56a0d8, #418ae0);
    -webkit-text-fill-color: rgba(0,0,0,0);
    background-clip: border-box;
    -webkit-background-clip: text;
    user-select: none;
  }
  .text-1{
    margin-right: 80vh;
  }
  .text-2{
    margin-left: 10vh;
  }
  .card::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    right: 0;
    bottom: 0;
    background-image: url('../assets/before.png');
}
</style>
