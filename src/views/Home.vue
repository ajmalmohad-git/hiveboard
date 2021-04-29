<template>
  <div class="home bg-hiveprimary1">
    <HomeS1 />
    <HomeS2 />
    <HomeS3 />
    <HomeS4 />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeS1 from '@/components/HomeS1.vue'
import HomeS2 from '@/components/HomeS2.vue'
import HomeS3 from '@/components/HomeS3.vue'
import HomeS4 from '@/components/HomeS4.vue'

export default {
  name: 'Home',
  components: {
    HomeS1,
    HomeS2,
    HomeS3,
    HomeS4
  }
}
</script>
