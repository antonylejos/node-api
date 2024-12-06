const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js API!');
});

app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ];
    res.json(users);
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    if (!newUser.name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    newUser.id = Date.now(); // Generate a simple unique ID
    res.status(201).json(newUser);
});

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});
