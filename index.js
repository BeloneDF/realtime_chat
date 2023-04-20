const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/auth", async (req, res) => {
  const { username} = req.body;
  const key = "ccdfb912-908b-4483-999b-4184adb1259c";

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": key } }
    );
    return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }

});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
