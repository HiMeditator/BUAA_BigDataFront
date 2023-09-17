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
        <el-table-column prop="name" label="名称" sortable></el-table-column>
        <el-table-column prop="tag" label="版本"></el-table-column>
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="shortid" label="SHORT ID"></el-table-column>
        <el-table-column prop="created" label="创建时间" sortable></el-table-column>
        <el-table-column prop="size" label="大小(B)" sortable></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-link type="success" @click="viewInfo(scope.row)">参数</el-link>
            &nbsp;&nbsp;
            <el-link type="danger" @click="deleteImage(scope.row)">删除</el-link>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="add-wrap">
      <div class="add" @click="bfdVis = true">
        <i class="el-icon-plus"></i>从本地新建
      </div>
      <div class="add" @click="bfrVis = true">
        <i class="el-icon-plus"></i>从远程新建
      </div>
    </div>

    <el-dialog title="详细参数" :visible.sync="infoVis" width="50%">
      <el-input type="textarea" v-model="infoData" :rows="24"></el-input>
    </el-dialog>

    <el-dialog title="从本地 Docker File 构建镜像" :visible.sync="bfdVis" width="35%">
      <bfd/>
    </el-dialog>
    <el-dialog title="从远程镜像仓库拉取镜像" :visible.sync="bfrVis" width="30%">
      <bfr/>
    </el-dialog>
  </div>
</template>

<script>
import bfd from './BuildFromDocker.vue'
import bfr from './BuildFromRemote.vue'
export default {
  name: 'ImageView',
  components:{
    bfd,bfr
  },
  data(){
    return {
      search: '',
      infoVis: false,
      infoData: {},
      bfdVis: false,
      bfrVis: false,
      rawImages:[],
      images:[]
    }
  },
  mounted(){
    this.getImageData()
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
    viewInfo(arg){
      this.infoData = JSON.stringify(arg.raw,null,2)
      this.infoVis = true
    },
    getImageData(){
      this.$axios({
        method: 'GET',
        url: '/list_images'
      }).then(res => {
        this.rawImages = res.data
        this.images = []
        for(let entry of this.rawImages){
          let display = {}
          display.name = entry.tags[0].split(':')[0]
          display.tag = entry.tags[0].split(':')[1]
          display.id = entry.id.split(':')[1]
          display.shortid = entry.short_id.split(':')[1]
          display.created = entry.attrs.Created.split('.')[0]
          display.size = entry.attrs.Size
          display.raw = entry
          this.images.push(display)
        }
        console.log(this.rawImages)
        console.log(this.images)
      }).catch(err => {
        console.log(err)
      })
    },
    deleteImage(arg){
      const index = this.images.indexOf(arg);
      if(confirm('确认删除?')) this.images.splice(index, 1);
      console.log(index)
      let form = new FormData()
      form.append('image_id', item.longId)
      this.$axios.post('/remove_image', form).then(res => {
        if(res.data === 'delete success') alert(`镜像${arg.id}已成功删除`);
        else throw res.data;
      }).catch(() => {
        alert(`镜像${arg.id}删除失败`);
        this.getImageData();
      })
    }
  }
}
</script>

<style scoped>
.header {
  height: 180px;
  background-image: url('../../assets/img/main/database.jpg');
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
  width: 96%;
  margin-left: 2%;
}
.add-wrap {
  margin-left: calc(50% - 120px);
}
.add {
  float: left;
  width: 120px;
  margin: 25px auto;
  font-size: 18px;
  font-weight: 500;
}
.add i {
  font-weight: 900;
}
.add:hover {
  font-weight: 700;
  cursor: pointer;
}
</style>