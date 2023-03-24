import {
    createRouter,
    createWebHistory
} from 'vue-router';
import AllerSimple from '../components/HeroForms/AllerSimple.vue'
import AllerRetour from '../components/HeroForms/AllerRetour.vue'
import Etape1 from '../views/confirmation/Etape1.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children: [{
        path: '',
        component: AllerSimple
    }, {
        path: 'aller-retour',
        component: AllerRetour
    }]
}, {
    path: '/etape1',
    name: 'etape1',
    component: Etape1
}, ]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;