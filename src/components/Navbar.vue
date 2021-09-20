<template>
  <div class="flex">
    <div
      class='flex justify-center items-center mt-2 space-x-2 cursor-pointer'
      @click="router.push('/')"
    >
      <VideoCameraIcon class="h-8 text-white " />
      <h1 class='text-2xl font-semibold whitespace-nowrap'>TV Shows</h1>
    </div>
    <ul class="mt-5 absolute top-16 md:relative md:top-0 flex">
      <li>
        <router-link
          to='/action'
          class="ml-5"
        >
          Action
        </router-link>
      </li>
      <li>
        <router-link
          to='/comedy'
          class="ml-5"
        >
          Comedy
        </router-link>
      </li>
      <li>
        <router-link
          to='/drama'
          class="ml-5"
        >
          Drama
        </router-link>
      </li>
      <li>
        <router-link
          to='/thriller'
          class="ml-5"
        >
          Thriller
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
import { VideoCameraIcon } from "@heroicons/vue/solid";
import { useRouter } from "vue-router";

export default {
  components: {
    VideoCameraIcon,
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>

<style>
</style>