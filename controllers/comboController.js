const Combo = require("../models/comboModel");

// Get All Combos
const getCombos = async (req, res) => {
  try {
    const combos = await Combo.find({});

    res.status(200).json({
      success: true,
      total: combos.length,
      combos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Combo by ID
const getComboById = async (req, res) => {
  try {
    const combo = await Combo.findById(req.params.id);

    if (!combo) {
      return res.status(404).json({
        success: false,
        message: "Combo not found",
      });
    }

    res.status(200).json({
      success: true,
      combo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Create Combo
const createCombo = async (req, res) => {
  try {
    const combo = await Combo.create(req.body);

    res.status(201).json({
      success: true,
      combo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Combo
const updateCombo = async (req, res) => {
  try {
    const combo = await Combo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // updated data return karega + schema validation chalega
    );

    if (!combo) {
      return res.status(404).json({
        success: false,
        message: "Combo not found",
      });
    }

    res.status(200).json({
      success: true,
      combo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Combo
const deleteCombo = async (req, res) => {
  try {
    const combo = await Combo.findByIdAndDelete(req.params.id);

    if (!combo) {
      return res.status(404).json({
        success: false,
        message: "Combo not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Combo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getCombos,
  getComboById,
  createCombo,
  updateCombo,
  deleteCombo,
};