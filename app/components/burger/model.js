const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BurgerSchema = new Schema({
  title: String,
  ingridients: Array,
  created: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Burger', BurgerSchema)