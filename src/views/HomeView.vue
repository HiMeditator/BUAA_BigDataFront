<template>
  <div class="home">
    <h1>PropCare Platform</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  mounted(){
    this.$router.push('/image')
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 100px;
}
</style>
