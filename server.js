const express = require("express");
const app = express();

app.use(express.json()); // parses incoming requests with JSON payloads

//add routes here

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})
