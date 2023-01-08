import { createRouter, createWebHashHistory } from "vue-router";
import Login from '../components/login/Login.vue';
import Home from '../components/home/Home.vue';
import Store from '../tools/Storage.js';
import Order from '../components/order/Order.vue';
import Goods from '../components/goods/Goods.vue';
import AddGood from '../components/goods/AddGood.vue';

const Router = createRouter({
    history : createWebHashHistory(),
    routes : [
        {
            path:"/login",
            component: Login,
            name:"login"
        },
        {
            path:"/home",
            component: Home,
            name:"home",
            children:[
                {
                    path:"order/:type", // 0-普通订单 1-秒杀订单
                    component:Order,
                    name:"Order"
                },
                {
                    path:"goods/:type",
                    component:Goods,
                    name:"Goods"
                },
                {
                    path:"addGood/:type",
                    component:AddGood,
                    name:"AddGood"
                }
            ],
            redirect:'/home/order/0'
        }
    ]
})
Router.beforeEach(from => {
    let isLogin = Store.getters.isLogin;
    if(isLogin || from.name =='login'){
        return true;
    }else{
        return {name : 'login'}
    }
})
export default Router;