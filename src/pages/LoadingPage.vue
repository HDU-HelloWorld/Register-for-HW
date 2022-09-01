<template>
  <div class="body">
    <div id="typedtext">
      <div class="textBox">
        <div class="outputText"></div>
      </div>
      <div class="inputText" @click="focusInput">
        [{{ form.name }}]:
        <div class="input" @click="focusInput">
          <el-input
            class="inputBox"
            ref="inputBox"
            v-model="inputString"
            @click="focusInput"
            @focus="caretShining"
            @blur="cancelShining"
            @keyup.enter.native="sendMessage"
            @keydown.left.prevent.native
            autofocus
          ></el-input
          ><span @click="focusInput"
            >{{ inputString }}
            <div class="caret" v-show="caret"></div
          ></span>
        </div>
      </div>
    </div>
    <div id="imgCover" v-if="showingImg">
      <img :src="imgSrc" v-show="showingImg" />
    </div>
    <audio controls id="audio">
      <source src="../assets/audio/bgm/bgm1.mp3" type="audio/mpeg" />
    </audio>
    <div id="subScreen">
      <div class="leftPart">
        <div class="topMenu">
          <div class="item fill">
            <a href="https://github.com/HDU-HelloWorld/Register-for-HW"
              >GitHub</a
            >
          </div>
          <div class="item fill">
            <a href="http://helloworld-hdu.com/#/home">关于我们</a>
          </div>
          <div class="item fill">
            <a href="https://www.ccf.org.cn/">CCF</a>
          </div>
          <div class="item fill">
            <div class="menu" @click="showMenu">Menu</div>
          </div>
        </div>
        <div class="topSubScreen">
          <div class="title">FileSystem</div>
          <div class="content"></div>
        </div>
        <div class="footSubScreen">
          <div class="title">Tips</div>
          <div class="content"></div>
        </div>
      </div>
      <div class="rightPart">
        <div class="title">
        <div class="placeholder"></div>
          Achievements - 成就
          <div id="closeMenu">X</div>
        </div>
        <div class="achievements"></div>
      </div>
    </div>
    <!-- <class id="typedtext" v-for="message in indexMessage" :key="message">{{message}}</div> -->
  </div>
</template>

<script src="../assets/js/loading/logical.js">
</script>

<style lang="less" src="../assets/style/loading.less" scoped></style>
