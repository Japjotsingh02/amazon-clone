/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51JgV9bHXPMM3VkBZB33vBFRIzTd2Hi3tXXH8WuEhfDfQ8KH1IuWghSBIqs8GC3nwBb1Enk5sCnRfXGFyh2ljWEIv0024x9nl1z");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const app = express();

// Automatically allow cross-origin requests
app.use(cors({origin: true}));

// Add middleware to authenticate requests
app.use(express.json());

// build multiple CRUD interfaces (API Routes):
app.get("/", (req, res) => res.status(200).send("hello-world"));

app.post("/payments/create", (req, res)=>{
  const total = req.query.total;

  const paymentIntent = stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);


