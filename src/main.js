import Vue from 'vue'
import App from './App.vue'
import VueFormInput from "./vue-form-input.vue";

Vue.config.productionTip = false

Vue.component("FormInput", VueFormInput);

new Vue({
  render: h => h(App),
}).$mount('#app')
