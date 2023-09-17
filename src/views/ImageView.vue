<template>
  <div class="image">

    <div class="header clearfix">
      <div class="combo">
        <span>镜像管理</span>
        <el-input class="input" placeholder="搜索镜像名" v-model="search">
        </el-input>
      </div>
    </div>

    <div class="table">
      <el-table :data="filterd_images">
        <el-table-column prop="name" label="NAME" sortable></el-table-column>
        <el-table-column prop="tag" label="TAG"></el-table-column>
        <el-table-column prop="ID" label="ID"></el-table-column>
        <el-table-column prop="shortID" label="SHORT ID"></el-table-column>
        <el-table-column prop="created" label="CREATED" sortable></el-table-column>
        <el-table-column prop="size" label="SIZE" sortable></el-table-column>
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
      images:[
        {
          name: 'image-01',
          tag: 'kail linux',
          ID:'3w35uhrwiuefg',
          shortID:'3ui2',
          created:'2023-09-17T10:11',
          size:'1783422k'
        },
        {
          name: 'image-02',
          tag: 'ubuntu',
          ID:'r4i3qwf8s9f',
          shortID:'8saf',
          created:'2023-09-17T10:18',
          size:'1183222k'
        }
      ]
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
.input {
  width: 30%;
  float: right;
}
.table {
  width: 90%;
  margin-left: 5%;
}
</style>