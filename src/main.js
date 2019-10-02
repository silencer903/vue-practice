import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from "./locale"
import App from './views/app/App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import '@/styles/styles.scss';

Vue.config.productionTip = false;
Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'en',
    messages
});

const EventBus = new Vue();
Object.defineProperties(Vue.prototype,{
    $bus:{
        get: function () {
            return EventBus;
        }
    }
});

new Vue({
    i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
