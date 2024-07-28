<template>
  <div class="about">
    <h1>About me!</h1>
    <p>{{ portfolio.about.professionalSummary }}</p>
    <br/>
    <section class="education mb-18">
      <h2 class="text-2xl font-bold mb-4">Education</h2>
      <div v-for="edu in portfolio.education" :key="edu.degree" class="flex items-center mb-6">
        <img :src="edu.logo" alt="Institution Logo" class="w-20 h-20 object-contain mr-4" />
        <div>
          <h3 class="text-xl font-semibold">{{ edu.degree }}</h3>
          <p class="text-gray-700">{{ edu.institution }} ({{ edu.year }})</p>
          <a :href="edu.url" target="_blank" class="text-blue-500 hover:underline">Learn More</a>
        </div>
      </div>
    </section>
    <br/>
    <section class="education mb-10">
      <h2 class="text-2xl font-bold mb-4">Certifications</h2>
      <div v-for="cert in portfolio.certification" :key="cert.title" class="flex items-center mb-6">
        <img :src="cert.logo" alt="Certification Logo" class="w-20 h-20 object-contain mr-4" />
        <div>
          <h3 class="text-xl font-semibold">{{ cert.title }}</h3>
          <p class="text-gray-700">{{ cert.institution }} ({{ cert.year }})</p>
          <a class="text-blue-500 hover:underline" :href="cert.url" target="_blank">View Certification</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { portfolioContent } from '../../dist/assets/about';
const portfolio = portfolioContent;
</script>

