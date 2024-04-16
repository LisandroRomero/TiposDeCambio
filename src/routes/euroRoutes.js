const { Router } = require("express");
const euro = require("../controllers/euro");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const cambioeuro = await euro();
    res.status(200).json(cambioeuro);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
