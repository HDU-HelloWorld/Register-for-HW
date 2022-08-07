<template>
  <div class="login">
    <div class="wrapper">
      <div class="outcard">
        <div class="incard">
          <div class="text-1">Welcome to</div>
          <div class="text-2">Hello World</div>
        </div>
      </div>
      <div class="form" :style= "obj">
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
                <el-col :span="1" :offset="6">
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
                <el-col :span="4" :offset="0">
                <el-button type="secondary" @click="missForm()"
                  >返回</el-button
                >
                </el-col>
              </el-form-item>
          </el-row>
        </el-form>
      </div>
      <div class="button" @click="showForm">
        <div class="text-3">Are You Ready?
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
      obj: {
        marginLeft: '100%'
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
      this.obj.marginLeft = '8%'
    },
    missForm () {
      this.obj.marginLeft = '100%'
    }
  },
  mounted () {
    // fit () {
    //   var devicewidth = document.documentElement.clientWidth// 获取当前分辨率下的可是区域宽度
    //   var scale = devicewidth / 1920 // 分母——设计稿的尺寸
    //   document.body.style.zoom = scale// 放大缩小相应倍数
    // }
  }
}
</script>

<style scoped>
@keyframes mymove
{
  from {background-position:120% 120%;}
  to {background-position:0% 0%;}
}
.title{
    margin-top: 30px;
    margin-bottom: 40px;
    font-size:35px;
  }
#check{
    margin-top: 20px;
}
.form{
    bottom: 14rem;
    top: 80px;
    border-radius: 25px;
    position: absolute;
    height: 85%;
    width: 60rem;
    left: 17rem;
    background-color: rgba(239,239,239);
    transition: all 1s;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    z-index: 2;
    overflow: scroll;
}
.login{
    height: 100vh;
}
.wrapper{
    background-color: rgba(239,239,239);
    width: 100%;
    height: 100vh;
}
.incard{
  position: relative;
  display: block;
  top: 20vh;
  margin-left: 30vh;
  width: 120vh;
  height: 60vh;
  background-color:aliceblue;
  text-align: center;
  font-size: 8rem;
  line-height: 12rem;
  letter-spacing: .1em;
  font-weight: lighter;
  color: #4ea1d9;
  background-image: linear-gradient(-135deg, #418ae0, #56a0d8, #dc8bc3, #56a0d8, #418ae0, #56a0d8, #dc8bc3, #56a0d8, #418ae0);
  -webkit-text-fill-color: rgba(0,0,0,0);
  background-clip: border-box;
  -webkit-background-clip: text;
  user-select: none;
  animation: mymove 3s infinite linear;
  background-size: 200% 100%;
}
.outcard{
  position: relative;
}
.text-1{
  text-align: left;
  margin-left: 1.5rem;
}
.text-2{
  text-align: right;
}
.outcard::before{
    position: absolute;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    left: 19.5rem;
    top: 15rem;
    content: url('../assets/before.png');
    transform:scale(1.5,1.5);
}
.outcard::after{
    position: absolute;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    left: 149vh;
    bottom: 3rem;
    content: url('../assets/after.png');
    transform:scale(1.5,1.5);
}
.button{
  color: rgb(103,107,115);
  width: 15rem;
  height: 2rem;
  left: 51rem;
  text-align: center;
  position: relative;
  top: 1rem;
  font-size: 1.6rem;
  line-height: 1.1em;
  font-family: "Brandon Text",serif;
  user-select: none;
  overflow: hidden;
  letter-spacing: .1em;
  z-index: 1;
}
.text-3{
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: all .5s;
}
.text-3:hover{
  background-image: linear-gradient(-135deg, #418ae0, #56a0d8,  #56a0d8, #418ae0, #56a0d8,  #56a0d8, #418ae0);
  padding-top: 2.2rem;
  background-position: left bottom;
}
.text-3:hover .showtext-3{
  background-image: linear-gradient(-135deg, #418ae0, #56a0d8,  #56a0d8, #418ae0, #56a0d8,  #56a0d8, #418ae0);
  margin-top: -4rem;
  background-position: left bottom;
  color:white;
}
</style>
