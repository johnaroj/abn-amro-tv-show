<template>
  <div class="container mx-auto px-4">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
  name: "App",
};
</script>

<style>
</style>
