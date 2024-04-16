<script setup>
// Import ref from Vue's Composition API to handle reactive state management.
import { ref } from 'vue';

// Import custom components used within this component.
import SearchBar from "../components/SearchBar.vue";
import ExploreGallary from "../components/ExploreGallary.vue";

// Define a reactive array to store the search results.
// This will automatically update the DOM wherever it's used when its values change.
const searchResults = ref([]);

// Function to handle updating the search results.
// This function is triggered when the SearchBar component emits a 'search-completed' event.
function handleSearchResults(results) {
    searchResults.value = results; // Update the reactive searchResults array with new results.
}
</script>

<template>
    <!-- SearchBar component which emits 'search-completed' event with the search results -->
    <SearchBar @search-completed="handleSearchResults" />
    <!-- ExploreGallary component displays the contents of searchResults as passed via prop -->
    <ExploreGallary :content="searchResults" />
</template>
