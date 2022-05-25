import { APIGatewayProxyHandler } from "aws-lambda";
import serverless from "serverless-http";
import express, { Request, Response } from "express";

const app = express();

app.get("/status", (req: Request, res: Response) => {
  res.send({ message: "Up & running..." });
});

// @ts-ignore
export const handler: APIGatewayProxyHandler = serverless(app);
