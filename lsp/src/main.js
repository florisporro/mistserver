import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

window.EventBus = new Vue();

document.addEventListener('DOMContentLoaded', function () {
  new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
  })
});