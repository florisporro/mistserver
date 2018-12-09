import axios from 'axios';
import * as md5 from 'js-md5';
import EventEmitter from 'events';

export default class MistServer extends EventEmitter {
  constructor(options) {
    super();
    this.url = options.url || '';
    this.username = options.username || '';
    this.password = options.password ? md5(options.password) : '';
  }

  sendCommand(data){
    return new Promise((resolve, reject) => {
      if (this.challenge && this.username && this.password){
        data.authorize = {'username': this.username, 'password':md5(this.password + this.challenge)};
      }
      const params = new URLSearchParams();
      params.append('command', JSON.stringify(data));
      axios.post(this.url, params)
      .then((response) => {
        var d = response.data;
        if (d.authorize.status == "CHALL"){
          if (this.challenge == d.authorize.challenge){
            reject("Username/password not correct");
            return;
          }
          this.challenge = d.authorize.challenge;
          this.sendCommand(data).then(resolve).catch(reject);
          return;
        }
        resolve(d);
      })
      .catch((error) => {
        reject(error);
      });
    });
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.sendCommand({config:true}).then((d) => {this.emit("main_config", d.config); resolve(d);}).catch(reject);
    });
  }


}
