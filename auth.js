const passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID= '948605114665-gsphftv4k6afe0imisi8ub0lmtt34e8e.apps.googleusercontent.com'

const GOOGLE_CLIENT_SECRET = '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'

passport.use(new GoogleStrategy({
    clientID:GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
  
      return done(null, profile);
    
  }
));


passport.serializeUser(function(user,done)
{
  done(null,user);
})

passport.deserializeUser(function(user,done)
{
  done(null,user);
})