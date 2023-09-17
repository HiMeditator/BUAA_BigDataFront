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
        <el-table-column prop="name" label="NAME" sortable></el-table-column>
        <el-table-column prop="shortID" label="SHORT ID"></el-table-column>
        <el-table-column prop="image" label="IMAGE"></el-table-column>
        <el-table-column prop="status" label="STATUS"></el-table-column>
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
      images:[]
    }
  },
  mounted(){

  },
  computed: {
    filterd_images() {
      if (this.search === '') return this.images
      else return this.images.filter(val => {
        return val.name.includes(this.search)
      })
    }
  },
  methods: {

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