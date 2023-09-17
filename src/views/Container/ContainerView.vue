<template>
  <div class="image">

    <div class="header clearfix">
      <div class="combo">
        <span>容器管理</span>
        <el-input class="input" placeholder="搜索容器名" v-model="search">
        </el-input>
      </div>
    </div>

    <div class="table">
      <el-table :data="filterd_images">
        <el-table-column prop="name" label="容器名称" sortable></el-table-column>
        <el-table-column prop="id" label="SHORT ID" sortable></el-table-column>
        <el-table-column prop="imageName" label="容器镜像" sortable></el-table-column>
        <el-table-column prop="status" label="容器状态" sortable></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-link type="success" @click="func(scope.row)">查看</el-link>&nbsp; 
            <el-link type="warning" @click="func(scope.row)">启动</el-link>&nbsp; 
            <el-link type="danger" @click="func(scope.row)">停止</el-link>&nbsp; 
            <el-link type="success" @click="func(scope.row)">重启</el-link>&nbsp; 
            <el-link type="warning" @click="func(scope.row)">提交</el-link>&nbsp; 
            <el-link type="danger" @click="func(scope.row)">删除</el-link> 
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TestView',
  data(){
    return {
      search: '',
      rawContainers: [],
      containers: []
    }
  },
  mounted(){

  },
  computed: {
    filterd_images() {
      if (this.search === '') return this.containers
      else return this.images.filter(val => {
        return val.name.includes(this.search)
      })
    }
  },
  mounted(){
    this.getContainerData()
  },
  methods: {
    getContainerData(){
      this.$axios({
        method: 'GET',
        url: '/list_containers'
      }).then(res => {
        this.rawContainers = res.data
        this.containers = []
        for(let entry of this.rawContainers){
          let display = {}
          display.name = entry.name===""?entry.short_id:entry.name
          display.id = entry.short_id
          display.status = entry.status
          display.imageName = entry.image.tags[0].split('/')[1]
          display.longID = entry.id
          display.image = entry.image
          display.labels = entry.labels
          this.containers.push(display)
        }
        console.log(this.rawContainers)
        console.log(this.containers)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.header {
  height: 180px;
  background-image: url('../../assets/img/main/kubernets.jpg');
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
.input {
  width: 30%;
  float: right;
}
.table {
  width: 90%;
  margin-left: 5%;
}
</style>