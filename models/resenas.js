import { Schema, model, SchemaTypes } from "mongoose";

const reviewSchema = new Schema({
  title: {
    type: String,
    maxlength: 50  // Limitar el título a 50 caracteres
  },
  body: String,
  rating: Number,
  barbero:String,
  cita: {
    type: SchemaTypes.ObjectId,
    ref: 'Cita'
  },
  usuario: String,
  barberiaId: {
    type: SchemaTypes.ObjectId,
    ref: 'Barberia'
  }
});

const Review = model('Review', reviewSchema);

export default Review;