<script setup lang="ts">
import { computed, ref } from 'vue'
//@ts-ignore
import { portfolioContent } from '../assets/about'

const portfolio = portfolioContent
const filter = ref<'all' | 'awards' | 'education' | 'certifications' | 'skills'>('all')

const filters = [
  { id: 'all' as const, label: 'All' },
  { id: 'awards' as const, label: 'Awards' },
  { id: 'education' as const, label: 'Education' },
  { id: 'certifications' as const, label: 'Certifications' },
  { id: 'skills' as const, label: 'Skills' }
]

const summary = computed(() =>
  String(portfolio.about.professionalSummary || '').replace(/\s+/g, ' ').trim()
)

const featuredSet = computed(() => new Set(portfolio.featuredSkills || []))

const skillCount = computed(() =>
  (portfolio.skills || []).reduce((sum: number, group: { values: string[] }) => sum + group.values.length, 0)
)

function showSection(section: typeof filter.value) {
  return filter.value === 'all' || filter.value === section
}

function isFeatured(skill: string) {
  return featuredSet.value.has(skill)
}
</script>

<template>
  <main class="max-w-7xl mx-auto px-6 lg:px-10 py-4 page-enter">
    <header class="mb-8 max-w-3xl">
      <h2 class="section-title mb-2">About</h2>
      <p class="text-slate-500 text-sm md:text-base leading-relaxed mb-5">
        {{ summary }}
      </p>

      <ul v-if="portfolio.about.careerHighlights?.length" class="space-y-2 mb-6">
        <li
          v-for="highlight in portfolio.about.careerHighlights"
          :key="highlight"
          class="text-sm text-slate-600 leading-relaxed pl-3 border-l-2 border-slate-300"
        >
          {{ highlight }}
        </li>
      </ul>

      <div class="flex flex-wrap gap-2" role="tablist" aria-label="Filter about sections">
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

    <section v-if="showSection('awards') && portfolio.awards?.length" class="mb-12">
      <h3 class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-4">Awards</h3>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <article
          v-for="award in portfolio.awards"
          :key="award.title"
          class="exp-card"
        >
          <h4 class="text-base font-semibold text-slate-900 mb-1">{{ award.title }}</h4>
          <p class="text-sm text-slate-500 mb-2">{{ award.institution }} · {{ award.year }}</p>
          <p v-if="award.description" class="text-sm text-slate-600 leading-relaxed">{{ award.description }}</p>
        </article>
      </div>
    </section>

    <section v-if="showSection('education')" class="mb-12">
      <h3 class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-4">Education</h3>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <article
          v-for="edu in portfolio.education"
          :key="edu.degree"
          class="exp-card flex items-start gap-4"
        >
          <div class="exp-logo">
            <img :src="edu.logo" alt="" class="w-full h-full object-contain p-1.5" />
          </div>
          <div class="min-w-0">
            <h4 class="text-base font-semibold text-slate-900 mb-1">{{ edu.degree }}</h4>
            <p class="text-sm text-slate-500 mb-2">{{ edu.institution }} · {{ edu.year }}</p>
            <a
              v-if="edu.url"
              :href="edu.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-medium text-slate-700 hover:underline underline-offset-2"
            >
              Learn more
            </a>
          </div>
        </article>
      </div>
    </section>

    <section v-if="showSection('certifications')" class="mb-12">
      <h3 class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-4">Certifications</h3>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <article
          v-for="cert in portfolio.certification"
          :key="cert.title"
          class="exp-card flex items-start gap-4"
        >
          <div class="exp-logo">
            <img :src="cert.logo" alt="" class="w-full h-full object-contain p-1.5" />
          </div>
          <div class="min-w-0">
            <h4 class="text-base font-semibold text-slate-900 mb-1">{{ cert.title }}</h4>
            <p class="text-sm text-slate-500 mb-2">{{ cert.institution }} · {{ cert.year }}</p>
            <a
              v-if="cert.url"
              :href="cert.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-medium text-slate-700 hover:underline underline-offset-2"
            >
              View certification
            </a>
          </div>
        </article>
      </div>
    </section>

    <section v-if="showSection('skills')" class="mb-4">
      <div class="flex flex-wrap items-end justify-between gap-3 mb-5">
        <div>
          <h3 class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1">Skills</h3>
          <p class="text-sm text-slate-500">Tools and practices used across production systems.</p>
        </div>
        <p class="text-xs text-slate-400 tabular-nums">{{ skillCount }} technologies</p>
      </div>

      <div v-if="portfolio.featuredSkills?.length" class="skills-featured mb-8">
        <div class="skills-featured-glow" aria-hidden="true"></div>
        <div class="skills-featured-mesh" aria-hidden="true"></div>

        <div class="relative z-10">
          <div class="flex flex-wrap items-end justify-between gap-3 mb-6">
            <div>
              <p class="skills-featured-eyebrow">Signature strengths</p>
              <h4 class="skills-featured-title">Core stack</h4>
              <p class="skills-featured-sub">
                The tools I reach for when building systems that have to stay up.
              </p>
            </div>
            <span class="skills-featured-count">
              {{ portfolio.featuredSkills.length }} essentials
            </span>
          </div>

          <div class="skills-featured-grid">
            <span
              v-for="(skill, index) in portfolio.featuredSkills"
              :key="skill"
              class="skill-featured-tile"
              :style="{ animationDelay: `${0.08 + index * 0.07}s` }"
            >
              <span class="skill-featured-index">{{ String(index + 1).padStart(2, '0') }}</span>
              <span class="skill-featured-name">{{ skill }}</span>
            </span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <article
          v-for="(skill, index) in portfolio.skills"
          :key="skill.title"
          class="skills-card"
          :style="{ animationDelay: `${index * 0.05}s` }"
        >
          <div class="flex items-center justify-between gap-3 mb-3">
            <div class="flex items-center gap-2.5 min-w-0">
              <span class="skills-accent" :class="`accent-${skill.accent || 'slate'}`"></span>
              <h4 class="text-sm font-semibold text-slate-900 truncate">{{ skill.title }}</h4>
            </div>
            <span class="text-[11px] font-medium text-slate-400 tabular-nums">
              {{ skill.values.length }}
            </span>
          </div>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="val in skill.values"
              :key="val"
              class="skill-chip"
              :class="{ 'skill-chip-core': isFeatured(val) }"
            >
              {{ val }}
            </span>
          </div>
        </article>
      </div>
    </section>
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

