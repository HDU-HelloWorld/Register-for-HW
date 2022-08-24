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
    <div id="imgCover" v-if="showingImg"><img :src="imgSrc" v-show="showingImg"></div>
    <audio controls id="audio">
      <source src="../assets/audio/bgm/bgm1.mp3" type="audio/mpeg">
    </audio>
    <!-- <class id="typedtext" v-for="message in indexMessage" :key="message">{{message}}</div> -->
  </div>
</template>

<script src="../assets/js/loading/logical.js">
</script>

<style lang="less" src="../assets/style/loading.less" scoped></style>
