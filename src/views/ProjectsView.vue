<template>
  <div class="max-w-6xl mx-auto p-6 lg:p-8">
    <section class="mb-12">
      <h2 class="text-3xl font-bold mb-8 text-green-800">Projects</h2>
      <div
        v-for="edu in portfolio.projects"
        :key="edu.name"
        class="flex items-start mb-8 border-b border-gray-200 pb-6"
      >
        <img
          v-if="edu.logo"
          :src="edu.logo"
          alt="Project Logo"
          class="w-24 h-24 object-contain rounded-lg shadow-md mr-6"
        />
        <div>
          <h3 class="text-2xl font-semibold text-green-700 mb-2">
            {{ edu.name }}
          </h3>
          <p class="text-gray-700 mb-2">Description: {{ edu.description }}</p>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-5">
            <li v-for="contribution in edu.contributions" :key="contribution">
              {{ contribution }}
            </li>
          </ul>
          <a
            v-if="edu.url"
            :href="edu.url"
            target="_blank"
            class="text-green-600 hover:text-green-800 hover:bg-green-100 hover:underline text-sm py-1 px-2 rounded transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-3xl font-bold mb-8 text-green-800">Research</h2>
      <div
        v-for="cert in portfolio.research"
        :key="cert.title"
        class="flex items-start mb-8 border-b border-gray-200 pb-6"
      >
        <img
          v-if="cert.logo"
          :src="cert.logo"
          alt="Certification Logo"
          class="w-24 h-24 object-contain rounded-lg shadow-md mr-6"
        />
        <div>
          <h3 class="text-2xl font-semibold text-green-700 mb-2">
            {{ cert.name }}
          </h3>
          <p class="text-gray-700 mb-2">Description: {{ cert.description }}</p>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-5">
            <li v-for="contribution in cert.contributions" :key="contribution">
              {{ contribution }}
            </li>
          </ul>
          <a
            v-if="cert.url"
            :href="cert.url"
            target="_blank"
            class="text-green-600 hover:text-green-800 hover:bg-green-100 hover:underline text-sm py-1 px-2 rounded transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
//import { portfolioContent } from '../assets/projects'
import { portfolioContent } from '../../dist/assets/ProjectsView-CQXdB31O-BeR_xheC-B2sPJIKo'
const portfolio = portfolioContent
</script>

<style scoped>
/* Optional: Additional styles can go here */

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(150, 7%, 65%, 0.2);
  }
}
</style>
