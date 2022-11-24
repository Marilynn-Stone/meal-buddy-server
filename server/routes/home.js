const router = require("express").Router();

require("dotenv").config();

module.exports = (db) => {
  router.get("/home", (req, res) => {
    // If the user is loggedin
    if (req.session.loggedin) {
      // Output username
      res.send("Welcome back, " + req.session.username + "!");
    } else {
      // Not logged in
      res.send("Please login to view this page!");
    }
    res.end();

    //   if (req.session.loggedIn) {
    //     res.setHeader("Content-Type", "text/html");
    //     res.write("Welcome " + req.session.username + " to your dashboard");
    //     res.write('<a href="/logout">Logout</a>');
    //     res.end();
    //   } else res.redirect("/login");

    //   res.send({ message: "Hello from home page!" });
  });

  return router;
};
