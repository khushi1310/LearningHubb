// this is a test file
import express from "express"
import path from "path";
import node from "./api/nodes.route.js"
import user from "./api/register.route.js"
import flash from "./api/flashcard.route.js"
import cors from 'cors';
import bodyParser from "body-parser";


const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(cors());
app.use("/api/nodes", node)
app.use('/api/register', user)
app.use("/api/flashcard", flash)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app;