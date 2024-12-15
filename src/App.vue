<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Base from './components/Base.vue'
</script>

<template>
  <div class="w-full min-h-screen flex flex-col">
    <header class="bg-white text-gray-800 shadow-md fixed top-0 w-full z-10">
      <nav class="container mx-auto flex justify-center lg:justify-start custom-space py-4">
        <RouterLink
          to="/"
          class="text-gray-800 hover:text-gray-500"
          active-class="active-link"
          exact-active-class="exact-active-link"
          >Home</RouterLink
        >
        <RouterLink
          to="/about"
          class="text-gray-800 hover:text-gray-500"
          active-class="active-link"
          exact-active-class="exact-active-link"
          >About</RouterLink
        >
        <RouterLink
          to="/experience"
          class="text-gray-800 hover:text-gray-500"
          active-class="active-link"
          exact-active-class="exact-active-link"
          >Work Experience</RouterLink
        >
        <RouterLink
          to="/projects"
          class="text-gray-800 hover:text-gray-500"
          active-class="active-link"
          exact-active-class="exact-active-link"
          >Projects</RouterLink
        >
        <RouterLink
          to="/contact"
          class="text-gray-800 hover:text-gray-500"
          active-class="active-link"
          exact-active-class="exact-active-link"
          >Contact</RouterLink
        >
      </nav>
    </header>
    <main class="pt-20 flex-1">
      <div class="text-center">
        <img
          alt="Aditi Anand picture"
          class="mx-auto mb-8"
          src="@/assets/me-DyFzbGyN.png"
          width="400"
          height="325"
        />
        <div class="wrapper mx-auto max-w-4xl">
          <Base msg="Aditi Anand" />
        </div>
      </div>
      <RouterView />
    </main>
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto text-center">
        <p class="text-sm">
          &copy; {{ new Date().getFullYear() }} Aditi Anand. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Additional styles for active links */
.active-link {
  font-weight: bold;
  border-bottom: 2px solid #4a5568; /* Tailwind color: gray-700 */
}

.exact-active-link {
  color: #2d3748; /* Tailwind color: gray-800 */
}

/* Footer styles */
footer {
  background-color: #2d3748; /* Tailwind color: gray-800 */
}
.custom-space > *:not(:last-child) {
  margin-right: 1.5rem; /* Adjust this value as needed */
}
</style>
