<template>
  <div class="max-w-4xl mx-auto p-6">
    <section class="education mb-8">
      <h2 class="text-2xl font-bold mb-6 text-green-700">Projects</h2>
      <div v-for="edu in portfolio.projects" :key="edu.name" class="flex items-start mb-8">
        <img
          v-if="edu.logo"
          :src="edu.logo"
          alt="Project Logo"
          class="w-20 h-20 object-contain mr-4"
        />
        <div>
          <h3 class="text-xl font-semibold text-green-800">
            {{ edu.name }}
          </h3>
          <p class="text-gray-700">Description: {{ edu.description }}</p>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li v-for="contribution in edu.contributions" :key="contribution">
              {{ contribution }}
            </li>
          </ul>
          <a
            v-if="edu.url"
            :href="edu.url"
            target="_blank"
            class="text-green-600 hover:text-green-800 hover:underline mt-2 block"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>

    <section class="education">
      <h2 class="text-2xl font-bold mb-6 text-green-700">Research</h2>
      <div v-for="cert in portfolio.research" :key="cert.title" class="flex items-start mb-8">
        <img
          v-if="cert.logo"
          :src="cert.logo"
          alt="Certification Logo"
          class="w-20 h-20 object-contain mr-4"
        />
        <div>
          <h3 class="text-xl font-semibold text-green-800">
            {{ cert.name }}
          </h3>
          <p class="text-gray-700">Description: {{ cert.description }}</p>
          <ul class="list-disc list-inside text-gray-700 space-y-2">
            <li v-for="contribution in cert.contributions" :key="contribution">
              {{ contribution }}
            </li>
          </ul>
          <a
            v-if="cert.url"
            :href="cert.url"
            target="_blank"
            class="text-green-600 hover:text-green-800 hover:underline mt-2 block"
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
// import { portfolioContent } from '../assets/projects'
import { portfolioContent } from '../../dist/assets/ProjectsView-BuGCyIOM'
const portfolio = portfolioContent
</script>

<style scoped>
/* Optional: Additional styles can go here */
</style>
