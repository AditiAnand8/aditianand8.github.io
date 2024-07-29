<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
// @ts-ignore
// import { experiences } from '../assets/experience'
import { experiences } from '../../dist/assets/WorkExperienceView-Cbkh3NRW'
const portfolioExperiences = experiences
</script>

<template>
  <main class="max-w-4xl mx-auto p-6">
    <section>
      <h2 class="text-2xl font-bold mb-6 text-green-700">Work Experience</h2>
      <div v-for="experience in portfolioExperiences" :key="experience.company" class="mb-8">
        <div class="flex items-center mb-4">
          <img
            :src="experience.logo"
            alt="Institution Logo"
            class="w-20 h-20 object-contain mr-4"
          />
          <div>
            <h3 class="text-xl font-semibold text-green-800">
              {{ experience.company }} - ({{ experience.position }})
            </h3>
            <p class="text-gray-700 text-sm">{{ experience.duration }}</p>
          </div>
        </div>
        <div class="ml-24">
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li v-for="description in experience.description" :key="description">
              {{ description }}
            </li>
          </ul>
          <a
            :href="experience.url"
            target="_blank"
            class="block mt-4 text-green-600 hover:text-green-800 hover:underline"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Optional: Additional styles can go here */
</style>
