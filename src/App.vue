<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Base from './components/Base.vue'
import SEO from './components/SEO.vue'

const route = useRoute()
const isHome = computed(() => route.path === '/')

const pageLabel = computed(() => {
  const map: Record<string, string> = {
    '/about': 'About',
    '/experience': 'Experience',
    '/projects': 'Projects',
    '/contact': 'Contact'
  }
  return map[route.path] || ''
})
</script>

<template>
  <SEO />
  <div class="site-shell w-full min-h-screen flex flex-col relative overflow-hidden font-sans">
    <!-- Atmospheric background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div class="absolute -top-24 -left-16 w-[28rem] h-[28rem] rounded-full bg-slate-300/40 blur-3xl animate-drift"></div>
      <div class="absolute top-40 -right-20 w-[32rem] h-[32rem] rounded-full bg-stone-300/35 blur-3xl animate-drift-delayed"></div>
      <div class="absolute bottom-0 left-1/3 w-[24rem] h-[24rem] rounded-full bg-slate-200/50 blur-3xl"></div>
      <div class="absolute inset-0 opacity-[0.035]" style="background-image: radial-gradient(#334155 0.7px, transparent 0.7px); background-size: 18px 18px;"></div>
    </div>

    <!-- Header -->
    <header class="backdrop-blur-xl bg-white/75 border-b border-slate-200/60 sticky top-0 w-full z-50">
      <nav class="container mx-auto flex flex-wrap items-center justify-between gap-y-3 py-3.5 px-6">
        <RouterLink to="/" class="font-display text-lg font-semibold text-slate-900 tracking-tight hover:text-slate-700 transition-colors">
          Aditi Anand
        </RouterLink>
        <div class="flex flex-wrap justify-center gap-x-7 gap-y-2">
          <RouterLink to="/" class="nav-link" active-class="nav-link-active" exact-active-class="nav-link-active">Home</RouterLink>
          <RouterLink to="/about" class="nav-link" active-class="nav-link-active">About</RouterLink>
          <RouterLink to="/experience" class="nav-link" active-class="nav-link-active">Experience</RouterLink>
          <RouterLink to="/projects" class="nav-link" active-class="nav-link-active">Projects</RouterLink>
          <RouterLink to="/contact" class="nav-link" active-class="nav-link-active">Contact</RouterLink>
        </div>
      </nav>
    </header>

    <main class="flex-1 relative z-10 pt-8 pb-4">
      <!-- Home hero -->
      <div v-if="isHome" class="text-center mb-4 px-6">
        <div class="relative inline-block">
          <div class="absolute inset-0 rounded-full bg-gradient-to-br from-slate-400/40 to-stone-400/30 blur-2xl scale-110"></div>
          <img
            alt="Aditi Anand"
            class="relative mx-auto rounded-full object-cover border-[3px] border-white shadow-xl w-56 h-56 md:w-64 md:h-64 mb-6"
            src="@/assets/me.png"
          />
          <div
            class="absolute bottom-6 right-2 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-white shadow-sm"
            title="Open to opportunities"
          ></div>
        </div>
        <div class="mx-auto max-w-4xl">
          <Base msg="Aditi Anand" />
        </div>
      </div>

      <!-- Compact identity strip on inner pages -->
      <div v-else class="max-w-7xl mx-auto px-6 lg:px-10 mb-6">
        <div class="flex items-center gap-4">
          <img
            alt="Aditi Anand"
            class="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
            src="@/assets/me.png"
          />
          <div>
            <p class="font-display text-xl font-semibold text-slate-900 tracking-tight">Aditi Anand</p>
            <p class="text-sm text-slate-500">
              Staff Software Engineer @ Rivian
              <span v-if="pageLabel" class="text-slate-300 mx-1.5">·</span>
              <span v-if="pageLabel" class="text-slate-600">{{ pageLabel }}</span>
            </p>
          </div>
        </div>
      </div>

      <RouterView />
    </main>

    <footer class="relative z-10 mt-16 border-t border-slate-800 bg-slate-900 text-white py-10">
      <div class="container mx-auto text-center px-6">
        <div class="flex justify-center gap-6 mb-6">
          <a
            href="https://www.linkedin.com/in/aditi-anandm/"
            class="text-slate-400 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://github.com/AditiAnand8"
            class="text-slate-400 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
        <p class="text-sm text-slate-500">
          &copy; {{ new Date().getFullYear() }} Aditi Anand
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.site-shell {
  background:
    linear-gradient(165deg, #f8fafc 0%, #f1f5f9 45%, #e7e5e4 100%);
}

.nav-link {
  position: relative;
  padding: 0.35rem 0;
  color: #64748b;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1.5px;
  background: #334155;
  transition: width 0.25s ease;
}

.nav-link:hover {
  color: #1e293b;
}

.nav-link:hover::after,
.nav-link-active::after {
  width: 100%;
}

.nav-link-active {
  color: #0f172a;
  font-weight: 600;
}

@keyframes drift {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(12px, -18px); }
}

.animate-drift {
  animation: drift 18s ease-in-out infinite;
}

.animate-drift-delayed {
  animation: drift 22s ease-in-out infinite reverse;
}
</style>
