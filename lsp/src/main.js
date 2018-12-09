import Vue from 'vue'
import App from './App.vue'
import router from './router'

window.EventBus = new Vue();

document.addEventListener('DOMContentLoaded', function () {
  new Vue({
    el: '#app',
    router,
    render: (h) => h(App)
  })
});