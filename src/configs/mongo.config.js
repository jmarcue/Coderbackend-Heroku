import mongoose from 'mongoose';
import { serverConfig } from './server.config.js';

export default class mongoConnect {
  constructor() {
      this.connection = this.createConnection();
  }

  createConnection() {
    const uri = serverConfig.MONGO_ATLAS;
    const options = { useNewUrlParser: true, useUnifiedTopology: true };
    
    mongoose.connect(uri, options).then(err => { err });
  }
}