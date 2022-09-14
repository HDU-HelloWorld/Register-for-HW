<template>
  <!-- 报名信息确认界面 -->
  <div>
    <!-- PC -->
    <div class="pc">
      <div class="confirm">
        <h1 class="pc-title">请输入学号与姓名进行查询</h1>
        <div class="pc-inputBox">
          <div class="StuNumb">
            <p>学号</p>
            <el-input v-model="form.stuNum" placeholder="请输入学号"></el-input>
          </div>
          <div class="stuName">
            <p>姓名</p>
            <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
          </div>
        </div>
        <el-button class="query" @click="queryUser">查询</el-button>
        <div class="userdetinfo">
          <h2 class="user-title">你的信息如下！！！</h2>
          <div class="pc-user">
            <div class="pc-userName">你的名字是: <span style="margin-left:65px">{{userInfo.name}}</span></div>
            <div class="pc-userStuNum">你的学号是:<span style="margin-left:75px">{{userInfo.stuNum}}</span></div>
            <div class="pc-userGender">你的性别是:<span style="margin-left:75px">{{userInfo.gender}}</span></div>
            <div class="pc-userphone">你的手机号是:<span style="margin-left:55px">{{userInfo.phone}}</span></div>
            <div class="pc-userQQ">你的QQ号是:<span style="margin-left:70px">{{userInfo.qqnumber}}</span></div>
            <div class="pc-userema">你的QQ邮箱是:<span style="margin-left:50px">{{userInfo.email}}</span></div>
            <div class="pc-userCollege">你的学院是: <span style="margin-left:63px">{{userInfo.college}}</span></div>
            <div class="pc-userdep">你的志愿部门是:<span style="margin-left:35px">{{userInfo.department}}</span></div>
          </div>
          <div class="haokannie">
            <img src="@/assets/img/shuji.gif">
          </div>
          <button class="fanhuihome" @click="fanhuiquery">返回</button>
          <div class="pc-speic">若有信息错误，请联系管理员（QQ群:436862917)</div>
        </div>
      </div>
      <Sakana></Sakana>
    </div>
    <!-- MObile -->
    <div class="mobile">
      <div class="mo-confirm">
        <h1 class="mo-title">请输入学号与姓名进行查询!</h1>
        <div class="mo-inputBox">
          <div class="StuNumb">
            <p>学号</p>
            <el-input v-model="form.stuNum" placeholder="请输入学号"></el-input>
          </div>
          <div class="stuName">
            <p>姓名</p>
            <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
          </div>
        </div>
        <el-button class="query" @click="queryUser">查询</el-button>
      </div>
      <div class="mo-diff">
        <h2 class="user-title">你的信息如下！！！</h2>
        <div class="mo-user">
          <div class="pc-userName">你的名字是: <span style="margin-left:35px">{{userInfo.name}}</span></div>
          <div class="pc-userStuNum">你的学号是:<span style="margin-left:45px">{{userInfo.stuNum}}</span></div>
          <div class="pc-userGender">你的性别是:<span style="margin-left:45px">{{userInfo.gender}}</span></div>
          <div class="pc-userphone">你的手机号是:<span style="margin-left:23px">{{userInfo.phone}}</span></div>
          <div class="pc-userQQ">你的QQ号是:<span style="margin-left:38px">{{userInfo.qqnumber}}</span></div>
          <div class="pc-userema">你的QQ邮箱是:<span style="margin-left:20px">{{userInfo.email}}</span></div>
          <div class="pc-userCollege">你的学院是: <span style="margin-left:33px">{{userInfo.college}}</span></div>
          <div class="pc-userdep">你的志愿部门是:<span style="margin-left:10px">{{userInfo.department}}</span></div>
        </div>
        <div class="haokannie">
          <img src="@/assets/img/shuji.gif">
        </div>
        <button class="fanhuihome" @click="fanhuiquery">返回</button>
        <div class="mo-speic">若有信息错误，请联系管理员（QQ群:436862917)</div>
      </div>
    </div>
  </div>
