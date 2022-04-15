const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
let reset = true;
const db= require("./app/models");
if( reset ){
   db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
}
 else{
  db.sequelize.sync();
}

/**/

require("./app/routes/riptide.routes")(app);
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to RipTide application." });
  });

  // set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
