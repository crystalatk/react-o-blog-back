"use strict";

const HTTP = require("http");

const HOSTNAME = "127.0.0.1";
const PORT = 3232;
const express = require("express"),
  app = express();

const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});

const rootController = require("./routes/index"),
  blogController = require("./routes/blog");

app.use("/", rootController);
app.use("/blog", blogController);
