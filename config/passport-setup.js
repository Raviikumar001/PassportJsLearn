const passport   = require('passport');

const GoogleStrategy = require('passport-google-oauth20');
const User= require('../models/user-models');
 

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile,done) {

    //  check if user exists
    User.findOne({googleId:profile.id}).then((currentUser)=> {
      if(currentUser){
          console.log('user: '+ currentUser);
      }else{
        new User({
          username: profile.displayName,
          googleId: profile.id,
      }).save().then((newUser) => {
          console.log('new user created: ', newUser);
      });
      }
    })

    
    
  }
));