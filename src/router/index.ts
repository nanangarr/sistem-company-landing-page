import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import BlogView from '@/views/BlogView.vue';
import BlogPostView from '@/views/BlogPostView.vue';
import ContactView from '@/views/ContactView.vue';
import PrivacyView from '@/views/PrivacyView.vue';
import CategoryView from '@/views/CategoryView.vue';
import AuthorView from '@/views/AuthorView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogView,
  },
  {
    path: '/blogpost',
    name: 'BlogPost',
    component: BlogPostView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: PrivacyView,
  },
  {
    path: '/category',
    name: 'Category',
    component: CategoryView,
  },
  {
    path: '/authorview',
    name: 'Author',
    component: AuthorView,
  }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Jika posisi yang disimpan ada (misalnya saat back), gunakan posisi itu
      return savedPosition
    } else {
      // Scroll ke atas saat navigasi ke halaman baru
      return { top: 0 }
    }
  }
})

export default router
