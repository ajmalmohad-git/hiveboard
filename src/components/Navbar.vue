<template>
  <nav class="fixed min-height-14 w-screen flex items-center justify-between flex-wrap bg-hivetext1 text-center">
    <div class="mr-6">
      <img class="h-14" alt="Hiveboard" src="../assets/images/Navlogo.png">
    </div>
    <div class="block sm:hidden mr-5">
      <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-hiveprimary1 border-hiveprimary2 hover:text-hiveprimary1 hover:border-hiveprimary1">
        <svg class="fill-current h-3 w-3 " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div :class="open ? 'block': 'hidden'" class="w-full sm:flex sm:items-center sm:w-auto">
      <div class="text-sm sm:flex-grow">
        <a href="/" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-hiveprimary2 hover:text-hiveaccent2 sm:mr-12">
          <router-link to="/">Home</router-link>
        </a>
        <a href="/about" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-hiveprimary2 hover:text-hiveaccent2 sm:mr-12">
          <router-link to="/about">About</router-link>
        </a>
        <a href="/" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-hiveprimary2 hover:text-hiveaccent2 sm:mr-12">
          <router-link to ="/">Courses</router-link>
        </a>
        <a href="/" class="no-underline block mt-4 sm:inline-block sm:mt-0 text-hiveprimary2 hover:text-hiveaccent2 sm:mr-12 mb-5 sm:mb-0">
          Join
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      open: false
    }
  },
  methods: { toggle () { this.open = !this.open } }
}
</script>
