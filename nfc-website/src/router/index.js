import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import About from '../view/About.vue'
import Team from '../view/Team.vue'
import Project from '../view/Project.vue'
import Event from '../view/Event.vue'
import Contact from '../view/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/team', component: Team },
  { path: '/project', component: Project },
  { path: '/event', component: Event },
  { path: '/contact', component: Contact }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
