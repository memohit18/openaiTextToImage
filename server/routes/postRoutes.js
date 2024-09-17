import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: "dudxs35n5",
  api_key: "738449316652613",
  api_secret: "W_zGcI1W11_j68fsNOSB56J8DIg",
});

// GET ALL POST
router.route("/").get(async (req, res) => {
  try {
    const post = await Post.find({});
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

// CREATE A POST
router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;

    // Validate if necessary fields are present
    if (!name || !prompt || !photo) {
      return res
        .status(400)
        .json({
          success: false,
          message: "All fields (name, prompt, photo) are required",
        });
    }
    // Upload base64 data to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(photo, {
      resource_type: "image", // Specify that this is an image upload
    });

    // Create a new post with the Cloudinary image URL
    const newPost = await Post.create({
      name,
      prompt,
      photo: uploadResponse.secure_url, // Cloudinary image URL
    });

    // Respond with success and new post data
    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    console.error("Error uploading file:", error);

    // Handle specific Cloudinary errors or return general error
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
