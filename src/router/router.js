import { createRouter,createWebHistory} from "vue-router";

import home from '../view/home.vue'
import about from '../view/about.vue'
import service from '../view/service.vue'
import news from '../view/news.vue'

const routes=[
    {path:'/',name:home,component:home},
    {path:'/about/',name:about,component:about},
    {path:'/services/',name:service,component:service},
    {path:'/news/',name:news,component:news},
]

const router=createRouter({
    routes,
    history:createWebHistory(process.env.BASE_URL)
})

export default router;