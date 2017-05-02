import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

import $ from 'jquery'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VeeValidate, { Validator } from 'vee-validate'
import messages from 'vee-validate/dist/locale/es'

import VueMask from 'v-mask'

 

// import IntroJs from 'intro.js'
window.introJs = introJs()


// Vue.config.devtools = true

sync(store, router)

Validator.addLocale(messages)
const config = {
    locale: 'es'
};
Vue.use(VeeValidate, config)


Vue.use(VueMask)
Vue.use(VueResource)
Vue.use(BootstrapVue)


Stamplay.init("hispanojobs")
// console.log(Stamplay);

Vue.http.options.root = 'https://hispanojobs.stamplayapp.com/api/cobject/v1';
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

const app = new Vue({
  router,
  store,
  ...App
})

export {app, router, store}
