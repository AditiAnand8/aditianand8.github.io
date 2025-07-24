<script setup lang="ts">
defineProps<{
  msg: string
}>()
// @ts-ignore
import { portfolioContent } from '../assets/about'

const portfolio = portfolioContent
</script>

<template>
  <div class="greetings">
    <!-- Enhanced heading with better typography -->
    <div class="mb-8">
      <h2 class="text-5xl font-bold bg-gradient-to-r from-slate-700 via-gray-700 to-slate-800 bg-clip-text text-transparent mb-4 animate-fade-in leading-tight">
        {{ msg }}
      </h2>
      <div class="flex items-center justify-center gap-3 mb-6">
        <div class="w-1 h-1 bg-slate-400 rounded-full"></div>
        <span class="text-xl font-medium text-slate-600">{{ portfolio.about.location }}</span>
        <div class="w-1 h-1 bg-slate-400 rounded-full"></div>
      </div>
    </div>

    <!-- Enhanced content with better layout -->
    <div class="max-w-4xl mx-auto">
      <div class="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-8 mb-8 border border-slate-200/50">
        
        <!-- Enhanced skill tags with better styling -->
        <div class="flex flex-wrap justify-center gap-4">
          <span class="px-6 py-3 bg-gradient-to-r from-slate-600 to-gray-700 text-white rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-slate-700 hover:to-gray-800">
            Software Engineer
          </span>
          <span class="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-gray-700 hover:to-gray-800">
            Rivian
          </span>
          <span class="px-6 py-3 bg-gradient-to-r from-zinc-600 to-zinc-700 text-white rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-zinc-700 hover:to-zinc-800">
            Full Stack
          </span>
        </div>
        <hr class="my-6 border-t border-slate-200" />
        <div class="mt-8">
          <div class="flex items-center mb-3">
            <span class="inline-block w-2 h-2 bg-gradient-to-r from-slate-500 to-slate-700 rounded-full mr-2"></span>
            <h2 class="text-lg font-semibold text-slate-800 tracking-tight">What's New</h2>
          </div>
          <div class="bg-gradient-to-r from-slate-50 to-gray-100 rounded-lg shadow-sm border border-slate-100 px-5 py-4">
            <ul class="space-y-3">
              <li class="flex items-center text-base text-slate-700">
                <span class="mr-3 text-xl">🚗</span>
                <div class="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <span>Started working at <span class="font-semibold text-slate-900">Rivian</span></span>
                  <span class="text-sm text-slate-500">• June 2025</span>
                </div>
              </li>
              <li class="flex items-center text-base text-slate-700">
                <span class="mr-3 text-xl">🎓</span>
                <div class="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <span>Started my <span class="font-semibold text-slate-900">MBA</span> at <span class="font-semibold text-slate-900">University of Michigan Ross</span></span>
                  <span class="text-sm text-slate-500">• May 2025</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.greetings {
  text-align: center;
  padding: 2rem 0;
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

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-slide-up {
  animation: slide-up 1s ease-out 0.3s both;
}

@media (min-width: 1404px) {
  .greetings {
    text-align: center;
  }
}
</style>
