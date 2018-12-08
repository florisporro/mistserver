<template lang="pug">
div
  .container#title
    h1 MistServer
  .container#toolset
    .row
      .col-md-8
        h3 Hello world 3
        pre
      .col-md-4
        button(@click="count").btn.btn-outline-primary Count {{counter}}
        button(@click="connect").btn.btn-outline-primary Connect to Mistserver
        Log(:logdata='logdata')
</template>

<script>
// Components
import Log from './components/Log.vue';
import moment from 'moment';
import axios from 'axios';


import * as mistserver from "./lib/mistserver";

// Setup stuff
const ls = window.localStorage;

const mist = require('./lib/mistserver');

export default {
  name: 'app',
  components: {
    Log
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
      this.$socket.emit('client_log', new_log);
    });

    EventBus.$emit('log', "Hello world");
  },
  methods: {
    count() {
      this.counter++;
    },
    connect() {
      mistserver.authenticate(
        'url',
        'user',
        'pass'
      );
    }
  }
}
</script>

<style lang="scss">  
  @import './assets/main.scss';

  .container#toolset {
    border-left: 10px solid rgb(240,128,128);
    background: white;
    padding: 2em;
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
