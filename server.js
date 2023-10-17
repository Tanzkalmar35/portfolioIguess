const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Route all requests to the index.html for client-side routing
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/en/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/en/about.html');
});

app.get('/work', (req, res) => {
    res.sendFile(__dirname + '/public/en/work.html');
});

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/public/en/404.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
