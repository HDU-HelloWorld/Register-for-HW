<template>
  <div class="demo" :style="style">
    hi, demopage
    <div class="foot">foot</div>
    </div>
</template>

<script>
export default {
  name: 'DemoPage',
  data () {
    return {
      style: {
        width: '100%',
        height: window.innerHeight + 'px',
        background: '#000',
        color: '#fff'
      }
    }
  }
}
</script>

<style scoped lang="less">
.foot {
  position: absolute;
  bottom: 0;
}
</style>
