const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

// Production URL Webhook kamu
const N8N_WEBHOOK_URL = "https://calcaneal-noncarnivorously-taina.ngrok-free.dev/webhook/7a15924f-c7d9-4a64-9e99-38c9c6840270";

// FIX PENTING → agar "/" menampilkan index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post('/ask', async (req, res) => {
    try {
        console.log("📩 Received question:", req.body);

        const response = await axios.post(N8N_WEBHOOK_URL, {
            question: req.body.question
        });

        console.log("📨 Response from n8n:", response.data);

       res.json({ answer: JSON.stringify(response.data, null, 2) });


    } catch (error) {
        console.log("❌ FULL ERROR:");
        console.log(error.toJSON ? error.toJSON() : error);

        res.status(500).json({ error: "N8N ERROR", details: error.toString() });
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
