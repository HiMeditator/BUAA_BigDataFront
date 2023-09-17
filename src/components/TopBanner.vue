<template>
  <div id="top-banner">

    <div class="top-left">
      <a href="/">
        <img src="../assets/img/prop-care.png" style="float:left;height:50px;">
      </a>
    </div>

    <div class="top-mid">
      <ul>
        <li><a href="/image">镜像管理</a></li>
        <li><a href="/container">容器管理</a></li>
        <li><a href="/app-deploy">应用部署</a></li>
        <li><a href="/axios-test">Axios Test</a></li>
      </ul>
    </div>

  </div>
</template>
  
<script>
export default {
  name: "TopBanner",
}
</script>
  
<style scoped>
#top-banner {
  width: 100%;
  min-height: 50px;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 3;
  position: fixed;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.top-left {
  float: left;
  margin-left: 50px;
}
.top-left:hover {
  cursor: pointer;
}
.top-mid {
  float: left;
  height: 50px;
  margin-left: 50px;
}
.top-mid ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0);
  height: 50px;
}
.top-mid li {
  float: left;
  width: 120px;
}
.top-mid li a {
  display: block;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-weight: 600;
  color: black;
  text-align: center;
  padding: 0 10px;
  text-decoration: none;
}
.top-mid li a.active {
  background-color: #0AB1FF;
  color: white;
}
.top-mid li a:hover {
  background-color: #555;
  color: white;
}
</style>