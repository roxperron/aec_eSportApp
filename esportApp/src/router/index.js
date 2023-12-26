import { createRouter, createWebHistory } from 'vue-router'
import Teams from '../components/Teams.vue'
import InfoTeam from '../components/InfoTeam.vue'
import Home from '../components/Home.vue'
import Form from '../components/Form.vue'
import Error from '../components/Error.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'accueil',
            component: Home
        },
        {
            path: '/equipes',
            name: 'equipes',
            component: Teams
        },
        
        {
            path: '/equipes/:id',
            name: 'infos',
            component: InfoTeam
        },
        {
            path: '/formulaire',
            name: 'formulaire',
            component: Form
        },


        {
            path: '/:pathMatch(.*)*',
            name: 'erreur',
            component: Error
        }

    ]
})

export default router