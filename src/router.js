import { createRouter, createWebHistory } from 'vue-router';

// 引入页面组件
import Home from './components/Header.vue';
import About from './components/About.vue';
import PersonalWebsite from "./components/PersonalWebsite.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/personalWebsite',
        name: 'PersonalWebsite',
        component: PersonalWebsite
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // 替换 process.env.BASE_URL
    routes
});

export default router;
