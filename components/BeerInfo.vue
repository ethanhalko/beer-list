<script setup>
const props = defineProps({
  beer: {
    type: Object,
    required: true
  }
});

const readMore = shallowRef(false);
const containsLactose = !!props.beer.ingredients.hops.find((hops) => hops.name.toLowerCase() === 'lactose');
const dryHopped = !!props.beer.ingredients.hops.find((hops) => hops.add?.toLowerCase() === 'dry hop');
</script>
<template>
  <div class="beer-card group flex flex-col" :class="{'max-h-64 sm:max-h-36': !readMore}" @click="readMore = !readMore">
    <div class="flex flex-row">
      <div class="card-image w-[12.5%] sm:my-auto">
        <img class="mx-auto max-h-24" :class="{'sm:max-h-36': readMore}" :src="beer.image_url" :alt="beer.description">
      </div>
      <div class="card-info w-[87.5%] flex flex-col">
        <div class="flex">
          <h1 class="beer-name sm:text-xl px-1 -ml-1" :class="{'bg-green-200': dryHopped}">{{ beer.name }}</h1>
          <Icon v-if="containsLactose" name="fa6-solid:cow" class="icon-lactose my-auto text-middle mx-1 w-6 text-red-600"></Icon>
        </div>
        <h2 class="text-md sm:my-auto">ABV: {{ beer.abv }} | IBU: {{ beer.ibu }}</h2>
        <h3 class="sm:text-lg italic">{{ beer.tagline }}</h3>
        <p v-if="readMore" class="description sm:text-lg pt-4 mt-auto">{{ beer.description }}</p>
        <div class="w-[87.5%] mr-auto">
          <p v-if="!readMore" class="text-sm italic mx-auto text-center invisible group-hover:visible text-gray-400">Click To Expand</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.beer-card {
  @apply my-4 p-4 rounded-md border hover:shadow-md transition-shadow duration-200 cursor-pointer;
}
</style>

