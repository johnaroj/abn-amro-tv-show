<template>
  <div class="container mx-auto mt-14 space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
    <Loader v-show="loading" />
    <div class="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-3 lg:aspect-w-3 lg:aspect-h-4">
      <img
        class="object-cover"
        :src="data.image?.original"
        :alt="data.name"
      >
    </div>

    <div class="sm:col-span-2">
      <h2 class="text-4xl font-semibold">{{data.name}}</h2>
      <span class="text-gray-500 text-sm flex">
        <StarIcon class="h-5 text-yellow-600" />{{data.rating?.average}} | {{data?.premiered}} {{formatGenres(data?.genres)}}
      </span>
      <div
        class="mt-5"
        v-html="data.summary"
      ></div>
      <span class="mt-5 font-semibold">Featured Cast</span>
      <div class="flex flex-col mt-5">
        <span>Network </span>
        <span class="text-gray-500">{{data.network?.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { StarIcon } from "@heroicons/vue/solid";
import Loader from "@/components/Loader";
import { useRoute } from "vue-router";
import useFetchTvShow from "@/use/fetchTvShow";
import { reactive, toRefs, onMounted, watch } from "vue";

export default {
  components: {
    StarIcon,
    Loader,
  },
  name: "Show",
  setup() {
    const route = useRoute();
    const state = reactive({
      data: {},
      loading: true,
    });

    const formatGenres = (arr) => {
      return arr && arr.length > 0 && arr.join(", ");
    };
    watch(route, () => {
      if (route.params.id) {
        const { data, loading } = useFetchTvShow(route.params.id);

        state.data = data;
        state.loading = loading;
      }
    });
    onMounted(() => {
      const { data, loading } = useFetchTvShow(route.params.id);

      state.data = data;
      state.loading = loading;
    });

    return {
      ...toRefs(state),
      formatGenres,
    };
  },
};
</script>

<style>
</style>