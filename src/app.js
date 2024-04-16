const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const app = express();

// Middlewears
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/euro", require("./routes/euroRoutes"));
app.use("/dolarblue", require("./routes/dolarBlueRoutes"));
app.use("/dolarCrypto", require("./routes/dolarCryptoRoutes"));
app.use("/pesoChileno", require("./routes/pesoChilenoRoute"));

module.exports = app;
