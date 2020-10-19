const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware:
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is live @ http://localhost:${PORT}`);
});