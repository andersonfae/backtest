const express = require("express");

const app = express();

app.use(express.json());

const userRouter = require("./routes/user.routes");
app.use("/user", userRouter);

app.listen(4000, () => {
  console.log("Servidor run 4000");
});
