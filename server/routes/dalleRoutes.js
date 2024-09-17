import express, { response } from "express";
import dotenv from "dotenv";
import OpenAI from "openai"; 

dotenv.config();

const router = express.Router();

// Create an instance of OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route("/").get((req, res) => {
  res.send("Hello from DALL·E");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "url",
    });

    const image = aiResponse.data[0].url;

    res.status(200).json({ photo: image });
  } catch (error) {
    res.status(500).send(error?.message || "An error occurred");
  }
});

export default router;
