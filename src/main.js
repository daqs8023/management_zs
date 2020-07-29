import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.config.productionTip = false

Vue.prototype.$axios = axios
//测试数据
import Mock from './mock'
Mock.start();

//全局组件
import SlideVerify from 'vue-monoplasty-slide-verify';
import {Loading,Message,MessageBox,Notification} from 'element-ui'
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.use(SlideVerify);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

