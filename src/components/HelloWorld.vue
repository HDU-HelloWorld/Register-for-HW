<template>
  <div class="body">
    <img src="../assets/pic.png" style="width:800px">
    <div class="text">
      <h1>Hello World</h1>
      <p>This is a simple Vue.js component.</p>
      <p>{{xz}}</p>
      <p>{{jym}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      xz: '嗨嗨嗨，我是徐壮',
      jym: '嗨嗨嗨，我是徐壮父亲'
    }
  }
}
</script>
<style scoped>
</style>
