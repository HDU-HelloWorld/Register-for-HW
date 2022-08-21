<template>
  <div class="body"></div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted () {
    // 跳转到Loading页面
    this.$router.push('/auth')
  }
}
</script>

<style scoped>

</style>
