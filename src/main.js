// Import the `createApp` function from the Vue.js framework to start a new application.
import { createApp } from 'vue'

// Import global styles for the entire application.
import './style.css'

// Import the main App component that serves as the root of the Vue application.
import App from './App.vue'

// Import necessary router functions to set up and manage SPA (Single Page Application) navigation.
import { createRouter, createWebHistory } from 'vue-router';

// Import views that will be used as pages.
import Home from './views/Home.vue';
import About from './views/about.vue';
import Contact from './views/contact.vue';

// Define the routes for the application, mapping path to component.
// Each route object maps a URL path to a Vue component.
const routes = [
    {
        path: '/', // The root path of the website.
        name: 'Home', // A name assigned to this route for easier identification.
        component: Home // The component that will be loaded when this route is visited.
    },
    {
        path: '/about', // The path for the About page.
        name: 'About', // A name assigned to this route.
        component: About // The component to load for the About page.
    },
    {
        path: '/contact', // The path for the About page.
        name: 'Contact', // A name assigned to this route.
        component: Contact // The component to load for the Contact page.
    }
];

// Create a router instance by specifying the 'history' mode and the routes.
// 'createWebHistory' enables HTML5 history mode, which uses the history.pushState API for cleaner URLs.
const router = createRouter({
    history: createWebHistory(), // Use browser history to allow users to navigate with the browser's back and forward buttons.
    routes, // Pass the array of routes to the router.
});

// Create a Vue application instance by passing the root component.
const app = createApp(App);

// Use the router instance in the Vue application to enable routing functionality.
app.use(router);

// Mount the Vue application to the DOM element with the ID 'app'.
// This is where the Vue app will render its content.
app.mount('#app');
