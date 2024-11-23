// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const labRoutes = require("./routes/labRoutes");
const chatRoutes = require("./routes/chatRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

//test route
app.get('/', (req, res)=>{
    res.send('<h1> I am working </h1>')
})

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/labs", labRoutes);
app.use("/api/chats", chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
