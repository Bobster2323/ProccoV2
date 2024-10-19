const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: 'https://your-vercel-app-url.vercel.app', // Replace with your actual Vercel app URL
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// ... rest of the server code remains the same