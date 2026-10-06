<script setup lang="ts">
import { computed, ref } from 'vue'
//@ts-ignore
import { experiences } from '../assets/experience'

type Experience = {
  company: string
  location: string
  position: string
  duration: string
  type: string
  description: string[]
  logo?: string
  url?: string
}

const portfolioExperiences = experiences as Experience[]
const filter = ref<'all' | 'Full-time' | 'Consulting' | 'Part-time'>('all')

const filters = [
  { id: 'all' as const, label: 'All' },
  { id: 'Full-time' as const, label: 'Full-time' },
  { id: 'Consulting' as const, label: 'Consulting' },
  { id: 'Part-time' as const, label: 'Part-time' }
]

const filtered = computed(() => {
  if (filter.value === 'all') return portfolioExperiences
  return portfolioExperiences.filter((e) => e.type === filter.value)
})

function isCurrent(duration: string) {
  return /present/i.test(duration)
}

function parseBullet(text: string) {
  const idx = text.indexOf(':')
  if (idx > 0 && idx < 48) {
    return { label: text.slice(0, idx).trim(), body: text.slice(idx + 1).trim() }
  }
  return { label: '', body: text }
}
</script>

<template>
  <main class="max-w-7xl mx-auto px-6 lg:px-10 py-4 page-enter">
    <header class="mb-8 max-w-3xl">
      <h2 class="section-title mb-2">Experience</h2>
      <p class="text-slate-500 text-sm md:text-base leading-relaxed">
        Building and leading production systems across automotive manufacturing, higher education, and enterprise software.
      </p>

      <div class="flex flex-wrap gap-2 mt-6" role="tablist" aria-label="Filter experience">
        <button
          v-for="f in filters"
          :key="f.id"
          type="button"
          role="tab"
          :aria-selected="filter === f.id"
          class="filter-chip"
          :class="{ 'filter-chip-active': filter === f.id }"
          @click="filter = f.id"
        >
          {{ f.label }}
        </button>
      </div>
    </header>

    <ol class="timeline">
      <li
        v-for="(experience, index) in filtered"
        :key="`${experience.company}-${experience.position}-${experience.duration}`"
        class="timeline-item"
        :style="{ animationDelay: `${index * 0.06}s` }"
      >
        <div class="timeline-rail" aria-hidden="true">
          <span
            class="timeline-dot"
            :class="isCurrent(experience.duration) ? 'timeline-dot-current' : ''"
          ></span>
        </div>

        <article
          class="exp-card"
          :class="{ 'exp-card-current': isCurrent(experience.duration) }"
        >
          <div class="flex items-start gap-4 mb-4">
            <div
              v-if="experience.logo"
              class="exp-logo"
            >
              <img :src="experience.logo" alt="" class="w-full h-full object-contain p-1.5" />
            </div>
            <div
              v-else
              class="exp-logo exp-logo-fallback font-display font-semibold text-slate-500"
            >
              {{ experience.company.charAt(0) }}
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
                <h3 class="text-base md:text-lg font-semibold text-slate-900 tracking-tight">
                  {{ experience.position }}
                </h3>
                <span
                  v-if="isCurrent(experience.duration)"
                  class="text-[11px] font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full"
                >
                  Current
                </span>
              </div>

              <div class="flex flex-wrap items-baseline gap-x-2 text-sm mb-2">
                <component
                  :is="experience.url ? 'a' : 'span'"
                  :href="experience.url || undefined"
                  :target="experience.url ? '_blank' : undefined"
                  :rel="experience.url ? 'noopener noreferrer' : undefined"
                  class="font-medium text-slate-700"
                  :class="experience.url ? 'hover:text-slate-900 hover:underline underline-offset-2' : ''"
                >
                  {{ experience.company }}
                </component>
                <span class="text-slate-300">·</span>
                <span class="text-slate-500">{{ experience.location }}</span>
              </div>

              <p class="text-sm text-slate-500 tabular-nums">
                {{ experience.duration }}
                <span class="text-slate-300 mx-1.5">·</span>
                {{ experience.type }}
              </p>
            </div>
          </div>

          <ul class="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-2.5">
            <li
              v-for="description in experience.description"
              :key="description"
              class="text-sm leading-relaxed"
            >
              <template v-for="bullet in [parseBullet(description)]" :key="bullet.body">
                <template v-if="bullet.label">
                  <span class="font-semibold text-slate-800">{{ bullet.label }}</span>
                  <span class="text-slate-600"> — {{ bullet.body }}</span>
                </template>
                <span v-else class="text-slate-600">{{ bullet.body }}</span>
              </template>
            </li>
          </ul>
        </article>
      </li>
    </ol>

    <p v-if="!filtered.length" class="text-center text-slate-500 text-sm py-12">
      No roles in this category.
    </p>
  </main>
</template>

<style scoped>
.page-enter {
  animation: fade-in 0.55s ease-out;
}

.filter-chip {
  padding: 0.35rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #64748b;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid #e2e8f0;
  border-radius: 999px;
  transition: color 0.15s ease, background 0.15s ease, border-color 0.15s ease;
}

.filter-chip:hover {
  color: #0f172a;
  border-color: #cbd5e1;
}

.filter-chip-active {
  color: #fff;
  background: #1e293b;
  border-color: #1e293b;
}

.filter-chip-active:hover {
  color: #fff;
  background: #0f172a;
  border-color: #0f172a;
}

.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timeline-item {
  display: grid;
  grid-template-columns: 1.25rem 1fr;
  gap: 1rem;
  animation: fade-in 0.5s ease-out both;
}

.timeline-rail {
  position: relative;
  display: flex;
  justify-content: center;
}

.timeline-rail::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(180deg, #cbd5e1, #e2e8f0 70%, transparent);
}

.timeline-item:last-child .timeline-rail::before {
  bottom: 40%;
}

.timeline-dot {
  position: relative;
  z-index: 1;
  margin-top: 1.65rem;
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 999px;
  background: #94a3b8;
  box-shadow: 0 0 0 4px #f1f5f9;
  flex-shrink: 0;
}

.timeline-dot-current {
  background: #059669;
  box-shadow: 0 0 0 4px #ecfdf5, 0 0 0 1px #a7f3d0;
}

.exp-card {
  margin-bottom: 1.25rem;
  padding: 1.35rem 1.35rem 1.4rem;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(226, 232, 240, 0.95);
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03), 0 10px 28px rgba(15, 23, 42, 0.04);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.exp-card:hover {
  border-color: #cbd5e1;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06), 0 18px 36px rgba(15, 23, 42, 0.05);
}

.exp-card-current {
  border-color: #a7f3d0;
  background: linear-gradient(180deg, rgba(236, 253, 245, 0.55), rgba(255, 255, 255, 0.88));
}

.exp-logo {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  overflow: hidden;
  flex-shrink: 0;
  background: #fff;
  border: 1px solid #f1f5f9;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
}

.exp-logo-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
  border-color: #e2e8f0;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  .timeline-item {
    grid-template-columns: 0.85rem 1fr;
    gap: 0.75rem;
  }

  .exp-card {
    padding: 1.1rem;
  }
}
</style>
