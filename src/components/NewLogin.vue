<template>
  <div class="login">
    <div class="wrapper">
      <div class="outcard">
        <div class="incard">
          <div class="row" :style="class2">
            <div class="punc">『</div>
            <div class="text1">Welcome to</div>
          </div>
          <div class="row" :style="class3">
            <div class="text2">HelloWorld</div>
            <div class="punc">』</div>
          </div>
        </div>
      </div>
      <div class="form" :style="class1">
        <h1 align="center" class="title">Hello World 22级招新信息收集表</h1>
        <el-form :model="form" :rules="rules" ref="form" label-width="80px">
          <el-row>
            <el-col :span="8" :offset="3">
              <el-form-item label="姓名" prop="name" id="m">
                <el-input
                  v-model="form.name"
                  class="input"
                  required=""
                ></el-input>
                <div class="underline"></div>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="1">
              <el-form-item label="性别" class="input">
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
            <el-col :span="8" :offset="3">
              <el-form-item label="学号" prop="stuNum">
                <el-input v-model="form.stuNum" class="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="1">
              <el-form-item label="所在学院" prop="college">
                <el-input v-model="form.college" class="input"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" :offset="3">
              <el-form-item label="志愿部门">
                <el-select v-model="form.department" class="input">
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
                <el-input v-model="form.phone" class="input"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" :offset="3">
              <el-form-item label="qq号" prop="qqnumber">
                <el-input v-model="form.qqnumber" class="input"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" :offset="1">
              <el-form-item label="邮箱" prop="mail">
                <el-input v-model="form.mail" class="input"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="17" :offset="3">
              <el-form-item label="自我介绍" prop="selfintroduction">
                <el-input
                  type="textarea"
                  v-model="form.selfintroduction"
                  class="input"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="17" :offset="3">
              <el-form-item label="获奖经历" prop="honor">
                <el-input
                  type="textarea"
                  v-model="form.honor"
                  class="input"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row id="check">
            <el-form-item>
              <el-col :span="1" :offset="6">
                <el-button type="primary" @click="submitForm('form')" class="button1"
                  >提交</el-button
                >
              </el-col>
              <el-col :span="4" :offset="3">
                <el-button type="secondary" @click="resetForm('form')" class="button2"
                  >清空</el-button
                >
              </el-col>
              <el-col :span="4" :offset="0">
                <el-button type="secondary" @click="missForm()" class="button2"
                  >返回</el-button>
              </el-col>
            </el-form-item>
          </el-row>
        </el-form>
      </div>
      <div class="button" @click="showForm" v-show="showButton">
        <div class="text-3">
          Are You Ready?
          <div class="showtext-3">Npm Run Dev!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewLogin',
  data () {
    return {
      showButton: true,
      class1: {
        marginTop: '100%'
      },
      class2: {
        marginRight: '0%'
      },
      class3: {
        marginLeft: '0%'
      },
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
    },
    showForm () {
      this.class1.marginTop = '3%'
      this.class2.marginRight = '200%'
      this.class3.marginLeft = '200%'
      this.showButton = false
    },
    missForm () {
      this.class1.marginTop = '100%'
      this.class2.marginRight = '0%'
      this.class3.marginLeft = '0%'
      this.showButton = true
    }
  }
}
</script>

