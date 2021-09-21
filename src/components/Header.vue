<template>
  <header class="pb-3 flex justify-between border-b border-gray-500">
    <Navbar />
    <Searchbar />
  </header>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Searchbar from "@/components/Searchbar.vue";

export default {
  name: "Header",
  components: {
    Navbar,
    Searchbar,
  },
};
</script>

<style>
</style>