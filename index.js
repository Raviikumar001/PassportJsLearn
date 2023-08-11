const express = require("express");
const passport = require("passport");
const session = require('express-session');
require("./auth");
const app = express();
app.use(session({ secret: 'cats'}));
app.use(passport.initialize())
app.use(passport.session())

function isLoggedIn(req,res, next)
{

    req.user ? next(): res.sendStatus(401);
}

app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with google</a>');
});


app.get("/auth/google",

passport.authenticate('google', {scope: ['email', 'profile']})
);

app.get('/google/callback',
 passport.authenticate('google',{
    successRedirect: '/protected',
    failureRedirect: './auth/failure',
 }))
 

 app.get('/auth/failure', (req,res)=> {
    res.send('something went wrong');
 })
app.get("/protected", isLoggedIn,(req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

app.get('/logout', (req,res)=>{

    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
    req.session.destroy();
    res.send('Goodbye!');
})

app.listen(3000, () => console.log("listening on: 3000"));
