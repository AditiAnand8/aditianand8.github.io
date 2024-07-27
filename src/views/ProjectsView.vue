<template>
  <div class="about">
   
    <section class="education mb-8">
      <h2 class="text-2xl font-bold mb-4">Projects & Research</h2>
      <div v-for="edu in portfolio.projects" :key="edu.degree" class="flex items-center mb-6">
        <img :src="edu.logo" alt="Institution Logo" class="w-20 h-20 object-contain mr-4" />
        <div>
          <h3 class="text-xl font-semibold">{{ edu.name }} - ({{ edu.year }})</h3>
          <p class="text-gray-700">Description: {{ edu.description }}</p>
          <ul v-for="contribution in edu.contributions">
            <li>{{ contribution }}</li>
          </ul>
          <a :href="edu.url" target="_blank" class="text-blue-500 hover:underline">Learn More</a>
        </div>
      </div>
    </section>
    <br/>
    <section class="education mb-8">
      <h2 class="text-2xl font-bold mb-4">Research</h2>
      <div v-for="cert in portfolio.research" :key="cert.title" class="flex items-center mb-6">
        <img :src="cert.logo" alt="Certification Logo" class="w-20 h-20 object-contain mr-4" />
        <div>
          <h3 class="text-xl font-semibold">{{ cert.name }}</h3>
          <p class="text-gray-700">{{ cert.institution }} ({{ cert.year }})</p>
          <a class="text-blue-500 hover:underline" :href="cert.url" target="_blank">View Certification</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { portfolioContent } from '../assets/projects';
const portfolio = portfolioContent;
</script>

