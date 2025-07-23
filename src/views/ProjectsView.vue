<template>
  <div class="max-w-6xl mx-auto p-6 lg:p-8">
    <!-- Projects Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8 bg-gradient-to-r from-slate-700 to-gray-700 bg-clip-text text-transparent">
        Projects
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          v-for="project in portfolio.projects"
          :key="project.name"
          class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20 p-6"
        >
          <div class="flex items-start mb-4">
            <div v-if="project.logo" class="w-16 h-16 rounded-lg shadow-md overflow-hidden mr-4 flex-shrink-0">
              <img
                :src="project.logo"
                alt="Project Logo"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                {{ project.name }}
              </h3>
            </div>
          </div>
          <p class="text-gray-700 mb-4 leading-relaxed">{{ project.description }}</p>
          <div class="mb-4">
            <h4 class="text-sm font-semibold text-gray-600 mb-2">Key Contributions:</h4>
            <ul class="space-y-2">
              <li 
                v-for="contribution in project.contributions" 
                :key="contribution"
                class="text-sm text-gray-600 flex items-start"
              >
                <span class="w-2 h-2 bg-gradient-to-r from-slate-600 to-gray-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {{ contribution }}
              </li>
            </ul>
          </div>
          <div class="flex justify-end">
            <a
              v-if="project.url"
              :href="project.url"
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

    <!-- Research Section -->
    <section>
      <h2 class="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-700 to-slate-700 bg-clip-text text-transparent">
        Research
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          v-for="research in portfolio.research"
          :key="research.name"
          class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20 p-6"
        >
          <div class="flex items-start mb-4">
            <div v-if="research.logo" class="w-16 h-16 rounded-lg shadow-md overflow-hidden mr-4 flex-shrink-0">
              <img
                :src="research.logo"
                alt="Research Logo"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">
                {{ research.name }}
              </h3>
            </div>
          </div>
          <p class="text-gray-700 mb-4 leading-relaxed">{{ research.description }}</p>
          <div class="mb-4">
            <h4 class="text-sm font-semibold text-gray-600 mb-2">Key Contributions:</h4>
            <ul class="space-y-2">
              <li 
                v-for="contribution in research.contributions" 
                :key="contribution"
                class="text-sm text-gray-600 flex items-start"
              >
                <span class="w-2 h-2 bg-gradient-to-r from-gray-600 to-slate-700 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {{ contribution }}
              </li>
            </ul>
          </div>
          <div class="flex justify-end">
            <a
              v-if="research.url"
              :href="research.url"
              target="_blank"
              class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-600 to-slate-700 text-white rounded-lg hover:from-gray-700 hover:to-slate-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg font-medium"
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
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { portfolioContent } from '../assets/projects'
const portfolio = portfolioContent
</script>

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
