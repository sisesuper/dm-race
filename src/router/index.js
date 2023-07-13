import Vue from "vue";
import VueRouter from "vue-router";
import pageBone from "@/pages/PageBone";
import dataDetail from "@/pages/DataDetail";
import APIService from "@/pages/APIService";
import manageData from "@/pages/ManageData";
import governanceData from "@/pages/GovernanceData";

Vue.use(VueRouter);

const router = new VueRouter({
    base:process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: pageBone,
            children:[
                {
                    path:'',
                    component:dataDetail
                },
                {
                    path:'dataDetail',
                    component:dataDetail
                },
                {
                    path:'governanceData',
                    component:governanceData
                },
                {
                    path:'manageData',
                    component:manageData
                },
                {
                    path:'apiService',
                    component:APIService
                }
            ]
        }

    ]

})
export default router