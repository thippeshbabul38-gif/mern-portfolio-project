const express = require("express");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

require("dotenv").config();

const Message = require("./models/Message");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

/* =========================
   MONGODB CONNECTION
========================= */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed");
    console.log(error);
  });

/* =========================
   HOME ROUTE
========================= */

app.get("/", (req, res) => {
  res.send("Backend is running smoothly");
});

/* =========================
   TEST EMAIL ROUTE
========================= */

app.get("/test-email", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: "Test Email From Portfolio",
      text: "Nodemailer is working successfully"
    });

    console.log("TEST EMAIL SENT:", info.response);

    res.send("Test email sent successfully");
  } catch (error) {
    console.log("TEST EMAIL ERROR:", error);
    res.send("Email sending failed");
  }
});

/* =========================
   CONTACT FORM EMAIL + MONGODB
========================= */

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await Message.create({
      name,
      email,
      message
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `
    });

    console.log("MESSAGE SAVED TO MONGODB");
    console.log("CONTACT EMAIL SENT SUCCESSFULLY");

    res.json({
      message: "Message saved and email sent successfully"
    });
  } catch (error) {
    console.log("CONTACT ERROR:", error);

    res.status(500).json({
      message: "Message saving or email sending failed"
    });
  }
});

/* =========================
   GET ALL MESSAGES
========================= */

app.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching messages"
    });
  }
});

/* =========================
   RESUME DOWNLOAD
========================= */

app.get("/resume", (req, res) => {
  const resumePath = path.join(
    __dirname,
    "files",
    "resume.pdf"
  );

  res.download(
    resumePath,
    "Thippesh_Resume.pdf"
  );
});

/* =========================
   SERVER
========================= */

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

/* KEEP SERVER ACTIVE */

setInterval(() => {}, 1000);