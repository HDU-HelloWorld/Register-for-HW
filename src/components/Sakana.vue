<template>
<div id="sakana-widget"></div>
</template>

<script>
import sakana from '@/assets/Sakala/sakana.js'
export default {
  name: 'Sakana',
  methods: {
    sakana () {
      sakana.initSakanaWidget()
    }
  },
  mounted () {
    this.sakana()
  }
}
</script>

<style>

</style>
