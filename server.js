// set up a server


const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");


//start the app and create port 3000

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(port, () => console.log(`Listening on port: ${port}`));


