const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const knex = require("knex");

const database = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "Runner81!",
    database: "colorpalettelibrary",
  },
});

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, response) => {
  database
    .select("*")
    .from("library")
    .then((data) => {
      response.json(data);
    });
});

app.post("/", (req, response) => {
  const { id, colors, name } = req.body;
  database
    .insert({ id: id, colors: colors, name: name })
    .into("library")
    .then(response.json("Palette Added"));
});

app.put("/palette", (req, res) => {
  const { id, colors, name } = req.body;
  database("library")
    .where("id", "=", id)
    .update({ colors: colors, name: name })
    .then(res.json("Update Complete"));
});

app.delete("/delete", (req, res) => {
  const { id } = req.body;
  database("library")
    .where("id", "=", id)
    .del()
    .then(res.json("Delete Complete"));
});

app.listen(3001, () => {
  console.log("app is running on port 3001");
});
