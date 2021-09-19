<template>
  <Loader v-show="loading" />
  <div>
    <h2 class="mt-5 text-yellow-500 uppercase text-lg font-semibold">{{route.name}}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
      <template
        v-for="show in data"
        :key="show.id"
      >
        <ShowItem :show="show" />
      </template>
    </div>

  </div>

</template>

<script>
import useFetchGenre from "@/use/fetchGenre";
import ShowItem from "@/components/ShowItem";
import Loader from "@/components/Loader";
import { useRoute } from "vue-router";

export default {
  components: { ShowItem, Loader },
  setup() {
    const { data, error, loading } = useFetchGenre("Drama");
    const route = useRoute();
    return {
      data,
      error,
      loading,
      route,
    };
  },
};
</script>

<style>
</style>