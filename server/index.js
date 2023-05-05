const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const client = __dirname + "/../client/dist";

// serve vue app
app.use(express.static(client));

// let store = {
// 	deck_id: {
// 		players: [
// 			{
// 				name: String,
// 				key: String
// 			},
// 			...
// 		]
// 	}
// }

app.get("/", (req, res) =>
{
	res.sendFile(path.resolve(client, "index.html"));
})

app.get("/api", (req, res) =>
{
	res.json({
		message: "here is my message"
	})
})

app.get("/api/:deck_id", (req, res) =>
{
	res.json(store)
})

app.listen(PORT, () =>
{
	console.log(`Server listening on ${PORT}`)
})