// create web server
// http://localhost:8080/comments
// http://localhost:8080/comments/1
// http://localhost:8080/comments/2

const express = require('express');
const app = express();
const port = 8080;

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET /comments
app.get('/comments', (req, res) => {
    res.send('GET /comments');
});

// GET /comments/1
app.get('/comments/:id', (req, res) => {
    res.send('GET /comments/' + req.params.id);
});

// POST /comments
app.post('/comments', (req, res) => {
    res.send('POST /comments');
});

// PUT /comments/1
app.put('/comments/:id', (req, res) => {
    res.send('PUT /comments/' + req.params.id);
});

// DELETE /comments/1
app.delete('/comments/:id', (req, res) => {
    res.send('DELETE /comments/' + req.params.id);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});