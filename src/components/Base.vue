<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
// @ts-ignore
import { portfolioContent } from '../assets/about'
import profile from '../assets/me-profile.jpg'
import jacksonArch from '../assets/photos/jackson-arch.jpg'
import detroit from '../assets/photos/detroit.jpg'
import yellowstone from '../assets/photos/yellowstone.jpg'

defineProps<{
  msg: string
}>()

const portfolio = portfolioContent

function splitRole(value: string) {
  const [role, org] = value.split(' @ ')
  return { role: role?.trim() ?? value, org: org?.trim() ?? '' }
}

const primaryRole = splitRole(portfolio.about.title)
const secondaryRole = portfolio.about.secondaryTitle ? splitRole(portfolio.about.secondaryTitle) : null

const updates = [
  {
    tag: 'August 2026',
    title: 'Promoted to Staff Software Engineer at Rivian',
    tone: 'emerald'
  },
  {
    tag: '2026',
    title: '2nd Place, Kellogg Design Challenge',
    tone: 'amber'
  },
  {
    tag: 'May 2025 – May 2027',
    title: 'MBA at University of Michigan Ross',
    tone: 'sky'
  }
]

const stats = [
  { target: 12, decimals: 0, suffix: '+', label: 'Years shipping production systems' },
  { target: 150, decimals: 0, suffix: 'K+', label: 'Users served annually at U-M' },
  { target: 99.9, decimals: 1, suffix: '%', label: 'Uptime on supply chain apps' },
  { target: 20, decimals: 0, suffix: '%', label: 'Fewer parts shortage incidents' }
]

const display = ref<number[]>(stats.map(() => 0))
let frame = 0

function format(value: number, decimals: number) {
  return value.toFixed(decimals)
}

onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    display.value = stats.map((s) => s.target)
    return
  }

  const duration = 1400
  const start = performance.now()
  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - t, 3)
    display.value = stats.map((s) => s.target * eased)
    if (t < 1) frame = requestAnimationFrame(tick)
  }
  frame = requestAnimationFrame(tick)
})

onBeforeUnmount(() => cancelAnimationFrame(frame))
</script>

<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-copy">
        <p class="status-pill rise" style="--d: 0s">
          <span class="status-dot" aria-hidden="true"></span>
          Open to opportunities
          <span class="status-sep" aria-hidden="true">·</span>
          {{ portfolio.about.location }}
        </p>

        <p class="hello rise" style="--d: 0.05s">Hi, I’m</p>
        <h1 class="name rise" style="--d: 0.1s">{{ msg }}</h1>

        <ul class="roles rise" style="--d: 0.18s">
          <li class="role role-rivian">
            <span class="role-title">{{ primaryRole.role }}</span>
            <span class="role-org">{{ primaryRole.org }}</span>
          </li>
          <li v-if="secondaryRole" class="role role-ross">
            <span class="role-title">{{ secondaryRole.role }}</span>
            <span class="role-org">{{ secondaryRole.org }}</span>
          </li>
        </ul>

        <p class="pitch rise" style="--d: 0.26s">
          Staff engineer leading Rivian’s real-time replenishment platform — event-driven systems,
          team leadership, and production reliability at factory scale.
        </p>

        <div class="cta-row rise" style="--d: 0.34s">
          <RouterLink to="/experience" class="btn-primary btn-lg">
            View experience
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </RouterLink>
          <RouterLink to="/contact" class="btn-ghost">Get in touch</RouterLink>
        </div>
      </div>

      <div class="hero-photo rise" style="--d: 0.15s">
        <div class="photo-backdrop" aria-hidden="true"></div>
        <div class="photo-dots" aria-hidden="true"></div>
        <div class="photo-arch">
          <img :src="profile" alt="Aditi Anand" />
        </div>
        <div class="chip chip-top">
          <span class="chip-pulse" aria-hidden="true"></span>
          Rivian · R2 program
        </div>
        <div class="chip chip-bottom">
          <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
            <circle cx="12" cy="10" r="2.5" stroke-width="2" />
          </svg>
          Ann Arbor, MI
        </div>
      </div>
    </section>

    <!-- Impact numbers -->
    <section class="stats-band rise" style="--d: 0.4s">
      <div v-for="stat in stats" :key="stat.label" class="stat">
        <p class="stat-value">
          {{ format(display[stats.indexOf(stat)], stat.decimals) }}<span class="stat-suffix">{{ stat.suffix }}</span>
        </p>
        <p class="stat-label">{{ stat.label }}</p>
      </div>
    </section>

    <!-- What's new -->
    <section class="section">
      <div class="section-head">
        <p class="eyebrow">What’s new</p>
        <span class="section-rule" aria-hidden="true"></span>
      </div>
      <ul class="update-grid">
        <li
          v-for="(item, i) in updates"
          :key="item.title"
          class="update-card rise"
          :class="`tone-${item.tone}`"
          :style="{ '--d': `${0.5 + i * 0.08}s` }"
        >
          <span class="update-tag">{{ item.tag }}</span>
          <p class="update-title">{{ item.title }}</p>
        </li>
      </ul>
    </section>

    <!-- Photo teaser -->
    <section class="section">
      <RouterLink to="/about?section=offclock" class="teaser group" aria-label="See photos from off the clock">
        <div class="teaser-stack" aria-hidden="true">
          <img :src="yellowstone" alt="" class="teaser-photo teaser-left" />
          <img :src="detroit" alt="" class="teaser-photo teaser-right" />
          <img :src="jacksonArch" alt="" class="teaser-photo teaser-center" />
        </div>
        <div class="teaser-copy">
          <p class="teaser-eyebrow">Off the clock</p>
          <p class="teaser-title">From Wyoming peaks to Michigan blue</p>
          <p class="teaser-cta">
            See the photos
            <svg class="w-4 h-4 teaser-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </p>
        </div>
      </RouterLink>
    </section>
  </div>