</template>

<script>
import server from '@/assets/data/server.json'
import Sakana from '@/components/Sakana.vue'
export default {
  name: 'ConfirmPage',
  components: {
    Sakana
  },
  data () {
    return {
      form: {
        stuNum: '',
        name: ''
      },
      userInfo: {},
      isShowInfo: -1
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
        this.$axios.get(url, {params: this.form}).then(res => {
          if (res.data !== '' && res.status === 200) {
            this.userInfo = res.data
            this.isShowInfo = 1
            this.luoji()
          } else {
            this.$message({
              message: '查询失败，请确认您填写的信息是否正确',
              type: 'error'
            })
          }
        })
      }
    },
    fanhuiquery () {
      this.isShowInfo = -1
      let moSuu = document.querySelector('.mo-diff')
      moSuu.style.display = 'none'
      let moResi = document.querySelector('.mo-confirm')
      moResi.style.display = 'flex'
    },
    //  封装一下代码变成方法函数
    luoji () {
      let moResi = document.querySelector('.mo-confirm')
      let moSuu = document.querySelector('.mo-diff')
      let panduan = moSuu.style.display
      moResi.style.display = 'none'
      if (panduan === 'flex') {
        moSuu.style.display = 'none'
      } else {
        moSuu.style.display = 'flex'
      }
    }
  },
  mounted () {
    let moSuu = document.querySelector('.mo-diff')
    moSuu.style.display = 'none'
  },
  watch: {
    isShowInfo: {
      handler (newValue, oldValue) {
        let showDetInfo = document.querySelector('.userdetinfo')
        if (newValue === 1) {
          showDetInfo.style.zIndex = 1
        } else if (newValue === -1) {
          showDetInfo.style.zIndex = -1
        }
      }
    }
  }
}
</script>

