const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 5500;
const app = express();

// Express middleware inspired by mini projecy
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DB connection 
const db = mysql.connectNow(
  {
   
  })