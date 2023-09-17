<template>
  <div class="axios-test">
    <h1>Axios Test</h1>
    <el-form label-width="120px" class="axios-form">
      <el-form-item label="请求地址">
        <el-input  v-model="form.URL">
          <template slot="prepend">{{ baseURL }}</template>
        </el-input>
      </el-form-item>

      <el-form-item label="请求参数(JSON)">
        <el-input type="textarea" v-model="form.params" :rows="6"></el-input>
      </el-form-item>

      <el-form-item label="使用默认地址">
        <el-radio-group v-model="form.baseOption">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="请求数据选项">
        <el-radio-group v-model="form.dataOption">
          <el-radio label="1">获取的是JSON数据</el-radio>
          <el-radio label="2">获取并打开文件</el-radio>
          <el-radio label="3">获取并下载文件</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="GetRequest()">发送GET请求</el-button>
        <el-button type="success" @click="PostRequest()">发送POST请求</el-button>
        <el-button type="info" @click="Output()">输出请求信息</el-button>
      </el-form-item>

      <el-form-item label="操作结果">
        <el-input type="textarea" v-model="form.result" :rows="8"></el-input>
      </el-form-item>

      <el-form-item label="请求日志">
        <el-input type="textarea" v-model="form.log" :rows="8"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AxiosTestView',
  data(){
    return {
      form:{
        URL: 'api.oick.cn/qrcode/api.php',
        params: '{"text":"Data-Exp-Group26","size":"200px"}',
        baseOption: '0',
        dataOption: '1',
        result: '',
        log: ''
      },
      AxiosObject: {}
    }
  },
  computed:{
    baseURL(){
      return this.form.baseOption==='0'?'http://':this.$axios.defaults.baseURL
    }
  },
  methods: {
    GetRequest(){
      this.AxiosObject = {
        method: 'GET',
        url: this.baseURL + this.form.URL,
        params: JSON.parse(this.form.params),
        responseType: this.form.dataOption==='1'?'':'blob'
      }
      this.$axios(this.AxiosObject).then(res =>{
        this.form.result = `Status: ${res.status}\n\n${JSON.stringify(res)}`
        console.log(res)
        if(this.form.dataOption!=='1'){
          const blob = new Blob([res.data],{type:res.data.type})
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.target = '_blank'
          if(this.form.dataOption==='3') link.download = 'file'
          document.body.appendChild(link)
          link.click()
        }
      }).catch(err => {
        console.log(err)
        this.form.result = JSON.stringify(err)
      })
      this.form.log += JSON.stringify(this.AxiosObject)+'\n'
    },
    PostRequest(){
      this.AxiosObject = {
        method: 'POST',
        url: this.baseURL + this.form.URL,
        data: JSON.parse(this.form.params),
        responseType: this.form.dataOption==='1'?'':'blob'
      }
      this.$axios(this.AxiosObject).then(res =>{
        this.form.result = `Status: ${res.status}\n\n${JSON.stringify(res)}`
      }).catch(err =>{
        console.log(err)
        this.form.result = JSON.stringify(err)
      })
      this.form.log += JSON.stringify(this.AxiosObject)+'\n'
    },
    Output(){
      try{
        this.AxiosObject = {
          method: '',
          url: this.baseURL + this.form.URL,
          params: JSON.parse(this.form.params),
          responseType: this.form.dataOption==='1'?'':'blob'
        }
        this.form.result = JSON.stringify(this.AxiosObject)
      }
      catch(err){
        this.form.result = '输入有误，请求参数请输入规范的JSON格式！'
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
.axios-form {
  padding: 50px;
  width: 80%;
  margin-left: calc(10% - 50px);
  margin-bottom: 40px;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24), 0 4px 8px 0 rgba(0, 0, 0, 0.19);
}
</style>