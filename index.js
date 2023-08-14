const express =require('express');
const authRoutes = require('./routes/auth-routes');


require('dotenv').config();

require('./config/passport-setup');


const app = express();

app.set('view engine','ejs');

//set up routes
app.use('/auth',authRoutes);

app.get('/',(req,res)=>{
  res.render("home")
})

app.listen(3000,function(){
  console.log('App is listening on port 3000');
})