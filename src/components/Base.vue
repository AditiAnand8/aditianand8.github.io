<script setup lang="ts">
import { RouterLink } from 'vue-router'
// @ts-ignore
import { portfolioContent } from '../assets/about'

defineProps<{
  msg: string
}>()

const portfolio = portfolioContent

const updates = [
  {
    title: 'Promoted to Staff Software Engineer at Rivian',
    detail: 'August 2026'
  },
  {
    title: '2nd Place, Kellogg Design Challenge',
    detail: '2026'
  },
  {
    title: 'MBA at University of Michigan Ross',
    detail: 'May 2025 – May 2027'
  }
]
</script>

<template>
  <div class="greetings text-center px-2">
    <h1 class="font-display text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-3 animate-fade-in">
      {{ msg }}
    </h1>
    <p class="text-lg md:text-xl text-slate-600 font-medium mb-1">
      {{ portfolio.about.title }}
    </p>
    <p class="text-sm uppercase tracking-[0.18em] text-slate-400 mb-6">
      {{ portfolio.about.location }}
    </p>

    <p class="max-w-2xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed mb-8">
      Staff engineer leading Rivian’s real-time replenishment platform — event-driven systems, team leadership, and production reliability at factory scale.
    </p>

    <div class="flex flex-wrap justify-center gap-3 mb-10">
      <RouterLink to="/experience" class="btn-primary">
        View experience
      </RouterLink>
      <RouterLink
        to="/contact"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white/80 border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-white transition-colors"
      >
        Get in touch
      </RouterLink>
    </div>

    <div class="text-left max-w-xl mx-auto">
      <h2 class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4">
        What's New
      </h2>
      <ul class="space-y-0 border-l border-slate-300/80">
        <li
          v-for="(item, i) in updates"
          :key="item.title"
          class="update-row pl-5 py-3 relative"
          :style="{ animationDelay: `${0.15 + i * 0.1}s` }"
        >
          <span class="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-700 ring-4 ring-slate-100"></span>
          <p class="text-slate-800 font-medium leading-snug">{{ item.title }}</p>
          <p class="text-sm text-slate-500 mt-0.5">{{ item.detail }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.update-row {
  animation: fade-in 0.6s ease-out both;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.7s ease-out;
}
</style>
