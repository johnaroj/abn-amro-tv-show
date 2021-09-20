<template>
  <div class="mt-10 md:mt-0">
    <h2 class="mt-5 text-yellow-500 uppercase text-lg font-semibold">Popular Tv Shows</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 ">
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
import useFetchPopular from "@/use/fetchPopular";
import ShowItem from "@/components/ShowItem";
export default {
  components: { ShowItem },
  setup() {
    const { data, error, loading } = useFetchPopular();

    return {
      data,
      error,
      loading,
    };
  },
};
</script>

<style>
</style>