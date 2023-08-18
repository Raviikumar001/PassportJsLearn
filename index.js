const express =require('express');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes')
const mongoose = require('mongoose');
const cookieSession= require('cookie-session');
const passport = require('passport');
require('dotenv').config();

require('./config/passport-setup');


const app = express();

connectToDb();
app.set('view engine','ejs');
app.use(cookieSession({
  maxAge: 24 * 60 * 60 *1000,
  keys: [process.env.COOKIE_KEY]
}));

// initialize passport
app.use(passport.initialize())
app.use(passport.session())

//set up routes

app.use('/auth',authRoutes);

app.use('/profile',profileRoutes);

app.get('/',(req,res)=>{
  res.render("home")
})

app.listen(3000,function(){
  console.log('App is listening on port 3000');
})


async function  connectToDb()
{
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}