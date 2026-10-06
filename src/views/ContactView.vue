<script setup lang="ts">
const links = [
  {
    name: 'Email',
    description: 'Best for opportunities and collaborations',
    href: 'mailto:anand.aditim@gmail.com',
    cta: 'Send email',
    primary: true
  },
  {
    name: 'LinkedIn',
    description: 'Professional updates and networking',
    href: 'https://www.linkedin.com/in/aditi-anandm/',
    cta: 'Connect'
  },
  {
    name: 'GitHub',
    description: 'Code, projects, and contributions',
    href: 'https://github.com/AditiAnand8',
    cta: 'View profile'
  },
  {
    name: 'Blog',
    description: 'Technical writing on Medium',
    href: 'https://medium.com/@TechStacked',
    cta: 'Read articles'
  },
  {
    name: 'Instagram',
    description: 'Photos and personal updates',
    href: 'https://www.instagram.com/aditi.anandm',
    cta: 'Follow'
  },
  {
    name: 'Stack Overflow',
    description: 'Q&A and community answers',
    href: 'https://stackoverflow.com/users/11080771/power-coder?tab=profile',
    cta: 'View profile'
  },
  {
    name: 'DEV',
    description: 'Developer community posts',
    href: 'https://dev.to/power_coder',
    cta: 'Visit'
  }
]
</script>

<template>
  <main class="max-w-7xl mx-auto px-6 lg:px-10 py-4 page-enter">
    <header class="mb-8 max-w-3xl">
      <h2 class="section-title mb-2">Contact</h2>
      <p class="text-slate-500 text-sm md:text-base leading-relaxed">
        Open to conversations about engineering leadership, product systems, and interesting opportunities.
      </p>
    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      <a
        v-for="(link, index) in links"
        :key="link.name"
        :href="link.href"
        :target="link.href.startsWith('mailto:') ? undefined : '_blank'"
        :rel="link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'"
        class="contact-card group"
        :class="{ 'contact-card-primary': link.primary }"
        :style="{ animationDelay: `${index * 0.05}s` }"
      >
        <div class="flex items-start justify-between gap-3 mb-3">
          <h3 class="text-base font-semibold text-slate-900 group-hover:text-slate-700">
            {{ link.name }}
          </h3>
          <svg
            class="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors flex-shrink-0 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M7 7h10v10" />
          </svg>
        </div>
        <p class="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{{ link.description }}</p>
        <span class="text-sm font-medium text-slate-800">{{ link.cta }}</span>
      </a>
    </div>
  </main>
</template>

<style scoped>
.page-enter {
  animation: fade-in 0.55s ease-out;
}

.contact-card {
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1.35rem;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(226, 232, 240, 0.95);
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03), 0 10px 28px rgba(15, 23, 42, 0.04);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  animation: fade-in 0.5s ease-out both;
  text-decoration: none;
  color: inherit;
}

.contact-card:hover {
  border-color: #cbd5e1;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06), 0 18px 36px rgba(15, 23, 42, 0.05);
  transform: translateY(-2px);
}

.contact-card-primary {
  border-color: #a7f3d0;
  background: linear-gradient(180deg, rgba(236, 253, 245, 0.55), rgba(255, 255, 255, 0.88));
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
