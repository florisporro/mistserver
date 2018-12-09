import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap';
import MistServer from './lib/mistserver.js'

window.EventBus = new Vue();

document.addEventListener('DOMContentLoaded', function () {
  new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
  });
  var mist = new MistServer({url:"http://larry:4242/api2", username:"test", password:"test"});
  mist.on("main_config", console.log);
  mist.connect().then(console.log).catch(console.log);
});
