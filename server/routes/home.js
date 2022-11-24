const router = require("express").Router();

require("dotenv").config();

module.exports = (db) => {
  router.get("/home", (req, res) => {
    res.send({ message: "Hello from home page!" });
  });

  return router;
};
