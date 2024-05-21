const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Registration endpoint
app.post('/register', (req, res) => {
  const { username, password, email } = req.body;
  
  // Here you would normally handle the registration logic, such as saving to a database
  console.log(`Username: ${username}, Password: ${password}, Email: ${email}`);
  
  // For now, just send a success response
  res.status(200).json({ message: 'Registration successful!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
