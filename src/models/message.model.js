import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const mensajeSchema = new Schema({
  message : {
    user: { type: String },
    mensaje: { type: String }
  }
});

const messageModel = mongoose.model('messageModel', mensajeSchema, 'messages');
export default messageModel;