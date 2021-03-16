import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueCookie from 'vue-cookie'
import cookie from './plugins/cookie'

require('./assets/css/custom.css');

const api = axios.create({ baseURL: 'http://localhost:3333' })
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            // localStorage.clear()
            // router.replace({ path: '/' })
        } else {
            return Promise.reject(error.response.data)
        }
    }
)
Vue.api = Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCookie)

new Vue({
    router,
    cookie,
    render: h => h(App)
}).$mount('#app')