import { createRouter,createWebHistory} from "vue-router";

import home from '../view/home.vue'

const routes=[
    {path:'/',name:home,component:home},
]

const router=createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router;