const express = require("express");
const app = express();
const userRouter = require("./routers/user_router");
const mongoose = require("./db/mongoose");
app.use(express.json());
app.use(userRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log("first");
});
