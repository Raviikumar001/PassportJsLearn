const router = require("express").Router();
const passport = require("passport");

//auth login

router.get("/login", (req, res) => {
  res.render("login");
});

//auth logout
router.get("/logout", (req, res) => {
  //handle with logout.
  req.logout();
  res.redirect('/');
});

//auth with google

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

//callback route for google to redirect to

router.get("/google/callback", passport.authenticate("google"), (req, res) => {

  res.redirect('/profile/')
});

module.exports = router;
