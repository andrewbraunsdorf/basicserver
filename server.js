const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use("/", express.static('public'));

app.get("/api", (req, res) => {
	res.send("This is a response from Homebase");
});

const port = process.env.PORT;
const ip = process.env.IP;

app.listen(port, ip, function(){
	console.log(`app listeing on port ${port}`);
	console.log(`App running on ip ${ip}`);
});
