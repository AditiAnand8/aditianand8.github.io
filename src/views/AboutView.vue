<template>
  <div class="about max-w-6xl mx-auto p-6 lg:p-8">
    <!-- Education Section -->
    <section class="education mb-16">
      <h2 class="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-700 to-slate-700 bg-clip-text text-transparent">
        Education
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div 
          v-for="edu in portfolio.education" 
          :key="edu.degree" 
          class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20 p-6 flex items-start"
        >
          <div class="w-20 h-20 rounded-lg shadow-md overflow-hidden mr-6 flex-shrink-0">
            <img :src="edu.logo" alt="Institution Logo" class="w-full h-full object-contain bg-white" />
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ edu.degree }}</h3>
            <p class="text-gray-600 mb-3">{{ edu.institution }} ({{ edu.year }})</p>
            <a 
              :href="edu.url" 
              target="_blank" 
              class="inline-flex items-center text-slate-600 hover:text-slate-800 font-medium transition-colors duration-300"
            >
              Learn More
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section class="certifications mb-16">
      <h2 class="text-3xl font-bold mb-8 bg-gradient-to-r from-slate-700 to-gray-700 bg-clip-text text-transparent">
        Certifications
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div 
          v-for="cert in portfolio.certification" 
          :key="cert.title" 
          class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20 p-6 flex items-start"
        >
          <div class="w-20 h-20 rounded-lg shadow-md overflow-hidden mr-6 flex-shrink-0">
            <img :src="cert.logo" alt="Certification Logo" class="w-full h-full object-cover" />
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ cert.title }}</h3>
            <p class="text-gray-600 mb-3">{{ cert.institution }} ({{ cert.year }})</p>
            <a 
              :href="cert.url" 
              target="_blank" 
              class="inline-flex items-center text-slate-600 hover:text-slate-800 font-medium transition-colors duration-300"
            >
              View Certification
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills mb-16">
      <h2 class="text-3xl font-bold mb-8 bg-gradient-to-r from-slate-700 to-gray-700 bg-clip-text text-transparent">
        Skills
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="skill in portfolio.skills" 
          :key="skill.title" 
          class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20 p-6"
        >
          <h3 class="text-xl font-semibold text-gray-800 mb-4">{{ skill.title }}</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="val in skill.values"
              :key="val"
              class="bg-gradient-to-r from-slate-600 to-gray-700 text-white py-2 px-4 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {{ val }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { portfolioContent } from '../assets/about'
const portfolio = portfolioContent
</script>

<style scoped>
.about {
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
.skills > div > div:nth-child(1) { animation-delay: 0.1s; }
.skills > div > div:nth-child(2) { animation-delay: 0.2s; }
.skills > div > div:nth-child(3) { animation-delay: 0.3s; }
.skills > div > div:nth-child(4) { animation-delay: 0.4s; }
.skills > div > div:nth-child(5) { animation-delay: 0.5s; }
.skills > div > div:nth-child(6) { animation-delay: 0.6s; }

.education > div > div:nth-child(1) { animation-delay: 0.1s; }
.education > div > div:nth-child(2) { animation-delay: 0.2s; }

.certifications > div > div:nth-child(1) { animation-delay: 0.1s; }
.certifications > div > div:nth-child(2) { animation-delay: 0.2s; }
</style>
