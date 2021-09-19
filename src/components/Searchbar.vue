<template>
  <div class="mt-5 flex space-x-3 relative">

    <input
      type="text"
      class="rounded-full bg-gray-600 px-9 w-60 h-10 focus:outline-shadow focus:outline-none"
      placeholder="search..."
      v-model="q"
    >
    <div class="absolute top-0">
      <SearchIcon class='h-5 text-gray-300 mt-3 mr-auto fill-current' />
    </div>
    <div
      v-if="results.length > 0"
      class="absolute mt-12 ml-2 rounded bg-gray-600 w-60"
    >
      <ul>
        <li
          v-for="item in results"
          :key="item.show.id"
        >
          <router-link
            :to="`/show/${item.show.id}`"
            class="flex items-center border-b border-gray-500 p-2"
          >
            <img
              :src="item.show.image?.original"
              class="w-10"
              alt=""
            >
            <span class="ml-3">{{item.show?.name}}</span>
          </router-link>
        </li>
      </ul>
    </div>

    <img
      src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
      class="h-10 bg-white rounded-full"
    />
  </div>
</template>

<script>
import { SearchIcon } from "@heroicons/vue/solid";
import { toRefs, ref, watch, reactive } from "vue";
import useSearch from "@/use/search";
import { useRoute } from "vue-router";

export default {
  components: { SearchIcon },
  setup() {
    const route = useRoute();
    const q = ref("");
    const state = reactive({
      results: [],
      loading: true,
      error: null,
    });

    const searchShows = (text) => {
      const { data, loading, error } = useSearch(text);
      state.results = data;
      state.loading = loading;
      state.error = error;
    };

    watch(q, () => {
      if (q.value.length > 3) {
        searchShows(q.value);
      } else {
        state.results = [];
      }
    });

    watch(route, () => {
      state.result = [];
      q.value = "";
    });
    return {
      q,
      ...toRefs(state),
    };
  },
};
</script>

<style>
</style>