<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
//@ts-ignore
import { experiences } from '../assets/experience'
//import { experiences } from '../../dist/assets/WorkExperienceView-BMsvl__l'
const portfolioExperiences = experiences
</script>

<template>
  <main class="max-w-6xl mx-auto p-6 lg:p-8">
    <section>
      <h2 class="text-3xl font-bold mb-8 text-green-800">Work Experience</h2>
      <div
        v-for="experience in portfolioExperiences"
        :key="experience.company"
        class="mb-10 border-b border-gray-200 pb-6"
      >
        <div class="flex items-start space-x-6 mb-6">
          <img
            v-if="experience.logo"
            :src="experience.logo"
            alt="Institution Logo"
            class="w-24 h-24 object-contain rounded-lg shadow-md"
          />
          <div>
            <h3 class="text-2xl font-semibold text-green-700 mb-2">
              {{ experience.company }} -
              <span class="text-green-600">({{ experience.position }})</span>
            </h3>
            <p class="text-gray-600 text-sm mb-1">{{ experience.duration }}</p>
            <p class="text-gray-600 text-sm mb-1">{{ experience.location }}</p>
            <p class="text-gray-600 text-sm mb-2">{{ experience.type }}</p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-5">
              <li v-for="description in experience.description" :key="description">
                {{ description }}
              </li>
            </ul>
            <a
              v-if="experience.url"
              :href="experience.url"
              target="_blank"
              class="text-green-600 hover:text-green-800 hover:bg-green-100 hover:underline text-sm py-1 px-2 rounded transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

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
