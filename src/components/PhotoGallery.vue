<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import jacksonArch from '../assets/photos/jackson-arch.jpg'
import tetonOverlook from '../assets/photos/teton-overlook.jpg'
import yellowstone from '../assets/photos/yellowstone.jpg'
import detroit from '../assets/photos/detroit.jpg'
import goBlue from '../assets/photos/go-blue.jpg'

type Photo = {
  id: string
  src: string
  alt: string
  place: string
  caption: string
  tile: string
  position: string
}

const photos: Photo[] = [
  {
    id: 'jackson',
    src: jacksonArch,
    alt: 'Walking through the elk antler arch in Jackson, Wyoming',
    place: 'Jackson, WY',
    caption: 'Under the elk antler arches',
    tile: 'tile-arch',
    position: '50% 55%'
  },
  {
    id: 'detroit',
    src: detroit,
    alt: 'Downtown Detroit skyline with historic towers',
    place: 'Detroit, MI',
    caption: 'Home turf, looking up',
    tile: 'tile-detroit',
    position: '50% 60%'
  },
  {
    id: 'teton',
    src: tetonOverlook,
    alt: 'Standing on a rocky overlook above a lake in the Tetons',
    place: 'Teton country, WY',
    caption: 'Perspective, at altitude',
    tile: 'tile-teton',
    position: '50% 45%'
  },
  {
    id: 'yellowstone',
    src: yellowstone,
    alt: 'Beside a steaming geothermal pool in Yellowstone',
    place: 'Yellowstone, WY',
    caption: 'Where the ground runs hot',
    tile: 'tile-yellowstone',
    position: '50% 30%'
  },
  {
    id: 'go-blue',
    src: goBlue,
    alt: 'Wearing a Michigan sweatshirt by a river in autumn',
    place: 'Michigan',
    caption: 'Go Blue, always',
    tile: 'tile-blue',
    position: '50% 55%'
  }
]

const activeIndex = ref<number | null>(null)
const active = computed(() => (activeIndex.value === null ? null : photos[activeIndex.value]))

function open(index: number) {
  activeIndex.value = index
}

function close() {
  activeIndex.value = null
}

function step(delta: number) {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value + delta + photos.length) % photos.length
}

function onKey(e: KeyboardEvent) {
  if (activeIndex.value === null) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowRight') step(1)
  if (e.key === 'ArrowLeft') step(-1)
}

watch(activeIndex, (value) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = value === null ? '' : 'hidden'
  if (value === null) {
    window.removeEventListener('keydown', onKey)
  } else {
    window.addEventListener('keydown', onKey)
  }
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <section class="off-clock">
    <div class="flex flex-wrap items-end justify-between gap-3 mb-5">
      <div>
        <h3 class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-1">Off the clock</h3>
        <p class="font-display text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
          From Wyoming peaks to Michigan blue
        </p>
        <p class="text-sm text-slate-500 mt-1.5 max-w-xl leading-relaxed">
          Big skies, long trails, and the occasional geyser. Tap a photo to take a closer look.
        </p>
      </div>
      <span class="off-clock-hint">{{ photos.length }} moments</span>
    </div>

    <div class="mosaic">
      <button
        v-for="(photo, index) in photos"
        :key="photo.id"
        type="button"
        class="tile"
        :class="photo.tile"
        :aria-label="`Open photo: ${photo.caption}, ${photo.place}`"
        :style="{ animationDelay: `${index * 0.08}s` }"
        @click="open(index)"
      >
        <img
          :src="photo.src"
          :alt="photo.alt"
          loading="lazy"
          class="tile-img"
          :style="{ objectPosition: photo.position }"
        />
        <span class="tile-shade" aria-hidden="true"></span>
        <span class="tile-meta">
          <span class="tile-place">{{ photo.place }}</span>
          <span class="tile-caption">{{ photo.caption }}</span>
        </span>
      </button>
    </div>

    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="active"
          class="lightbox"
          role="dialog"
          aria-modal="true"
          :aria-label="active.caption"
          @click.self="close"
        >
          <button type="button" class="lb-btn lb-close" aria-label="Close" @click="close">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button type="button" class="lb-btn lb-prev" aria-label="Previous photo" @click="step(-1)">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button type="button" class="lb-btn lb-next" aria-label="Next photo" @click="step(1)">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <figure class="lb-figure" @click.self="close">
            <img :key="active.id" :src="active.src" :alt="active.alt" class="lb-img" />
            <figcaption class="lb-caption">
              <span class="lb-place">{{ active.place }}</span>
              <span class="lb-text">{{ active.caption }}</span>
              <span class="lb-count">{{ (activeIndex ?? 0) + 1 }} / {{ photos.length }}</span>
            </figcaption>
          </figure>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.off-clock-hint {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #475569;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #e2e8f0;
}

.mosaic {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: 13rem;
  gap: 0.85rem;
}

.tile {
  position: relative;
  overflow: hidden;
  padding: 0;
  border: 1px solid rgba(226, 232, 240, 0.95);
  border-radius: 1.1rem;
  background: #e2e8f0;
  cursor: zoom-in;
  text-align: left;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 10px 28px rgba(15, 23, 42, 0.07);
  animation: tile-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
  transition: box-shadow 0.25s ease, transform 0.15s ease;
}

.tile:hover {
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.1), 0 22px 44px rgba(15, 23, 42, 0.14);
}

