<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Base from './components/Base.vue'
import SEO from './components/SEO.vue'

const route = useRoute()
</script>

<template>
  <SEO />
  <div class="w-full min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden">
    <!-- Decorative bubbles below nav bar -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <!-- Large, more visible bubbles -->
      <div class="absolute top-32 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/70 to-slate-300/80 rounded-full blur-2xl"></div>
      <div class="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-purple-200/80 to-gray-200/80 rounded-full blur-2xl"></div>
      <div class="absolute bottom-32 left-32 w-64 h-64 bg-gradient-to-tr from-pink-200/70 to-slate-300/80 rounded-full blur-xl"></div>
      <div class="absolute bottom-10 right-40 w-60 h-60 bg-gradient-to-tr from-slate-200/90 to-gray-200/90 rounded-full blur-xl"></div>
      <!-- Medium bubbles -->
      <div class="absolute top-1/3 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-100/90 to-gray-200/90 rounded-full blur"></div>
      <div class="absolute bottom-1/4 right-1/3 w-36 h-36 bg-gradient-to-tr from-purple-100/90 to-slate-200/90 rounded-full blur"></div>
      <!-- Small bubbles -->
      <div class="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-blue-200/100 to-gray-300/100 rounded-full"></div>
      <div class="absolute bottom-1/2 right-1/4 w-12 h-12 bg-gradient-to-tr from-pink-200/100 to-slate-300/100 rounded-full"></div>
      <div class="absolute top-1/4 right-1/2 w-10 h-10 bg-gradient-to-br from-purple-100/100 to-gray-200/100 rounded-full"></div>
    </div>

    <!-- Modern Header with Glass Effect -->
    <header class="backdrop-blur-md bg-white/90 border-b border-white/30 shadow-xl fixed top-0 w-full z-50 transition-all duration-300">
      <nav class="container mx-auto flex justify-center lg:justify-start py-6 px-6">
        <RouterLink
          to="/"
          class="nav-link"
          active-class="nav-link-active"
          exact-active-class="nav-link-active"
          >Home</RouterLink
        >
        <RouterLink
          to="/about"
          class="nav-link"
          active-class="nav-link-active"
          exact-active-class="nav-link-active"
          >About</RouterLink
        >
        <RouterLink
          to="/experience"
          class="nav-link"
          active-class="nav-link-active"
          exact-active-class="nav-link-active"
          >Experience</RouterLink
        >
        <RouterLink
          to="/projects"
          class="nav-link"
          active-class="nav-link-active"
          exact-active-class="nav-link-active"
          >Projects</RouterLink
        >
        <RouterLink
          to="/contact"
          class="nav-link"
          active-class="nav-link-active"
          exact-active-class="nav-link-active"
          >Contact</RouterLink
        >
      </nav>
    </header>

    <!-- Main Content with Conditional Hero Section -->
    <main class="pt-24 flex-1 relative z-10">
      <!-- Profile Image - Show on all pages -->
      <div class="text-center mb-6">
        <div class="relative inline-block">
          <!-- Profile image with enhanced styling -->
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <img
              alt="Aditi Anand picture"
              class="relative mx-auto mb-8 rounded-full shadow-2xl border-4 border-white/80 w-72 h-72 object-cover transition-all duration-500 hover:scale-105 hover:shadow-3xl"
              src="@/assets/me.png"
            />
            <!-- Status indicator with animation -->
            <div class="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-slate-500 to-gray-600 rounded-full flex items-center justify-center shadow-lg">
              <div class="w-4 h-4 bg-white rounded-full animate-pulse"></div>
            </div>
            <!-- Decorative elements around profile -->
            <div class="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full opacity-60 animate-bounce-gentle"></div>
            <div class="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-gray-400 to-slate-500 rounded-full opacity-60 animate-bounce-gentle" style="animation-delay: 0.5s;"></div>
          </div>
        </div>
        
        <!-- Enhanced content wrapper - Only show on home page -->
        <div v-if="route.path === '/'" class="wrapper mx-auto max-w-5xl px-6 relative">
          <div class="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-6">
            <Base msg="Aditi Anand" />
          </div>
        </div>
      </div>
      
      <!-- Router View for all pages -->
      <RouterView />
    </main>

    <!-- Modern Footer -->
    <footer class="bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800 text-white py-12 mt-20 relative z-10">
      <div class="container mx-auto text-center px-6">
        <div class="flex justify-center space-x-8 mb-6">
          <a href="https://www.linkedin.com/in/aditi-anandm/" class="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110">
            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://github.com/AditiAnand8" class="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110">
            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
        <div class="border-t border-gray-700 pt-6">
          <p class="text-sm text-gray-400">
            &copy; {{ new Date().getFullYear() }} Aditi Anand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Clean Navigation Styles - Single Indicator Only */
.nav-link {
  margin-right: 2rem;
  position: relative;
  padding: 0.5rem 0;
  color: #6b7280;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #475569;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #374151;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link-active {
  color: #374151;
  font-weight: 600;
}

.nav-link-active::after {
  width: 100%;
}

/* Enhanced shadows */
.shadow-3xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Smooth transitions for all interactive elements */
* {
  transition: all 0.2s ease-in-out;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #475569, #64748b);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #334155, #475569);
}

/* Animation for decorative elements */
@keyframes bounce-gentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-bounce-gentle {
  animation: bounce-gentle 3s infinite;
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px);}
  to { opacity: 1; transform: translateY(0);}
}

/* Fix: Use a valid class for fade-in animation */
.whats-new-fade-in {
  animation: fade-in-up 0.7s cubic-bezier(.4,0,.2,1);
}
</style>
