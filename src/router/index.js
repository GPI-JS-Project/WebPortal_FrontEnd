import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/Agenda.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/informasi/detail/:id',
    name: 'News',
    component: () => import('../views/NewsDetail.vue')
  },
  {
    path: '/informasi',
    name: 'Category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/informasi/kategori',
    name: 'Category',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/informasi/:id',
    name: 'kategori',
    component: () => import('../views/Category.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/sejarah',
    name: 'Sejarah',
    component: () => import('../views/Sejarah.vue')
  },
  {
    path: '/visimisi',
    name: 'VisiMisi',
    component: () => import('../views/VisiMisi.vue')
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: () => import('../views/Agenda.vue')
  },
  {
    path: '/agenda/detail/:id',
    name: 'Agenda',
    component: () => import('../views/AgendaDetail.vue')
  },
  {
    path: '/informasi/detail/:id',
    name: 'News',
    component: () => import('../views/NewsDetail.vue')
  },
  {
    path: '/kontak',
    name: 'Kontak',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/dokumen',
    name: 'Document',
    component: () => import('../views/Document.vue')
  },
  {
    path: '/media/video',
    name: 'Video',
    component: () => import('../views/Video.vue')
  },
  {
    path: '/media/foto',
    name: 'Galeri',
    component: () => import('../views/Galery.vue')
  },
  {
    path: '/foto/album/:id',
    name: 'DetailGaleri',
    component: () => import('../views/Galery.vue')
  },
  {
    path: '/pencarian',
    name: 'Pencarian',
    component: () => import('../views/SearchPage.vue')
  },
  {
    path: '/cabang',
    name: 'Pencarian',
    component: () => import('../views/CabangGereja.vue')
  },
  {
    path: '/cabang/detail/:id',
    name: 'Pencarian',
    component: () => import('../views/CabangGerejaDetail.vue')
  },
  {
    path: "/:catchAll(.*)",
    component: () => import('../views/Notfound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router