.tile:active {
  transform: scale(0.985);
}

.tile:focus-visible {
  outline: 2px solid #0f172a;
  outline-offset: 3px;
}

.tile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.tile:hover .tile-img {
  transform: scale(1.06);
}

.tile-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 45%, rgba(2, 6, 23, 0.72) 100%);
  opacity: 0.85;
  transition: opacity 0.25s ease;
}

.tile:hover .tile-shade {
  opacity: 1;
}

.tile-meta {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.9rem 1rem;
  transform: translateY(6px);
  opacity: 0.92;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.tile:hover .tile-meta {
  transform: translateY(0);
  opacity: 1;
}

.tile-place {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #6ee7b7;
}

.tile-caption {
  font-family: Fraunces, ui-serif, Georgia, serif;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.015em;
  color: #f8fafc;
  line-height: 1.2;
}

/* Mobile: 2 columns, teton spans full width */
.tile-teton {
  grid-column: span 2;
}

.tile-arch,
.tile-detroit {
  grid-row: span 2;
}

@media (min-width: 900px) {
  .mosaic {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-rows: 12.5rem;
    gap: 1rem;
  }

  .tile-arch {
    grid-column: 1;
    grid-row: span 2;
  }

  .tile-detroit {
    grid-column: 2;
    grid-row: span 2;
  }

  .tile-teton {
    grid-column: 3 / span 2;
    grid-row: span 1;
  }

  .tile-yellowstone {
    grid-column: 3;
    grid-row: span 1;
  }

  .tile-blue {
    grid-column: 4;
    grid-row: span 1;
  }
}

@keyframes tile-in {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(2, 6, 23, 0.88);
  backdrop-filter: blur(10px);
}

.lb-figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
  max-width: min(92vw, 62rem);
  margin: 0;
}

.lb-img {
  max-width: 100%;
  max-height: 78vh;
  border-radius: 0.9rem;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
  animation: lb-img-in 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.lb-caption {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  gap: 0.35rem 0.9rem;
  text-align: center;
}

.lb-place {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #6ee7b7;
}

.lb-text {
  font-family: Fraunces, ui-serif, Georgia, serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: #f8fafc;
}

.lb-count {
  font-size: 0.75rem;
  font-variant-numeric: tabular-nums;
  color: #94a3b8;
}

.lb-btn {
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999px;
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.16);
  transition: background 0.15s ease, transform 0.12s ease;
}

.lb-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lb-btn:active {
  transform: scale(0.92);
}

.lb-btn:focus-visible {
  outline: 2px solid #6ee7b7;
  outline-offset: 2px;
}

.lb-close {
  top: 1.25rem;
  right: 1.25rem;
}

.lb-prev {
  left: 1.25rem;
  top: 50%;
  margin-top: -1.375rem;
}

.lb-next {
  right: 1.25rem;
  top: 50%;
  margin-top: -1.375rem;
}

@media (max-width: 640px) {
  .lb-prev,
  .lb-next {
    top: auto;
    bottom: 1.25rem;
    margin-top: 0;
  }

  .lb-prev {
    left: 1.25rem;
  }

  .lb-next {
    right: 1.25rem;
  }
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.22s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

@keyframes lb-img-in {
  from {
    opacity: 0;
    transform: scale(0.97);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .tile,
  .tile-img,
  .tile-meta,
  .lb-img {
    animation: none;
    transition: none;
  }
}
</style>
