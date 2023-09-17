<template>
  <div id="app">
    <top-banner />
    <div class="main-struct clearfix">
      <div style="height:50px;"></div>
      <router-view />
    </div>
    <bottom-banner />
  </div>
</template>

<script>
import TopBanner from "./components/TopBanner.vue"
import BottomBanner from "./components/BottomBanner.vue"
export default {
  components: { TopBanner, BottomBanner },
}
</script>


<style>
@import './assets/css/normalize.css';

::-webkit-scrollbar {
  display: none;
}

.main-struct {
  height: 100%;
  min-height: calc(100vh);
  width: 72%;
  margin: auto;
  background-color: white;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2),
  -4px -4px 12px rgba(0, 0, 0, 0.2);
}

.clearfix::before,
.clearfix::after{
    content: '';
    display: table;
    clear: both;
}
</style>
