import { createApp } from 'vue'
import App from './App.vue'
import Router  from './tools/Router';
import Store from './tools/Storage';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElIconModules from '@element-plus/icons-vue';
const app = createApp(App);
app.use(Router);
app.use(Store);
app.use(ElementPlus);
Object.keys(ElIconModules).forEach(key => {
    app.component(key, ElIconModules[key])
  })
app.mount('#app')
