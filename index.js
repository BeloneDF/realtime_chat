const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/auth", (req, res) => {
  const { email, password } = req.body;
  return res.json({ email: email, password: password, secret: "sha432..." });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
