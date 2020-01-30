const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const authenticate = require("../auth/auth-middleware");
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

// use routers, with the appropriate ones protected with authN
server.use("/api/", authRouter);
// server.use("/api/jobs", authenticate, jobRouter);
server.use("/api/jobs", jobRouter);
// server.use("/api/seekers", authenticate, seekerRouter);
server.use("/api/seekers", seekerRouter);
// server.use("/api/companies", authenticate, companyRouter);
server.use("/api/companies", companyRouter);

// welcome message
server.get("/", (req, res) => res.status(200).json({ message: "Welcome to the Build Week api!"}));

// general error message
server.use((req, res, next, err) => res.status(500).json({ message: "A server error occurred." }));

module.exports = server;