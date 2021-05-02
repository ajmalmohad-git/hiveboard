<template>
  <div class="section2 h-screen flex flex-col items-start sm:items-center md:flex-row text-left overflow-x-hidden">
     <div class="flex-1 px-12 md:px-10 lg:px-20 order-2 md:order-1 mt-12 md:mt-0">
       <h1 class="mt-1 md:mt-0 font-extrabold text-3xl sm:text-4xl lg:text-5xl">Create Free Global</h1>
       <h1 class="font-extrabold text-3xl sm:text-4xl lg:text-5xl">Profile</h1>
       <p class="text-xs text-hivetext1 font-bold mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quo iste inventore minima totam cum vel voluptatum id distinctio quos dignissimos excepturi cupiditate, accusamus saepe dicta. Aliquam cumque obcaecati cupiditate? </p>
     </div>
     <div class="flex-1 flex flex-col self-center order-1 md:order-2">
       <img class="img1" src="../assets/images/section3.png"/>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HomeS3'
}
</script>

<style scoped>
.img1{
  height:60vh;
  min-width: 400px;
  object-fit: contain;
}
@media (max-width:976px){
  .img1{
    height:50vh;
  }
}
@media (max-width:728px){
  .img1{
    padding-top:5vh;
  }
}
</style>
