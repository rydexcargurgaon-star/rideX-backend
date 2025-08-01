import chalk from "chalk";
import express from "express";
import routes from "./routes/index.js";
import cors from "cors";
const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", routes);
app.listen(port, () => {
    console.log(chalk.magentaBright(`Server is running on port http://localhost:${port}`));
});
