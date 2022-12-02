const path = require("path");

module.exports = function (dev) {
  
  dev.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/notes.html"));
  });

  dev.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });
};