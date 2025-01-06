var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var cors = require('cors'); 
var User = require('./models/user'); 
var bcrypt = require('bcrypt');
var app = express();
const PORT = 3001;

// Enable CORS
app.use(cors());

// MongoDB connection URI
const uri = "mongodb+srv://kaviarasurp758:kaviarasu758@cluster0.dbreu.mongodb.net/";

// Connect to MongoDB   
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Connected successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
    });

// Middleware to parse JSON request body
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send("Welcome da maple");
});

// Signup route
app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        // Save the user to the database
        await newUser.save();
        console.log("User added successfully");
        res.status(200).send("User added successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving user");
    }
});

// JSON response route
app.get('/json', (req, res) => {
    res.json({ server: "Welcome da MACHI", url: "localhost", port: PORT });
});

// Static file route
app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Fetch all signup records
app.get('/getsignup', async (req, res) => {
    try {
        const allSignupRecords = await User.find();
        console.log("All records are fetched");
        res.json(allSignupRecords);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching records");
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            const isMatch = await bcrypt.compare(password, existingUser.password);
            if (isMatch) {
                console.log("Login Successful");
                res.json({ message: "Login Successful", isLoggedIn: true });
            } else {
                console.log("Incorrect password");
                res.status(401).json({ message: "Invalid email or password", isLoggedIn: false });
            }
        } else {
            console.log("User not found");
            res.status(401).json({ message: "Invalid email or password", isLoggedIn: false });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error processing the request");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Backend server started\nUrl: http://localhost:${PORT}`);
});
