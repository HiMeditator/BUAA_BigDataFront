<template>
  <div class="bfd">
    <el-upload
      :http-request="fileUpload"
      action="#"
      :limit="1"
      :multiple="false">
      <el-button slot="trigger" size="small" type="primary">点击上传</el-button>
    </el-upload>
    <el-input class="input" v-model="name" placeholder="请输入镜像名称(用英文逗号分割多个TAG)"></el-input>
    <el-input class="input" v-model="version" placeholder="请输入镜像TAG(留空以使用自定义格式TAG)"></el-input>
    <div class="process clearfix">
      <div :style="{color: infoColor}">{{ process }}</div>
      <el-button type="primary" @click="buildImage()" class="sub-btn">立即创建</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bfd',
  data(){
    return {
      dockerFile: [],
      name: '',
      version: '',
      process: '等待中...',
      infoColor: '#A5A5A5'
    }
  },
  methods: {
    fileUpload(param){
      this.dockerFile = param.file
      console.log(this.dockerFile)
    },
    buildImage(){
      let form = new FormData();
      form.append('dockerfile', this.dockerFile);
      let flag = ':'
      if(this.name==='' || this.version==='') flag=''
      let tag = this.name.split(',');
      for(let i = 0, l = tag.length; i < l; i++) {
        tag[i] = tag[i] + flag + this.version;
        form.append('tags',tag[i]);
      }
      this.$axios.post('/build_image', form).then(res => {
        if(res.data === 'pull success'){
          this.process = '镜像构建完成';
          this.infoColor = '#67C23A'
        }
        else throw res.data;
      }).catch(() => {
        this.process = '镜像构建失败';
        this.infoColor = '#F56C6C'
      })
    },
  }
}
</script>

<style scoped>
.input {
  margin: 10px 3%;
  width: 94%;
}
.process {
  font-size: 14px;
  margin: 10px;
}
.sub-btn {
  float: right;
}
</style>