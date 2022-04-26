<template>
  <div class="home">
      <div class="flex-column justify-content-center bg-basic mt-1">
        <img src="../../src/assets/logo.png" alt="logo-vuejs" class="rounded-circle mt-3 ">
        <h3 class="display-3 text-dark">The OHIO STATE UNIVERSICY</h3>
    </div>
    <home-page />
  </div>
</template>

<script>
// @ is an alias to /src
  import HomePage from '../../src/components/HomePage.vue'
export default {
  name: 'Home',
  components: {
    HomePage
  }
}
</script>
