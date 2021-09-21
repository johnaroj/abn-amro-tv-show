<template>
  <div class="mr-2">
    <router-link :to="{ name: 'Show', params: { id: data.id }}">
      <div class="aspect-w-3 aspect-h-4">
        <img
          v-if="data.image"
          :src="data.image.original"
          :alt="data.name"
          class="object-cover hover:opacity-75 transition ease-in-out duration-150"
        >
      </div>

      <h3>{{data.name}}</h3>
      <div class="flex">
        <StarIcon class="h-6 text-yellow-600" />
        <h3>{{data.rating.average}} | {{data.premiered}}</h3>
      </div>
    </router-link>

  </div>
</template>

<script>
import { reactive } from "vue";
import { StarIcon } from "@heroicons/vue/solid";
export default {
  components: {
    StarIcon,
  },
  props: {
    show: {},
  },
  setup(props) {
    const { show: data } = reactive(props);
    return {
      data,
    };
  },
};
</script>

<style>
</style>