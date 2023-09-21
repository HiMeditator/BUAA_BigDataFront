<template>
  <div class="bfr">
    <el-input v-model="URL" placeholder="请输入镜像名称"></el-input>
    <div class="process clearfix">
      <div :style="{color: infoColor}">{{ process }}</div>
      <el-button type="primary" @click="pullImage" class="sub-btn">立即创建</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bfr',
  data(){
    return {
      URL: '',
      process: '等待中...',
      infoColor: '#A5A5A5'
    }
  },
  methods: {
    pullImage() {
      this.process = '正在拉取...'
      this.infoColor = '#409EFF'
      let form = new FormData();
      form.append('repository', this.URL);
      this.$axios.post('/pull_image', form).then((res) => {
        if(res.data === 'pull success'){
          this.process = '镜像拉取完成';
          this.infoColor = '#67C23A'
        }
        else throw res.data;
      }).catch(() => {
        this.process = '镜像拉取失败';
        this.infoColor = '#F56C6C'
      })
    }
  }
}
</script>

<style scoped>
.process {
  font-size: 14px;
  margin: 10px;
}
.sub-btn {
  float: right;
}
</style>