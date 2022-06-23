const express = require("express");
const app = express();
const userRouter = require("./routers/user_router");
const mongoose = require("./db/mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(userRouter);

const port = process.env.PORT || 5500;

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
