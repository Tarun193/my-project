<script setup>
// Importing Header and Footer components from the components directory.
// These components are used to structure the basic layout of the page.
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
<template>
  <Header></Header>
  <!-- Main content area where router-managed views will be displayed.
       The `router-view` is a functional component that serves as an outlet
       where the matched component by the router will render.
       `flex-1` ensures it flexibly takes up the space between header and footer. -->
  <router-view class="flex-1"></router-view>
  <Footer></Footer>
</template>
