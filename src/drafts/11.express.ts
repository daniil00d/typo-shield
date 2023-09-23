import express from "express";
import dotenv from "dotenv";
import { bindEndpoints } from "./09.imp_bounds";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const serveByMethod = (method: "GET" | "POST") =>
  ({
    POST: app.post,
    GET: app.get,
  }[method]);

bindEndpoints.endpoints.forEach((endpoint) => {
  const imp = endpoint.imp;
  if (endpoint.pathname && imp !== undefined) {
    switch (endpoint.method) {
      case "GET": {
        return app.get(endpoint.pathname, (req, res) => {
          res.json(imp());
        });
      }
      case "POST": {
        return app.post(endpoint.pathname, (req, res) => {
          res.json(imp());
        });
      }
    }
  }
});

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
