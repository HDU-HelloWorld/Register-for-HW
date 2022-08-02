<template>
  <div class="login">
    <div class="wrapper">
      <div class="form">
        <h1 align="center" class="title">Hello World 22级招新信息收集表</h1>
        <el-form :model="form" :rules="rules" ref="form" label-width="80px">
          <el-row>
            <el-col :span="6" :offset="5">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="1">
              <el-form-item label="性别">
                <el-select v-model="form.gender">
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
            <el-col :span="6" :offset="5">
              <el-form-item label="学号" prop="stuNum">
                <el-input v-model="form.stuNum"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="1">
              <el-form-item label="所在学院" prop="college">
                <el-input v-model="form.college"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6" :offset="5">
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
            <el-col :span="6" :offset="1">
              <el-form-item label="电话" prop="phone">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6" :offset="5">
              <el-form-item label="qq号" prop="qqnumber">
                <el-input v-model="form.qqnumber"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-form-item>
              <el-col :span="1" :offset="9">
                <el-button type="primary" @click="submitForm('form')"
                  >提交</el-button
                >
              </el-col>
              <el-col :span="4" :offset="1">
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
        department: ''
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
          {
            pattern: /^1[3-9][0-9]\d{8}$/,
            message: '请输入正确的电话号码',
            trigger: 'blur'
          },
          { min: 0, max: 15, message: '长度在 0 到 15 个字符', trigger: 'blur' }
        ],
        qqnumber: [
          { required: true, message: '请输入qq号', trigger: 'blur' },
          { pattern: /^[0-9]*$/, message: 'qq号应为数字', trigger: 'blur' },
          { min: 5, max: 10, message: 'qq号格式不正确', trigger: 'blur' }
        ],
        college: [
          { required: true, message: '请输入学院', trigger: 'blur' },
          {
            pattern: /^[\u0391-\uFFE5A-Za-z]+$/,
            message: '请输入学院',
            trigger: 'blur'
          },
          { min: 0, max: 15, message: '长度在 0 到 15 个字符', trigger: 'blur' }
        ]
      },
      options1: [
        {
          value: 'man',
          label: '男'
        },
        {
          value: 'woman',
          label: '女'
        }
      ],

      options2: [
        {
          value: '选项1',
          label: '人工智能部门'
        },
        {
          value: '选项2',
          label: '行政部门'
        },
        {
          value: '选项3',
          label: '前端部门'
        },
        {
          value: '选项4',
          label: '后端部门'
        }
      ]
    }
  },
  change () {
    this.$forceUpdate() // 强制刷新
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
  .login{
    position: relative;
    top: 120px;
    left: 20%;
    width: 60%;
    height: 100%;
  }
  .wrapper{
    border: #fff 10px solid;
    background-color: rgb(120,140,200);
    justify-content: center;
    overflow: hidden;
    border-radius: 20px;
  }
  /* .form{
  } */
</style>