.exp-card {
  padding: 1.25rem 1.35rem;
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

.skills-featured {
  position: relative;
  overflow: hidden;
  padding: 1.75rem 1.5rem 1.6rem;
  border-radius: 1.35rem;
  background:
    radial-gradient(1200px 280px at 10% -20%, rgba(16, 185, 129, 0.22), transparent 55%),
    radial-gradient(900px 260px at 90% 120%, rgba(148, 163, 184, 0.18), transparent 50%),
    linear-gradient(145deg, #0b1220 0%, #111827 48%, #1c1917 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.06) inset,
    0 20px 50px rgba(15, 23, 42, 0.28);
}

.skills-featured-glow {
  position: absolute;
  inset: -40% auto auto 35%;
  width: 18rem;
  height: 18rem;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(52, 211, 153, 0.25), transparent 70%);
  filter: blur(10px);
  animation: core-pulse 7s ease-in-out infinite;
  pointer-events: none;
}

.skills-featured-mesh {
  position: absolute;
  inset: 0;
  opacity: 0.18;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: linear-gradient(180deg, #000 30%, transparent 95%);
  pointer-events: none;
}

.skills-featured-eyebrow {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #6ee7b7;
  margin-bottom: 0.45rem;
}

.skills-featured-title {
  font-family: Fraunces, ui-serif, Georgia, serif;
  font-size: clamp(1.85rem, 3vw, 2.35rem);
  font-weight: 650;
  letter-spacing: -0.03em;
  color: #f8fafc;
  line-height: 1.1;
  margin-bottom: 0.4rem;
}

.skills-featured-sub {
  max-width: 28rem;
  font-size: 0.9rem;
  line-height: 1.55;
  color: #94a3b8;
}

.skills-featured-count {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #d1fae5;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(110, 231, 183, 0.28);
}

.skills-featured-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.7rem;
}

@media (min-width: 768px) {
  .skills-featured {
    padding: 2rem 2rem 1.85rem;
  }

  .skills-featured-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

.skill-featured-tile {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  min-height: 5.25rem;
  padding: 0.9rem 0.95rem;
  border-radius: 0.95rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(8px);
  animation: tile-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
  transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease;
}

.skill-featured-tile:hover {
  transform: translateY(-3px);
  border-color: rgba(110, 231, 183, 0.45);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(16, 185, 129, 0.1));
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.28);
}

.skill-featured-index {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: #64748b;
}

.skill-featured-name {
  font-size: 0.98rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: #f8fafc;
}

@keyframes core-pulse {
  0%, 100% { opacity: 0.55; transform: translate(-10%, 0) scale(1); }
  50% { opacity: 0.9; transform: translate(8%, 8%) scale(1.08); }
}

@keyframes tile-in {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.skills-card {
  padding: 1.2rem 1.25rem;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(226, 232, 240, 0.95);
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03), 0 10px 28px rgba(15, 23, 42, 0.04);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  animation: fade-in 0.45s ease-out both;
}

.skills-card:hover {
  border-color: #cbd5e1;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06), 0 18px 36px rgba(15, 23, 42, 0.05);
}

.skills-accent {
  width: 0.35rem;
  height: 1rem;
  border-radius: 999px;
  flex-shrink: 0;
}

.accent-slate { background: #64748b; }
.accent-emerald { background: #059669; }
.accent-sky { background: #0284c7; }
.accent-amber { background: #d97706; }
.accent-teal { background: #0f766e; }
.accent-rose { background: #e11d48; }

.skill-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.65rem;
  border-radius: 0.45rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #334155;
  background: #f1f5f9;
  border: 1px solid transparent;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease, transform 0.15s ease;
}

.skill-chip:hover {
  background: #e2e8f0;
  border-color: #cbd5e1;
  transform: translateY(-1px);
}

.skill-chip-core {
  background: #ecfdf5;
  color: #065f46;
  border-color: #a7f3d0;
}

.skill-chip-core:hover {
  background: #d1fae5;
  border-color: #6ee7b7;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
