import { Router } from "express";

const router = Router();

// Product

router.get("/product", (req, res) => {
  res.json({ message: "Hello World" });
});

router.get("/product/:id", (req, res) => {
  res.send("Hello World");
});

router.post("/product", (req, res) => {
  res.send("Hello World");
});

router.put("/product/:id", (req, res) => {
  res.send("Hello World");
});

router.delete("/product/:id", (req, res) => {
  res.send("Hello World");
});

// Update

router.get("/update", (req, res) => {
  res.send("Hello World");
});

router.get("/update/:id", (req, res) => {
  res.send("Hello World");
});

router.post("/update", (req, res) => {
  res.send("Hello World");
});

router.put("/update/:id", (req, res) => {
  res.send("Hello World");
});

router.delete("/update/:id", (req, res) => {
  res.send("Hello World");
});

// Update Point

router.get("/updatepoint", (req, res) => {
  res.send("Hello World");
});

router.get("/updatepoint/:id", (req, res) => {
  res.send("Hello World");
});

router.post("/updatepoint", (req, res) => {
  res.send("Hello World");
});

router.put("/updatepoint/:id", (req, res) => {
  res.send("Hello World");
});

router.delete("/updatepoint/:id", (req, res) => {
  res.send("Hello World");
});

export default router;
