import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home/Home.vue';
import Contact from './views/contact/contact.vue';
import Skills from './views/skills/skills.vue';
import SkillDetails from "./views/skills/skill-details";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/about/About.vue')
    },
      {
          path: '/contact',
          name: 'contact',
          component: Contact
      },
      {
          path: '/skills',
          name: 'skills',
          component: Skills
      },
      {
          path: '/skills/:id',
          name: 'skills-details',
          component: SkillDetails
      }
  ]
})
