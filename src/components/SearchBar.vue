<script setup>
import { ref, defineEmits } from 'vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { API, API_KEY } from "../Utils/api.js";

// Register the search icon from FontAwesome to be available in this component
library.add(faSearch);

// Define the events that this component can emit to its parent components
const emit = defineEmits(['search-completed']);

// Create a reactive reference for the search input
const search = ref("");

// Asynchronous function to handle search operations
const handleSearch = async () => {
  // Only proceed if the search input is not empty after trimming whitespace
  if (search.value.trim()) {
    try {
      // Perform an API request to search for movies based on the entered query
      const response = await API.get(`/search/multi?include_adult=false&api_key=${API_KEY}&language=en-US&page=1&query=${search.value.trim()}`);
      // Emit the search results to a parent component or handle them internally
      console.log(response.data.results);  // Optionally log the search results for debugging
      emit('search-completed', response.data.results);
      // Reset the search field after the query has been processed
      search.value = "";
    } catch (error) {
      // Log errors if the API request fails
      console.error('Search failed:', error);
    }
  }
};
</script>

<template>
  <!-- Search form section, centrally aligned -->
  <section class="flex justify-center w-full py-5">
    <!-- Form with a submission handler that prevents page reload -->
    <form class="relative w-full mx-4 md:mx-0 md:w-1/2" @submit.prevent="handleSearch">
      <!-- Search input field, auto-focused, bound to the search reactive variable -->
      <input class="w-full rounded-full p-2 outline-none bg-slate-500 text-white text-xl" type="text"
        placeholder="Search For Movies" autofocus v-model="search" />
      <!-- Font Awesome icon positioned absolutely within the form -->
      <font-awesome-icon :icon="['fas', 'search']" class="absolute inset-y-0 right-3 my-auto" />
    </form>
  </section>
</template>
