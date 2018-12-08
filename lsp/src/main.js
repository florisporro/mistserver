import Vue from 'vue'
import App from './App.vue'

window.EventBus = new Vue();

document.addEventListener('DOMContentLoaded', function () {
  new Vue({
    el: '#app',
    render: (h) => h(App)
  })
});