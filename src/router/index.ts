import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { absoluteUrl, pageSeo } from '../seo/config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: pageSeo.home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: pageSeo.about
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/WorkExperienceView.vue'),
      meta: pageSeo.experience
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: pageSeo.projects
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: pageSeo.contact
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const title = (to.meta.title as string) || document.title
  const description = (to.meta.description as string) || ''
  const url = absoluteUrl(to.path === '/' ? '/' : to.path)

  document.title = title

  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta && description) {
    descriptionMeta.setAttribute('content', description)
  }

  const ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl) ogUrl.setAttribute('content', url)

  const canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) canonical.setAttribute('href', url)
})

export default router
