<template>
    <div class="h-screen flex items-center justify-center bg-gray-800 text-white">
        <form @submit.prevent="submitForm" class="bg-white p-8 rounded shadow-md max-w-lg w-full">
            <h1 class="text-xl font-bold mb-4">Contact Us</h1>
            <div class="mb-4">
                <label for="fullName" class="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                <input type="text" id="fullName" v-model="fullName" required
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div class="mb-6">
                <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea id="message" v-model="message" required
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="4"></textarea>
            </div>
            <div class="flex items-center justify-between">
                <button type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Send Message
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const fullName = ref('');
const message = ref('');

const submitForm = () => {
    // Here you would handle form submission, such as sending data to a server
    alert(`Name: ${fullName.value}\nMessage: ${message.value}`);
    // Reset form fields after submission
    fullName.value = '';
    message.value = '';
};
</script>
