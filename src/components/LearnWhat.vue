<template>
  <div class="body">
    <vue-typed-js
      :strings="[
        'HTML',
        'CSS',
        'JavaScript',
        'Java',
        'Python',
        'AI',
        'Whaterver U Want'
      ]"
      :typeSpeed="100"
      :loop="true"
    >
      <h1>Learn <span class="typing"></span> Togather With US!</h1>
    </vue-typed-js>
  </div>
</template>

<script>
export default {
  name: 'LearnWhat'
}
</script>

<style lang="less" scoped>
.body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

// 打字效果加下划线
.typing {
  border-bottom: 0.3rem solid #000;
}
</style>
