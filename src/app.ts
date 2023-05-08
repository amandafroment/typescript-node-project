import express, { Request, Response, NextFunction } from "express";

//json middleware
import { json } from "body-parser";

import todoRoutes from "./routes/todos";

const app = express();

// will parse any json data from the body
app.use(json());

app.use("/todos", todoRoutes);

//middleware to handle errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
