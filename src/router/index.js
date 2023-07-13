import Vue from "vue";
import VueRouter from "vue-router";
import pageBone from "@/pages/PageBone";

Vue.use(VueRouter);

const router = new VueRouter({
    base:process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: pageBone
        }

    ]

})
export default router