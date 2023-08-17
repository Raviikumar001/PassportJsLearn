const router = require("express").Router();
const passport = require("passport");

//auth login

router.get("/login", (req, res) => {
  res.render("login");
});

//auth logout
router.get("/logout", (req, res) => {
  //handle with logout.
  res.send("loggingout");
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
  res.send("you reached the callback uri");
});

module.exports = router;
