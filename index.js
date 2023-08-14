const express =require('express');
const authRoutes = require('./routes/auth-routes');
const mongoose = require('mongoose');

require('dotenv').config();

require('./config/passport-setup');


const app = express();
(async () => {
try {
  await mongoose.connect(process.env.MONGO_DB_URI);
  console.log('Connected to MongoDB');
} catch (err) {
  console.error('Error connecting to MongoDB:', err);
}
})();
app.set('view engine','ejs');

//set up routes
app.use('/auth',authRoutes);

app.get('/',(req,res)=>{
  res.render("home")
})

app.listen(3000,function(){
  console.log('App is listening on port 3000');
})