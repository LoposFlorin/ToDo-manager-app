import Vue from 'vue';
import VueMaterial from 'vue-material';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app');
