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
        'Whaterver YOU Want'
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

<style>
.body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
