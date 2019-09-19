import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios';
import element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import '@/assets/css/main.scss' //全局样式
import '@/assets/font/iconfont.scss' //https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.11&manage_type=myprojects&projectId=538407
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(element, {
  size: "small",
  local: "local"
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
