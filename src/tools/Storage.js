import {createStore} from 'vuex';
const Store = createStore({
    state (){
        return {
            username:"",
            userPassword:""
        }
    },
    getters:{
        isLogin(state){
            return state.username.length > 0;
        }
    },
    mutations:{
        clearUserInfo(state){
            state.username = "";
            state.userPassword = "";
        },
        registUserInfo(state,{name,password}){
            state.username = name;
            state.password = password;
        }
    }
})
export default Store;