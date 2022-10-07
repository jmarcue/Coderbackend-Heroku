import messageModel from '../models/message.model.js';
import mongoConnect from '../config/mongo.config.js';

class messageClass {
  constructor () {
    this.cxn = new mongoConnect();
  }

  async addMsg(req, res) {
    try {
      if (!req) {
        return res.status(404).json({ mensaje: 'Error al agregar un producto' });
      }
      const data = await { ...req };
      const newMsg = await messageModel.create(data);
    }
    catch (error) {
      console.log(error);
    }
  }

  async findAllMsg(req, res) {
    try {
      let messageFind = await messageModel.find();
      return res.status(200).json(messageFind);
    }
    catch (error) {
      return res.status(400).json({ mensaje: 'Ocurrió un error', error });
    }
  }
}

export default messageClass;