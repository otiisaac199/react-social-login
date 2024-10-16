const router = require("express").Router();
const passport = require("passport");
require("dotenv").config();

// require("https").globalAgent.options.rejectUnauthorized = false;

router.get("/login/success", (req, res) => {
  if (req.user)
    res.status(200).json({
      success: true,
      message: "Login successfull",
      user: req.user,
      // cookies: req.cookies,
    });
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect(process.env.CLIENT_URL);
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Login failed",
  });
});

// GOOGLE AUTH
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

// GITHUB AUTH
router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
