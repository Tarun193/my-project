<template>
    <!-- Section to display a list of items (movies or TV shows) in a responsive flex-wrap layout -->
    <section class="flex flex-wrap text-white justify-center">
        <!-- Iterate over the 'content' prop array to generate article elements for each item -->
        <article v-for="data in content" :key="data.id"
            class="mx-1 my-3 md:hover:scale-105 hover:z-10 p-1 w-[80%] md:w-[30%] lg:w-[22%] hover:cursor-pointer">
            <!-- Container for the item's image -->
            <div class="flex justify-center">
                <!-- Dynamically set the image source; use a fallback image if 'poster_path' is not available -->
                <img :src="data.poster_path ? `https://image.tmdb.org/t/p/w300/${data.poster_path}` : noPosterUrl"
                    alt="" class="w-[90%]" />
            </div>
            <!-- Container for the item's title and release date -->
            <section>
                <!-- Display the item's title or name, fallback to 'name' if 'title' is not available -->
                <h3 class="text-center mt-1">{{ data.title || data.name }}</h3>
                <!-- Container for displaying the release date -->
                <div class="flex justify-between sm:text-sm text-[0.65rem] mt-1 px-3 sm:px-4">
                    <div>{{ data.release_date || data.first_air_date }}</div>
                </div>
            </section>
        </article>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import noPosterUrl from '../assets/no-poster.png';  // Import path for the fallback image used in the template

// Use ref for the noPosterUrl although it's static; this is to maintain reactivity if changes are ever needed
const noPosterUrlRef = ref(noPosterUrl);

// Define the component's expected props using 'defineProps', specifying that 'content' should be an array
const props = defineProps({
    content: Array  // 'content' contains data about the items to display
});
</script>
