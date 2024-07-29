<template>
  <div class="about max-w-4xl mx-auto p-6">
    <!-- <p class="text-lg text-gray-700 mb-6">{{ portfolio.about.professionalSummary }}</p> -->

    <section class="skills mb-12">
      <h2 class="text-2xl font-bold mb-6 text-green-700">Skills</h2>
      <div v-for="skill in portfolio.skills" :key="skill.title" class="mb-4">
        <h3 class="text-xl font-semibold text-gray-800">{{ skill.title }}</h3>
        <div class="text-gray-700 flex flex-wrap">
          <span
            v-for="val in skill.values"
            :key="val"
            class="bg-green-100 text-green-800 py-1 px-3 rounded-full mr-2 mb-2"
          >
            {{ val }}
          </span>
        </div>
      </div>
    </section>

    <section class="education mb-12">
      <h2 class="text-2xl font-bold mb-6 text-green-700">Education</h2>
      <div v-for="edu in portfolio.education" :key="edu.degree" class="flex items-center mb-6">
        <img :src="edu.logo" alt="Institution Logo" class="w-20 h-20 object-contain mr-4" />
        <div>
          <h3 class="text-xl font-semibold text-gray-800">{{ edu.degree }}</h3>
          <p class="text-gray-700">{{ edu.institution }} ({{ edu.year }})</p>
          <a :href="edu.url" target="_blank" class="text-green-500 hover:underline">Learn More</a>
        </div>
      </div>
    </section>

    <section class="certifications mb-12">
      <h2 class="text-2xl font-bold mb-6 text-green-700">Certifications</h2>
      <div v-for="cert in portfolio.certification" :key="cert.title" class="flex items-center mb-6">
        <img :src="cert.logo" alt="Certification Logo" class="w-20 h-20 object-contain mr-4" />
        <div>
          <h3 class="text-xl font-semibold text-gray-800">{{ cert.title }}</h3>
          <p class="text-gray-700">{{ cert.institution }} ({{ cert.year }})</p>
          <a :href="cert.url" target="_blank" class="text-green-500 hover:underline"
            >View Certification</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
// import { portfolioContent } from '../assets/about'
import { portfolioContent } from '../../dist/assets/AboutView-DILhhurP'
const portfolio = portfolioContent
</script>

<style scoped>
.about {
  max-width: 768px;
  margin: 0 auto;
  padding: 1.5rem;
}
</style>
