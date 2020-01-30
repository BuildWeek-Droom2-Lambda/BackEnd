const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("../auth/auth-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api", authRouter);

server.get("/", (req, res) => res.status(200).json({ message: "Welcome to the Build Week api!"}));

server.use((req, res, next, err) => res.status(500).json({ message: "A server error occurred." }));

module.exports = server;