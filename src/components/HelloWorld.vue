<template>
  <div class="body">
    <div class="text">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="人工智能部门" name="first"><peoplesmart></peoplesmart></el-tab-pane>
        <el-tab-pane label="行政部门" name="second"><admin></admin></el-tab-pane>
        <el-tab-pane label="后端部门" name="third"><back></back></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Admin from './DepartIntro/Admin.vue'
import Back from './DepartIntro/back.vue'
import Peoplesmart from './DepartIntro/peoplesmart.vue'
export default {
  components: { Admin, Back, Peoplesmart },
  name: 'HelloWorld',
  data () {
    return {
      activeName: 'second'
    }
  },
  methodes: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style scoped>
</style>
