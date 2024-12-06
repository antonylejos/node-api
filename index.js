// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Route to add two numbers
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;

    // Check if both numbers are provided
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        const result = num1 + num2;
        res.status(200).json({ result });
    } else {
        res.status(400).json({ error: 'Invalid input. Please provide two numbers.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
