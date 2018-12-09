<template lang="pug">
div
  .container#title
    h1 MistServer
  .container-fluid#lsp
    .row
      #menubar.col-md-2
        MainMenu
      .col-md-10
        router-view
        
    
</template>

<script>
// Components
import Log from './components/Log.vue';
import MainMenu from './components/MainMenu.vue';

// Libraries
import moment from 'moment';
import axios from 'axios';


import * as mistserver from "./lib/mistserver";

// Setup stuff
const ls = window.localStorage;

const mist = require('./lib/mistserver');

export default {
  name: 'app',
  components: {
    Log,
    MainMenu
  },
  data() {
    return {
      isConnected: false,
      counter: 50,
      logdata: []
    }
  },
  created: function() {
    EventBus.$on('error', error => {
      // Error emits the message as a log and pauses the queue
      EventBus.$emit('log', "ERROR: " + error);
    });

    EventBus.$on('log', (message, type) => {
      var new_log = {
        timestamp: moment(),
        message: message,
        type: type || 'none'
      };
      this.logdata.push(new_log);
    });

    EventBus.$emit('log', "Hello world");
  },
  methods: {
  }
}
</script>

<style lang="scss">  
  @import './assets/main.scss';

  #lsp {
    background: white;
  }

  #menubar {
    background: rgba(0,0,0,.2);
  }

  .container#title {
    margin-top: 2em;
    h1 {
      color: white;
      font-weight: 800;
      font-family: 'Fira Sans', sans-serif;
    }
  }

</style>
