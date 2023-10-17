const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Route all requests to the index.html for client-side routing
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
