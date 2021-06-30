import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'main',
        meta: { layout: 'main', auth: true },
        component: () =>
            import ('../views/mainPage')
    },
    {
        path: '/login',
        name: 'login',
        meta: { layout: 'empty', auth: false },
        component: () =>
            import ('../views/login')
    },
    {
        path: '/orgPage',
        name: 'orgPage',
        meta: { layout: 'main', auth: true },
        component: () =>
            import ('../views/orgPage')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router