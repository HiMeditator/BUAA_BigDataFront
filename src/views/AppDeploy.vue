<template>
  <div class="template">
    <div class="header clearfix">
      <div class="combo">
        <span>应用部署</span>
      </div>
    </div>
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
.header {
  height: 180px;
  background-image: url('../assets/img/main/database.jpg');
  background-size: 100%;
  background-position: 0 -200px;
  text-align: left;
  transition: 1.6s;
}
.header:hover {
  background-size: 102%;
}
.combo {
  margin-top: 120px;
  margin-left: 10%;
  width: 80%;
}
.header span {
  color: white;
  font-size: 36px;
  font-weight: 600;
}
.header img {
  height: 36px;
  margin-right: 10px;
}
/* .wrap {
  width:92%;
  margin-left: 4%;
} */
</style>