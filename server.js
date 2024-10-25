const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serven statiske filer
app.use(express.static(path.join(__dirname, 'public')));

// Default til index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
