<template>
  <div id="nav">
    <img alt="Hiveboard" class="navlogo" src="../assets/images/Navlogo.png">
    <ul class="links">
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/about">About</router-link></li>
    <li><router-link to ="/">Join</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navlogo{
    height:60px;
}
#nav {
  background: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.links{
    display: flex;
}
.links li{
    padding-left:20px;
    padding-right: 20px;
    list-style: none;
}
a{
    text-decoration: none;
}
</style>