</template>

<style scoped>
.home {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: left;
}

@media (min-width: 1024px) {
  .home {
    padding: 0 2.5rem;
  }
}

/* Entrance */
@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.rise {
  animation: rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--d, 0s);
}

/* Hero */
.hero {
  display: grid;
  gap: 2.5rem;
  align-items: center;
  padding: 1rem 0 3rem;
}

@media (min-width: 1024px) {
  .hero {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
    gap: 4rem;
    padding: 2rem 0 4rem;
  }
}

.hero-photo {
  order: -1;
}

@media (min-width: 1024px) {
  .hero-photo {
    order: 0;
  }
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #065f46;
  background: rgba(236, 253, 245, 0.9);
  border: 1px solid #a7f3d0;
}

.status-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: #10b981;
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5);
  animation: ping 2s ease-out infinite;
}

.status-sep {
  color: #6ee7b7;
}

@keyframes ping {
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.45); }
  80%, 100% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
}

.hello {
  margin-top: 1.5rem;
  font-size: 1.05rem;
  font-weight: 500;
  color: #64748b;
}

.name {
  font-family: Fraunces, ui-serif, Georgia, serif;
  font-size: clamp(3rem, 7.5vw, 5.4rem);
  font-weight: 650;
  line-height: 1;
  letter-spacing: -0.035em;
  margin: 0.15rem 0 1.5rem;
  background: linear-gradient(100deg, #0f172a 35%, #047857 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.roles {
  display: grid;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
  list-style: none;
  padding: 0;
}

.role {
  display: flex;
  flex-direction: column;
  padding: 0.15rem 0 0.15rem 0.9rem;
  border-left: 3px solid #cbd5e1;
}

.role-rivian { border-left-color: #f59e0b; }
.role-ross { border-left-color: #1d4ed8; }

.role-title {
  font-size: 1.15rem;
  font-weight: 650;
  color: #0f172a;
  line-height: 1.3;
}

.role-org {
  font-size: 0.9rem;
  color: #64748b;
}

.pitch {
  max-width: 34rem;
  font-size: 1.02rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 2rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.btn-lg {
  padding: 0.75rem 1.4rem;
  border-radius: 0.8rem;
  font-size: 0.95rem;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.2);
  transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}

.btn-lg:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.26);
}

.btn-lg:active {
  transform: scale(0.97);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.4rem;
  border-radius: 0.8rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #0f172a;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #cbd5e1;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
}

.btn-ghost:hover {
  background: #fff;
  border-color: #0f172a;
}

.btn-ghost:active {
  transform: scale(0.97);
}

/* Hero photo */
.hero-photo {
  position: relative;
  width: min(100%, 21rem);
  margin: 0 auto;
}

.photo-backdrop {
  position: absolute;
  inset: 1.4rem -1.2rem -1.2rem 1.4rem;
  border-radius: 12rem 12rem 2rem 2rem;
  background: linear-gradient(160deg, #a7f3d0 0%, #bae6fd 55%, #fde68a 100%);
  opacity: 0.8;
}

.photo-dots {
  position: absolute;
  right: -2.2rem;
  bottom: 2.5rem;
  width: 5.5rem;
  height: 5.5rem;
  background-image: radial-gradient(#334155 1.4px, transparent 1.4px);
  background-size: 11px 11px;
  opacity: 0.25;
}

.photo-arch {
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: 12rem 12rem 2rem 2rem;
  overflow: hidden;
  border: 4px solid #fff;
  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.22);
  background: #e2e8f0;
}

.photo-arch img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 25%;
  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.hero-photo:hover .photo-arch img {
  transform: scale(1.04);
}

.chip {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  color: #0f172a;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(226, 232, 240, 0.95);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.14);
  white-space: nowrap;
}

.chip-top {
  top: 2.2rem;
  right: -1.3rem;
  animation: float 6s ease-in-out infinite;
}

.chip-bottom {
  bottom: 2rem;
  left: -1.5rem;
  animation: float 7s ease-in-out infinite reverse;
}

.chip-pulse {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: #f59e0b;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

@media (max-width: 480px) {
  .chip-top { right: -0.4rem; }
  .chip-bottom { left: -0.4rem; }
  .photo-dots { display: none; }
}

/* Stats band */
.stats-band {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding: 0.5rem;
  border-radius: 1.75rem;
  color: #fff;
  background:
    radial-gradient(60rem 18rem at 0% 0%, rgba(16, 185, 129, 0.22), transparent 60%),
    radial-gradient(40rem 16rem at 100% 100%, rgba(56, 189, 248, 0.16), transparent 60%),
    #0f172a;
  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.22);
}

@media (min-width: 768px) {
  .stats-band {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.stat {
  padding: 1.5rem 1.25rem;
  text-align: left;
  border-radius: 1.25rem;
  transition: background 0.2s ease;
}

.stat:hover {
  background: rgba(255, 255, 255, 0.05);
}

@media (min-width: 768px) {
  .stat + .stat {
    box-shadow: -1px 0 0 rgba(148, 163, 184, 0.18);
  }
}

.stat-value {
  font-family: Fraunces, ui-serif, Georgia, serif;
  font-size: clamp(2rem, 4vw, 2.9rem);
  font-weight: 650;
  letter-spacing: -0.03em;
  line-height: 1.05;
  font-variant-numeric: tabular-nums;
}

.stat-suffix {
  color: #34d399;
}

.stat-label {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  line-height: 1.45;
  color: #94a3b8;
}

/* Sections */
.section {
  margin-top: 3.5rem;
}

.section-head {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #64748b;
  white-space: nowrap;
}

.section-rule {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, #cbd5e1, transparent);
}

/* Update cards */
.update-grid {
  display: grid;
  gap: 1rem;
  list-style: none;
  padding: 0;
}

@media (min-width: 768px) {
  .update-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.update-card {
  --accent: #10b981;
  --accent-soft: #ecfdf5;
  position: relative;
  padding: 1.25rem 1.25rem 1.35rem;
  border-radius: 1.1rem;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(226, 232, 240, 0.95);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03), 0 10px 28px rgba(15, 23, 42, 0.05);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.update-card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 3px;
  background: var(--accent);
}

.update-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08), 0 20px 40px rgba(15, 23, 42, 0.06);
}

.tone-emerald { --accent: #10b981; --accent-soft: #ecfdf5; }
.tone-amber { --accent: #f59e0b; --accent-soft: #fffbeb; }
.tone-sky { --accent: #0ea5e9; --accent-soft: #f0f9ff; }

.update-tag {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #334155;
  background: var(--accent-soft);
  margin-bottom: 0.75rem;
}

.update-title {
  font-family: Fraunces, ui-serif, Georgia, serif;
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: #0f172a;
}

/* Photo teaser */
.teaser {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 1.75rem 1.6rem;
  border-radius: 1.5rem;
  text-align: center;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(226, 232, 240, 0.95);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03), 0 10px 28px rgba(15, 23, 42, 0.05);
  transition: border-color 0.2s ease, box-shadow 0.25s ease, transform 0.15s ease;
}

.teaser:hover {
  border-color: #cbd5e1;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08), 0 22px 44px rgba(15, 23, 42, 0.08);
}

.teaser:active {
  transform: scale(0.99);
}

.teaser:focus-visible {
  outline: 2px solid #0f172a;
  outline-offset: 3px;
}

@media (min-width: 640px) {
  .teaser {
    flex-direction: row;
    text-align: left;
    gap: 2.5rem;
  }
}

.teaser-stack {
  position: relative;
  flex-shrink: 0;
  width: 11rem;
  height: 8.5rem;
}

.teaser-photo {
  position: absolute;
  top: 0;
  width: 5.6rem;
  height: 7.4rem;
  object-fit: cover;
  border: 3px solid #fff;
  border-radius: 0.55rem;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.22);
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.teaser-left {
  left: 0;
  top: 0.7rem;
  object-position: 50% 30%;
  transform: rotate(-9deg);
}

.teaser-right {
  right: 0;
  top: 0.7rem;
  object-position: 50% 60%;
  transform: rotate(9deg);
}

.teaser-center {
  left: 50%;
  margin-left: -2.8rem;
  z-index: 2;
  object-position: 50% 50%;
  transform: rotate(0deg);
}

.teaser:hover .teaser-left {
  transform: rotate(-14deg) translateX(-0.6rem);
}

.teaser:hover .teaser-right {
  transform: rotate(14deg) translateX(0.6rem);
}

.teaser:hover .teaser-center {
  transform: translateY(-4px) scale(1.04);
}

.teaser-eyebrow {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #059669;
  margin-bottom: 0.35rem;
}

.teaser-title {
  font-family: Fraunces, ui-serif, Georgia, serif;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: #0f172a;
  margin-bottom: 0.7rem;
}

.teaser-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #334155;
}

.teaser-arrow {
  transition: transform 0.2s ease;
}

.teaser:hover .teaser-arrow {
  transform: translateX(4px);
}

@media (prefers-reduced-motion: reduce) {
  .rise,
  .status-dot,
  .chip,
  .teaser-photo,
  .teaser-arrow,
  .photo-arch img {
    animation: none;
    transition: none;
  }
}
</style>
