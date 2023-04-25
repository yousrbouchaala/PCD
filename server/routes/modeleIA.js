const express = require('express');
const multer = require('multer');
const tf = require('@tensorflow/tfjs-node');
const { createCanvas, Image } = require('canvas');

const app = express();

// Configure multer middleware for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Load the pre-trained EfficientNetB5 model
const model = await tf.loadLayersModel('C:/Users/User/saved_models/my_model.h5');

// Create a route for handling image uploads and classification
app.post('/classify', upload.single('image'), async (req, res) => {
  try {
    // Load the uploaded image into a Tensorflow tensor
    const image = new Image();
    image.src = req.file.path;
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0, image.width, image.height);
    const tensor = tf.browser.fromPixels(canvas);

    // Preprocess the image tensor for input to the model
    const processed = tf.image.resizeBilinear(tensor, [224, 224])
                          .toFloat()
                          .sub(tf.scalar(127.5))
                          .div(tf.scalar(127.5))
                          .expandDims();

    // Make a prediction using the model
    const prediction = await model.predict(processed).data();

    // Return the prediction results to the client
    res.json({ prediction: prediction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the image.' });
  }
});

