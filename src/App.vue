<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import home from './components/home.vue'
export default {
  components: { home },
  name: 'App'
}
</script>

<style>
  *{
    padding: 0px;
    margin: 0px;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
</style>
