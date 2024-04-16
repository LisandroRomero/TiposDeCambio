const { Router } = require("express");
const router = Router();
const pesoChileno = require("../controllers/pesoChileno");

router.get("/", async (req, res) => {
  try {
    const cambioChileno = await pesoChileno();
    res.status(200).json(cambioChileno);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
