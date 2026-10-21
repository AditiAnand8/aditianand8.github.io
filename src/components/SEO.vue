<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import {
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  defaultSeo,
  type PageSeo
} from '../seo/config'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  type?: string
}

const props = withDefaults(defineProps<SEOProps>(), {
  image: '/og-image.png',
  type: 'website'
})

const route = useRoute()

const seo = computed<PageSeo>(() => {
  const meta = route.meta || {}
  return {
    title: props.title || (meta.title as string) || defaultSeo.title,
    description: props.description || (meta.description as string) || defaultSeo.description,
    keywords: props.keywords || (meta.keywords as string) || defaultSeo.keywords
  }
})

function upsertMeta(selector: string, attrs: Record<string, string>, content: string) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    Object.entries(attrs).forEach(([key, value]) => el!.setAttribute(key, value))
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

function updateMetaTags() {
  const { title, description, keywords } = seo.value
  const path = route.path === '/' ? '/' : route.path
  const currentUrl = absoluteUrl(path)
  const imageUrl = props.image.startsWith('http') ? props.image : `${SITE_URL}${props.image}`

  document.title = title

  upsertMeta('meta[name="title"]', { name: 'title' }, title)
  upsertMeta('meta[name="description"]', { name: 'description' }, description)
  upsertMeta('meta[name="keywords"]', { name: 'keywords' }, keywords)
  upsertMeta('meta[name="author"]', { name: 'author' }, SITE_NAME)
  upsertMeta('meta[name="robots"]', { name: 'robots' }, 'index, follow, max-image-preview:large')

  upsertMeta('meta[property="og:type"]', { property: 'og:type' }, props.type)
  upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, `${SITE_NAME} Portfolio`)
  upsertMeta('meta[property="og:title"]', { property: 'og:title' }, title)
  upsertMeta('meta[property="og:description"]', { property: 'og:description' }, description)
  upsertMeta('meta[property="og:url"]', { property: 'og:url' }, currentUrl)
  upsertMeta('meta[property="og:image"]', { property: 'og:image' }, imageUrl)
  upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt' }, `${SITE_NAME} — Staff Software Engineer`)
  upsertMeta('meta[property="og:locale"]', { property: 'og:locale' }, 'en_US')

  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image')
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title)
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description)
  upsertMeta('meta[name="twitter:url"]', { name: 'twitter:url' }, currentUrl)
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, imageUrl)
  upsertMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt' }, `${SITE_NAME} — Staff Software Engineer`)

  upsertLink('canonical', currentUrl)

  upsertJsonLd('structured-data-person', {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/me.png`,
    jobTitle: 'Staff Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Rivian',
      url: 'https://rivian.com'
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of Michigan Ross School of Business'
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of Wyoming'
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ann Arbor',
      addressRegion: 'MI',
      addressCountry: 'US'
    },
    sameAs: [
      'https://www.linkedin.com/in/aditi-anandm/',
      'https://github.com/AditiAnand8',
      'https://medium.com/@TechStacked',
      'https://aditianand8.github.io'
    ],
    knowsAbout: [
      'Software Engineering',
      'Distributed Systems',
      'Event-Driven Architecture',
      'Python',
      'Kafka',
      'NATS',
      'AWS',
      'Vue.js',
      'Supply Chain Systems'
    ],
    description
  })

  upsertJsonLd('structured-data-website', {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: `${SITE_NAME} Portfolio`,
    url: SITE_URL,
    description: defaultSeo.description,
    inLanguage: 'en-US',
    publisher: {
      '@id': `${SITE_URL}/#person`
    }
  })

  upsertJsonLd('structured-data-webpage', {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${currentUrl}#webpage`,
    url: currentUrl,
    name: title,
    description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`
    },
    about: {
      '@id': `${SITE_URL}/#person`
    },
    inLanguage: 'en-US'
  })
}

watchEffect(() => {
  if (typeof document !== 'undefined') {
    // track reactive deps
    void seo.value
    void route.path
    updateMetaTags()
  }
})
</script>

<template>
  <div style="display: none;" aria-hidden="true"></div>
</template>
