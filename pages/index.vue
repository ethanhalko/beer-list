<script setup>
const EXCLUDE = 'centennial';

useHead({
  title: 'BrewDog - Our Beers'
});

const beerList = shallowRef();

onBeforeMount(async () => {
  const data = await $fetch('https://api.punkapi.com/v2/beers?brewed_after=11-2012');

  // Filter beers that use Centennial Hops
  beerList.value = data.filter((beer) => !beer.ingredients.hops.some((hop) => hop.name.toLowerCase() === EXCLUDE))
    // Order by abv desc
    .sort((a, b) => a.abv - b.abv);
});

// Expose for testing purposes
defineExpose({ beerList });
</script>
<template>
  <div class="flex flex-col mx-auto sm:w-1/2">
    <h1 class="mx-auto font-bold text-gray-800 text-5xl my-10 drop-shadow-sm">Our Beers</h1>
    <h2 class="mx-auto flex">
      <Icon name="fa6-solid:cow" class="my-auto text-middle mx-1 w-6 text-red-600"></Icon>
      = Contains Lactose
    </h2>
    <h2 class="mx-auto bg-green-300 p-1">Dry Hopped</h2>
    <div v-for="(beer, index) in beerList" :key="index">
      <BeerInfo :beer="beer" />
    </div>
  </div>
</template>
