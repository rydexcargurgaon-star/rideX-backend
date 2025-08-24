import chalk from "chalk";
import express from "express";
import routes from "./routes/index.js";
import cors from "cors";
const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", routes);
app.get("/health", (req, res) => {
    res.status(200).send("Healthy");
});
// const hitAPI = async () => {
//   try {
//     const response = await axios.get(
//       "https://ridex-backend-2hu0.onrender.com/health"
//     );
//     console.log("API Response:", response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// setInterval(hitAPI, 10000);
app.listen(port, () => {
    console.log(chalk.magentaBright(`Server is running on port http://localhost:${port}`));
});
