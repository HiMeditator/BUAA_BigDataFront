<template>
  <div class="div-intro">
    <div class="icon">
      <img src="../assets/img/prop-care-white.png" class="logo">
      <img src="../assets/img/info.png" class="qr-code">
    </div>
    <div class="links">
      <p>
        <span>功能介绍</span> |
        <span>帮助中心</span> |
        <span>用户文档</span> |
        <span>联系我们</span> |
        <span>关于我们</span>
      </p>
      <p>
        Powered by 2022-2023 Data-Exp-Group26
      </p>
      <p>
        All rights reserved.
      </p>
      <p>
        中国·北京·海淀
      </p>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "BottomBanner"
}
</script>
  
<style scoped>
.icon {
  height: 80px;
  margin: 50px auto auto 10%;
  float: left;
}
.icon img {
  height: 80px;
}
.qr-code {
  width: 80px;
  height: 80px;
  padding: 5px;
}
.links {
  float: right;
  margin: 30px 10% auto auto;
}
.links p {
  font-size: 16px !important;
  color: rgb(200, 200, 200);
  text-align: right !important;
}
.links p span:hover {
  cursor: pointer;
  color: white;
}
.div-intro {
  width: 100%;
  float: left;
  height: 180px;
  background-color: #333341;
}
.div-intro p {
  font-size: 14px;
  text-align: center;
  line-height: 16px;
  margin-top: 10px;
}
</style>
