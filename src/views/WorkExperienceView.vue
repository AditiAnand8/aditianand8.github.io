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
      <h2 class="text-3xl font-bold mb-8 bg-gradient-to-r from-slate-700 to-gray-700 bg-clip-text text-transparent">
        Work Experience
      </h2>
      <div class="space-y-8">
        <div
          v-for="experience in portfolioExperiences"
          :key="experience.company"
          class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20 p-6"
        >
          <div class="flex items-start space-x-6 mb-6">
            <div v-if="experience.logo" class="w-20 h-20 rounded-lg shadow-md overflow-hidden flex-shrink-0">
              <img
                :src="experience.logo"
                alt="Company Logo"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 mb-3">
                <h3 class="text-xl font-semibold text-gray-800">
                  {{ experience.company }}
                </h3>
                <span class="px-3 py-1 bg-gradient-to-r from-slate-600 to-gray-700 text-white text-sm rounded-full font-medium">
                  {{ experience.position }}
                </span>
              </div>
              <div class="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                <span class="flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  {{ experience.duration }}
                </span>
                <span class="flex items-center">
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {{ experience.location }}
                </span>
                <span class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                  {{ experience.type }}
                </span>
              </div>
            </div>
          </div>
          
          <div class="mb-6">
            <h4 class="text-sm font-semibold text-gray-600 mb-3">Key Responsibilities & Achievements:</h4>
            <ul class="space-y-2">
              <li 
                v-for="description in experience.description" 
                :key="description"
                class="text-sm text-gray-700 flex items-start"
              >
                <span class="w-2 h-2 bg-gradient-to-r from-slate-600 to-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {{ description }}
              </li>
            </ul>
          </div>
          
          <div class="flex justify-end">
            <a
              v-if="experience.url"
              :href="experience.url"
              target="_blank"
              class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-600 to-gray-700 text-white rounded-lg hover:from-slate-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-medium"
            >
              Learn More
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Animation for page load */
section {
  animation: fade-in 0.8s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stagger animation for cards */
section > div > div:nth-child(1) { animation-delay: 0.1s; }
section > div > div:nth-child(2) { animation-delay: 0.2s; }
section > div > div:nth-child(3) { animation-delay: 0.3s; }
section > div > div:nth-child(4) { animation-delay: 0.4s; }
</style>
