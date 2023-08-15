const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const userSchmea = new Schema({
    username:String,
    googleId:String

})

const User= mongoose.model('user',userSchmea);

module.exports = User
