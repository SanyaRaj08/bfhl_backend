const express = require('express');
const app = express();

app.use(express.json());

// GET Method
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// POST Method
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            message: 'Invalid input data. Expected an array of strings.'
        });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.sort().pop() || "";

    const response = {
        is_success: true,
        user_id: 'SanyaRaj_21BIT0732',
        email: 'sanya@xyz.com',
        roll_number: '21BIT0732',
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    };

    res.json(response);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
