<template>
  <div class="template">
    <h1>Template View</h1>
  </div>
</template>

<script>
export default {
  name: 'TestView',
  data(){
    return {
      var: 1
    }
  },
  mounted(){
    console.log('Mounted')
  },
  methods: {
    func(){
      console.log('func')
    }
  }
}
</script>

<style scoped>
h1 {
  color: orange;
}
</style>