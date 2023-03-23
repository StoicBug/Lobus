import {
    createRouter,
    createWebHistory
} from 'vue-router';
import AllerSimple from '../components/HeroForms/AllerSimple.vue'
import AllerRetour from '../components/HeroForms/AllerRetour.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children: [{
        path: '',
        component: AllerSimple
    },{
        path: 'aller-retour',
        component: AllerRetour
    }]
}, ]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;