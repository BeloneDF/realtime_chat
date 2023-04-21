const express = require("express");
const cors = require("cors");
const axios = require("axios");
const variables = require("./variables");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/auth", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      variables.API_URL,
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": variables.CHAT_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});