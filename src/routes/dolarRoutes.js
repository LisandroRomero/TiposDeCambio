const { Router } = require("express");
const dolarBlue = require("../controllers/dolarBlue");
const dolarCrypto = require("../controllers/dolarCrypto");
const dolarOficial = require("../controllers/dolarOficial");
const dolarTarjeta = require("../controllers/dolarTarjeta");
const router = Router();

router.get("/blue", async (req, res) => {
  try {
    const cambioDolarBlue = await dolarBlue();
    res.status(200).json(cambioDolarBlue);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/crypto", async (req, res) => {
  try {
    const cambioDolarCrypto = await dolarCrypto();
    res.status(200).json(cambioDolarCrypto);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/oficial", async (req, res) => {
  try {
    const cambioDolarOficial = await dolarOficial();
    res.status(200).json(cambioDolarOficial);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
router.get("/tarjeta", async (req, res) => {
  try {
    const cambioDolarTarjeta = await dolarTarjeta();
    res.status(200).json(cambioDolarTarjeta);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
