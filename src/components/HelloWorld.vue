<template>
  <div class="body">
    <div class="text">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="人工智能部门" name="first"><peoplesmart></peoplesmart></el-tab-pane>
        <el-tab-pane label="行政部门" name="second"><admin></admin></el-tab-pane>
        <el-tab-pane label="后端部门" name="third"><back></back></el-tab-pane>
         <el-tab-pane label="报名表单" name="fouth"><NewLogin></NewLogin></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Admin from './DepartIntro/Admin'
import Back from './DepartIntro/Back'
import Peoplesmart from './DepartIntro/Peoplesmart'
import NewLogin from './DepartIntro/NewLogin'
export default {
  components: { Admin, Back, Peoplesmart, NewLogin },
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
#pane-fouth{
  height: 100ch;
}
</style>
