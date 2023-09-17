<template>
  <div class="template">
    <div class="wrap">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="PODS 容器" name="first"></el-tab-pane>
      <el-tab-pane label="DEPLOYMENT 部署" name="second"></el-tab-pane>
      <el-tab-pane label="SERVICE 服务" name="third"></el-tab-pane>
      <el-tab-pane label="APPLICATIONS 应用" name="fourth"></el-tab-pane>
  </el-tabs>
  </div>
  </div>
</template>

<script>
export default {
  name: 'TestView',
  data(){
    return {
      activeName: 'first'
    }
  },
  mounted(){
    console.log('Mounted')
  },
  methods: {
    func(){
      console.log('func')
    }
  }
}
</script>

<style scoped>

</style>