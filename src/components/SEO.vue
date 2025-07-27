<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

const props = withDefaults(defineProps<SEOProps>(), {
  title: 'Aditi Anand - Software Developer & Portfolio',
  description: 'Software developer portfolio showcasing projects, experience, and skills. Specializing in modern web development technologies.',
  keywords: 'software developer, web development, portfolio, Vue.js, JavaScript, TypeScript, frontend developer',
  image: '/og-image.jpg',
  url: 'https://your-domain.com',
  type: 'website'
})

const route = useRoute()

const updateMetaTags = () => {
  const baseUrl = 'https://your-domain.com'
  const currentUrl = `${baseUrl}${route.path}`
  
  // Update document title
  document.title = props.title
  
  // Update meta description
  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', props.description)
  }
  
  // Update meta keywords
  const keywordsMeta = document.querySelector('meta[name="keywords"]')
  if (keywordsMeta) {
    keywordsMeta.setAttribute('content', props.keywords)
  }
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) {
    ogTitle.setAttribute('content', props.title)
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) {
    ogDescription.setAttribute('content', props.description)
  }
  
  const ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl) {
    ogUrl.setAttribute('content', currentUrl)
  }
  
  const ogImage = document.querySelector('meta[property="og:image"]')
  if (ogImage) {
    ogImage.setAttribute('content', `${baseUrl}${props.image}`)
  }
  
  const ogType = document.querySelector('meta[property="og:type"]')
  if (ogType) {
    ogType.setAttribute('content', props.type)
  }
  
  // Update Twitter tags
  const twitterTitle = document.querySelector('meta[property="twitter:title"]')
  if (twitterTitle) {
    twitterTitle.setAttribute('content', props.title)
  }
  
  const twitterDescription = document.querySelector('meta[property="twitter:description"]')
  if (twitterDescription) {
    twitterDescription.setAttribute('content', props.description)
  }
  
  const twitterUrl = document.querySelector('meta[property="twitter:url"]')
  if (twitterUrl) {
    twitterUrl.setAttribute('content', currentUrl)
  }
  
  const twitterImage = document.querySelector('meta[property="twitter:image"]')
  if (twitterImage) {
    twitterImage.setAttribute('content', `${baseUrl}${props.image}`)
  }
  
  // Update canonical URL
  const canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) {
    canonical.setAttribute('href', currentUrl)
  }
}

// Update meta tags when component mounts
onMounted(() => {
  updateMetaTags()
})

// Watch for prop changes
watch(() => props, updateMetaTags, { deep: true })

// Watch for route changes
watch(() => route.path, updateMetaTags)
</script>

<template>
  <div style="display: none;"></div>
</template> 