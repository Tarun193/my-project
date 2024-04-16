<template>
    <header class="bg-stone-950 text-white drop-shadow-2xl sticky top-0 left-0 z-50">
        <section class="max-w-4xl mx-auto flex justify-between items-center p-4">
            <router-link to="/">
                <h1 class="text-2xl sm:text-3xl">
                    cinephile<span class="text-emerald-400">Hub</span> 🎬
                </h1>
            </router-link>
            <nav>
                <router-link to="/" class="px-4 py-2 hover:bg-stone-800 rounded">Home</router-link>
                <router-link to="/about" class="px-4 py-2 hover:bg-stone-800 rounded">About</router-link>
                <router-link to="/contact" class="px-4 py-2 hover:bg-stone-800 rounded">Contact</router-link>
            </nav>
        </section>
    </header>
</template>