<style scoped lang="less">
@keyframes mymove {
  from {
    background-position: 120% 120%;
  }
  to {
    background-position: 0% 0%;
  }
}
.title {
  color: white;
  margin-top: 30px;
  margin-bottom: 40px;
  font: 500 15px;
}
#check {
  margin-top: 20px;
}
.form {
  background-color: rgba(0, 0, 0, .2);
  bottom: 14rem;
  top: 80px;
  position: absolute;
  height: 70%;
  width: 60rem;
  left: 31rem;
  border-radius: 10px;
  transition: all 1s;
  z-index: 2;
}
.login {
  height: 100vh;
}
.wrapper {
  width: 100%;
  height: 100vh;
}
.incard {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  top: 20vh;
  width: 100%;
  height: 60vh;
  // background-color: aliceblue;
  text-align: center;
  font-size: 8rem;
  letter-spacing: 0.1em;
  font-weight: lighter;
  color: #4ea1d9;
  background-image: linear-gradient(
    -135deg,
    #418ae0,
    #56a0d8,
    #dc8bc3,
    #56a0d8,
    #418ae0,
    #56a0d8,
    #dc8bc3,
    #56a0d8,
    #418ae0
  );
  -webkit-text-fill-color: rgba(0, 0, 0, 0);
  background-clip: border-box;
  -webkit-background-clip: text;
  user-select: none;
  animation: mymove 3s infinite linear;
  background-size: 200% 100%;
}
.punc {
  font-size: 5rem;
  justify-content: start;
  align-self: flex-start;
  margin: 0 30px;
  &:nth-child(2) {
    align-self: flex-end;
  }
}
.row {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 80%;
  transition: all 1s;
}
.row:nth-child(2) {
  margin-top: 20px;
  justify-content: end;
}
.text1 {
  width: 100vh;
  text-align: left;
}
.text2 {
  width: 100vh;
  text-align: right;
}
.button {
  color: rgb(103, 107, 115);
  width: 15rem;
  height: 2rem;
  left: 55rem;
  text-align: center;
  position: absolute;
  top: 80vh;
  font-size: 1.6rem;
  line-height: 1.1em;
  font-family: 'Brandon Text', serif;
  user-select: none;
  overflow: hidden;
  letter-spacing: 0.1em;
  z-index: 1;
}
.text-3 {
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s;
}
.text-3:hover {
  background-image: linear-gradient(
    -135deg,
    #418ae0,
    #56a0d8,
    #56a0d8,
    #418ae0,
    #56a0d8,
    #56a0d8,
    #418ae0
  );
  padding-top: 2.2rem;
  background-position: left bottom;
}
.text-3:hover .showtext-3 {
  background-image: linear-gradient(
    -135deg,
    #418ae0,
    #56a0d8,
    #56a0d8,
    #418ae0,
    #56a0d8,
    #56a0d8,
    #418ae0
  );
  margin-top: -4rem;
  background-position: left bottom;
  color: white;
}
//此处设置input框内部样式
/deep/.el-input__inner {
  //背景颜色以及透明度设置
  background-color: rgba(255, 255, 255, 0);
  border: none;
  //下划线颜色
  border-bottom: 2px solid rgba(255, 255, 255, .2);
  font-size: 15px;
  //设置字体颜色
  color: #fff;
  border-radius: 0;
  user-select: none;
}
/deep/ .el-form-item__label{
  color: white;
  user-select: none;
}
//表单填写错误时的高亮颜色
/deep/ .el-form-item.is-error {
  .el-input__inner {
    user-select: none;
    border-color: rgba(255, 255, 255);
  }
  .el-form-item__error {
    user-select: none;
    color: rgba(255, 255, 255);
  }
  .el-form-button__error {
    user-select: none;
    border-color: rgba(255, 255, 255);
  }
  // .el-form-select__error {
  //   border-color: rgba(255, 255, 255);
  // }
}
/deep/.el-input__inner:focus {
  // el-input输入时设置边框颜色
  // border: #11be59 1px solid;
  border-color: rgba(255, 255, 255,.5);
}
/deep/ .el-select .el-input.is-focus .el-input__inner{
    border-color: rgba(255, 255, 255,.5);
  }
//修改类型为textarea的input框样式
/deep/.el-textarea__inner {
  background-color: rgba(255, 255, 255, .1);
  border: 0;
  color: white;
  /* 这个是去掉自我介绍和获奖经历下面拉伸的那个标志 */
  resize: none;
  user-select: none;
}
.button1 {
  color: #fff;
  text-align: center;
  user-select: none;
  letter-spacing: 0.1em;
  border-color:rgba(64,158,255, 0);
  background: rgba(64,158,255, .6);
}
.button2 {
  color: rgba(64,158,255);
  text-align: center;
  user-select: none;
  letter-spacing: 0.1em;
  border-color:rgba(255,255,255, .6);
}
</style>
