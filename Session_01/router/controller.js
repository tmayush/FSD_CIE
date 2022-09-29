const express = require("express");
const studentSchemaModel = require("../model/model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const x = await studentSchemaModel.find();
    res.json(x);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const y = await studentSchemaModel.findById(req.params.id);
    res.json(y);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  const stu1 = new studentSchemaModel({
    Name: req.body.Name,
    Email: req.body.Email,
    College: req.body.College,
  });
  try {
    const x1 = await stu1.save();
    res.json(x1);
  } catch (error) {
    res.send(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const a = await studentSchemaModel.findById(req.params.id);
    a.Email = req.body.Email;
    const a1 = a.save();
    res.json(a1);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