<style lang="less">
//  pc
@media only screen and (min-width: 768px) {
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
      font-size: 10px;
  }
  ::selection {
      color: #fff;
      background-color: rgb(144, 129, 241);
  }
  .pc {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    display: flex !important;
    justify-content: center;
    align-items: center;
    .confirm{
      border-radius: 16px;
      box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
      background-color: #fff;
      width: 40%;
      height: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      .pc-title{
        margin: 30px 0;
        font-family: descrip;
        width: 100%;
        text-align: center;
        margin-bottom: 5%;
        color: rgb(71, 87, 98);
        font-size: 3rem;
      }
      .pc-inputBox{
        width: 32%;
        height: 50%;
        .StuNumb{
          display: flex;
          justify-content: space-between;
          p{
            width: 80px;
            height: 30px;
            line-height: 30px;
            font-size: 20px;
            margin-top: 5px;
          }
          .el-input__inner{
              border: none;
              border-radius: 10px;
              font-size: 14px;
              background: #e9e9e9;
              box-shadow:  4px 4px 10px #c6c6c6,
                          -4px -4px 10px #ffffff;
              font-family: inherit;
              color: #9baacf;
              &::placeholder {
                color: #bec8e4;
              }
              &:focus {
                outline: none;
                background: #e9e9e9;
                box-shadow: inset 4px 4px 10px #c6c6c6,
                            inset -4px -4px -10px #ffffff;
              }
          }
        }
        .stuName{
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
          p{
            width: 80px;
            height: 30px;
            line-height: 30px;
            font-size: 20px;
            margin-top: 5px;
          }
          .el-input__inner{
              border: none;
              border-radius: 10px;
              font-size: 14px;
              background: #e9e9e9;
              box-shadow:  4px 4px 10px #c6c6c6,
                          -4px -4px 10px #ffffff;
              font-family: inherit;
              color: #9baacf;
              &::placeholder {
                color: #bec8e4;
              }
              &:focus {
                outline: none;
                background: #e9e9e9;
                box-shadow: inset 4px 4px 10px #c6c6c6,
                            inset -4px -4px -10px #ffffff;
              }
          }
        }
      }
      .query.el-button{
        width: 40%;
        height: 60px;
        margin-top: -8%;
        color: #f6f6f6;
        background-image: linear-gradient(120deg, #e0c3f3 0%, #8ec5fc 100%);
        font-size: 1.4rem;
        border: none;
        border-radius: 0.5rem;
        margin-bottom: 50px;
      }
      .userdetinfo{
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 16px;
        background-color: #fff;
        transition: 0.3s;
        z-index: -1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .user-title{
          font-size: 25px;
          font-family: descrip;
        }
        .pc-user{
          margin: 20px 0;
          font-size: 20px;
          width: 100%;
          height: 61.8%;
          // background-color: red;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          padding-left: 20%;
          justify-content: space-between;
          div{
            color: #1A507E;
            span{
              color:#DB5A6C;
            }
          }
        }
        .haokannie{
          width: 80px;
          height: 100px;
          position: relative;
          left: -50%;
          transform: translateX(70%);
          bottom: 10px;
          img{
            width: 100%;
          }
        }
        .fanhuihome{
          width: 20%;
          height: 50px;
          margin-top: -80px;
          margin-bottom: 10px;
          color: #f6f6f6;
          background-image: linear-gradient(120deg, #e0c3f3 0%, #8ec5fc 100%);
          font-size: 1.4rem;
          border: none;
          cursor: pointer;
          border-radius: 0.5rem;
        }
        .pc-speic{
          color: rgb(20, 2, 2);
        }
      }
    }
    &::before{
      content: ' ';
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: -1;
      background: linear-gradient(120deg, #e0c3f3 0%, #8ec5fc 100%) no-repeat;
    }
    #sakana-widget{
      position: fixed;
      bottom: 20px;
      right: 20px;
    }
  }
  .mobile {
    display: none !important;
    touch-action: auto !important;
  }
}
// 手机端
@media only screen and (max-width: 767px) {
  .pc {
    display: none !important;
  }
  .mobile {
    display: flex !important;
    touch-action: auto !important;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .mo-confirm{
      width: 80%;
      height: 55%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .mo-title{
        text-align: center;
        font-size: 22px;
        font-family: descrip;
      }
      .mo-inputBox{
        width: 100%;
        height: 50%;
        .StuNumb{
          margin: 10px 0;
          display: flex;
          justify-content: space-between;
          p{
            width: 80px;
            height: 30px;
            line-height: 30px;
            font-size: 18px;
            margin-top: 5px;
          }
          .el-input__inner{
            border-radius: 8px;
            font-size: 14px;
          }
        }
        .stuName{
          margin: 10px 0;
          display: flex;
          justify-content: space-between;
          p{
            width: 80px;
            height: 30px;
            line-height: 30px;
            font-size: 18px;
            margin-top: 5px;
          }
          .el-input__inner{
            border-radius: 8px;
            font-size: 14px;
          }
        }
      }
      .query.el-button{
        width: 45%;
        height: 40px;
        font-size: 18px;
        text-align: center;
        border: 1px solid gray;
      }
    }
    .mo-diff{
      display: none;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .user-title{
        margin: 15px 0;
        text-align: center;
        font-size: 20px;
        width: 100%;
      }
      .mo-user{
      font-size: 18px;
      width: 100%;
      height: 61.8%;
      // background-color: red;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding-left: 10%;
      justify-content: space-between;
      div{
        color:#1A507E;
        span{
          color:#DB5A6C;
        }
      }
      }
      .haokannie{
        width: 25%;
        margin-top: 10px;
        margin-left: 20px;
        left: 0px;
        bottom: 50px;
        position: absolute;
        img{
          width: 100%;
        }
      }
      .fanhuihome{
        margin-left: 50%;
        width: 30%;
        height: 50px;
        font-size: 20px;
        margin-top:40px;
        margin-bottom: 80px;
        background: #668d8e;
        border-radius: 8px;
        outline: none;
        border:none;
      }
      .mo-speic{
        text-align: center;
        color: #091d2d;
      }
    }
  }
}
</style>
