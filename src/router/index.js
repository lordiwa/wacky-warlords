import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WhatIsWackyWarlords from '../views/WhatIsWackyWarlords.vue'
import Lore from '../views/Lore.vue'
import SupportUs from '../views/SupportUs.vue'
import ContactAbout from '../views/ContactAbout.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/what-is-wacky-warlords',
            name: 'what-is-wacky-warlords',
            component: WhatIsWackyWarlords
        },
        {
            path: '/lore',
            name: 'lore',
            component: Lore
        },
        {
            path: '/support-us',
            name: 'support-us',
            component: SupportUs
        },
        {
            path: '/contact-about',
            name: 'contact-about',
            component: ContactAbout
        }
    ]
})

export default router