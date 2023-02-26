import Vue from 'vue'
import axios from "axios";
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import httpClientAxios from './auth/http-common';
import Modal from './components/C_GeneralDialog.vue';
import VueMeta from 'vue-meta';

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  httpClientAxios,
  axios,
  Modal,
  VueMeta: {
    keyName: 'head',
    refreshOnceOnNavigation: true
  },
  render: h => h(App)
}).$mount('#app')