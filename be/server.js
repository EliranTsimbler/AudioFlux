const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// מאפשר קריאת JSON מהבקשה
app.use(bodyParser.json());

// מאפשר CORS כדי שה-FE יוכל לשלוח בקשות
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// נקודת קצה לקבלת נתוני הטופס
app.post("/submit", (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Subject:", subject);
  console.log("Message:", message);
  res.send("Data received successfully!");
});

// הפעלת השרת
app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});
