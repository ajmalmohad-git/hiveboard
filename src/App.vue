<template>
<div>
  <Navbar />
  <router-view class="pt-14"/>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
*{
  border:none;
  padding:0px;
  margin:0px;
}
#app {
  font-family:sans-serif;
  color: #2c3e50;
}
</style>
