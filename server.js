const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static("Develop"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"))
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
});