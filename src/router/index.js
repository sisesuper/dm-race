import Vue from "vue";
import VueRouter from "vue-router";
import pageBone from "@/pages/PageBone";
import dataDetail from "@/pages/DataDetail";
import addDataSource from "@/pages/AddDataSource";
import updateDataSource from "@/pages/UpdateDataSource";
import delDataSource from "@/pages/DelDataSource";
import governanceData from "@/pages/GovernanceData";
import APIService from "@/pages/APIService";

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
                    path:'addDataSource',
                    component:addDataSource
                },
                {
                    path:'updateDataSource',
                    component:updateDataSource
                },
                {
                    path:'delDataSource',
                    component:delDataSource
                },
                {
                    path:'governanceData',
                    component:governanceData
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