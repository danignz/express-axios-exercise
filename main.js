const express = require("express");
const axios = require("axios");

const app = express();

// Iteration 1
//http://127.0.0.1:3000/pikachu
app.get("/pikachu", (req, res, next) => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      console.log("All done");
    });
});

// Iteration 2
//http://127.0.0.1:3000/rockets
app.get("/rockets", async (req, res, next) => {
  try {
    const response = await axios.get("https://api.spacexdata.com/v4/rockets");
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

// Iteration 3
//http://127.0.0.1:3000/randomuser
app.get("/randomuser", async (req, res, next) => {
  try {
    const response = await axios.get("https://randomuser.me/api/");
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

// Iteration 4
//http://127.0.0.1:3000/
app.get("/", (req, res, next) => {
  res.send(
    `<a href="/pikachu">Pikachu</a><br><a href="/rockets">Rockets</a><br><a href="/randomuser">Randomuser</a>`
  );
});

app.listen(3000, () => {
  console.log("Server running on port 3000 🛫");
});
