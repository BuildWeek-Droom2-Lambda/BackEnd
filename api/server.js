const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("../auth/auth-router");
const jobRouter = require("../jobs/jobs-router");
const seekerRouter = require("../seekers/seekers-router");
const companyRouter = require("../companies/companies-router");

// create a server instance using express
const server = express();

// use necessary middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

// use routers
server.use("/api/", authRouter);
server.use("/api/jobs", jobRouter);
server.use("/api/seekers", seekerRouter);
server.use("/api/companies", companyRouter);

// welcome message
server.get("/", (req, res) => res.status(200).json({ message: "Welcome to the Droom api!"}));

// general error message
server.use((req, res, next, err) => res.status(500).json({ message: "A server error occurred." }));

module.exports = server;