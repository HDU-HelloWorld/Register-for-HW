<template>
  <div class="body">
    <img src="../assets/pic.png" style="width:800px">
    <div class="text">
      <h1>Hello World</h1>
      <p>This is a simple Vue.js component.</p>
      <p>{{xz}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      xz: '嗨嗨嗨，我是徐壮'
    }
  }
}
</script>
<style scoped>
</style>
