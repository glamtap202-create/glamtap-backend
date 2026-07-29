const express = require("express");
const router = express.Router();
const {
  getCombos,
  getComboById,
  createCombo,
  updateCombo,
  deleteCombo,
} = require("../controllers/comboController");

router.get("/", getCombos);
router.get("/:id", getComboById);
router.post("/", createCombo);
router.put("/:id", updateCombo);       // ya router.patch("/:id", updateCombo)
router.delete("/:id", deleteCombo);

module.exports = router;