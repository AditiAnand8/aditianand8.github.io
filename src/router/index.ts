import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Aditi Anand - Software Developer & Portfolio',
        description: 'Software developer portfolio showcasing projects, experience, and skills. Specializing in modern web development technologies.',
        keywords: 'software developer, web development, portfolio, Vue.js, JavaScript, TypeScript, frontend developer'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About - Aditi Anand',
        description: 'Learn more about Aditi Anand, a passionate software developer with expertise in modern web technologies.',
        keywords: 'about, software developer, Aditi Anand, web development, skills'
      }
    },
    {
      path: '/experience',
      name: 'experience',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WorkExperienceView.vue'),
      meta: {
        title: 'Work Experience - Aditi Anand',
        description: 'Professional work experience and career highlights of Aditi Anand in software development.',
        keywords: 'work experience, software development, career, professional experience, Aditi Anand'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProjectsView.vue'),
      meta: {
        title: 'Projects - Aditi Anand',
        description: 'Portfolio of software development projects by Aditi Anand, showcasing technical skills and creativity.',
        keywords: 'projects, portfolio, software development, web applications, Aditi Anand'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: 'Contact - Aditi Anand',
        description: 'Get in touch with Aditi Anand for collaboration opportunities, project inquiries, or professional networking.',
        keywords: 'contact, Aditi Anand, software developer, collaboration, networking'
      }
    }
  ]
})

// Update document title and meta tags on route change
router.beforeEach((to, from, next) => {
  // Update document title
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  
  // Update meta description
  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta && to.meta.description) {
    descriptionMeta.setAttribute('content', to.meta.description as string)
  }
  
  // Update meta keywords
  const keywordsMeta = document.querySelector('meta[name="keywords"]')
  if (keywordsMeta && to.meta.keywords) {
    keywordsMeta.setAttribute('content', to.meta.keywords as string)
  }
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle && to.meta.title) {
    ogTitle.setAttribute('content', to.meta.title as string)
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription && to.meta.description) {
    ogDescription.setAttribute('content', to.meta.description as string)
  }
  
  const ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl) {
    ogUrl.setAttribute('content', `https://your-domain.com${to.path}`)
  }
  
  // Update Twitter tags
  const twitterTitle = document.querySelector('meta[property="twitter:title"]')
  if (twitterTitle && to.meta.title) {
    twitterTitle.setAttribute('content', to.meta.title as string)
  }
  
  const twitterDescription = document.querySelector('meta[property="twitter:description"]')
  if (twitterDescription && to.meta.description) {
    twitterDescription.setAttribute('content', to.meta.description as string)
  }
  
  const twitterUrl = document.querySelector('meta[property="twitter:url"]')
  if (twitterUrl) {
    twitterUrl.setAttribute('content', `https://your-domain.com${to.path}`)
  }
  
  // Update canonical URL
  const canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) {
    canonical.setAttribute('href', `https://your-domain.com${to.path}`)
  }
  
  next()
})

export default router
