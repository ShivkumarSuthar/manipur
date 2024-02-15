const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors

const router = express.Router();
const app = express();

// Use cors middleware before defining routes
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fileuploads', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a Mongoose schema
const fileSchema = new mongoose.Schema({
    filename: String,
    path: String
  });

  const File = mongoose.model('File', fileSchema);

// making routes
router.get("/test", (req, res) => {
    res.send({ messages: 'welcome' });
});

// Tell the app to use the router for requests to "/"
// app.use("/", router);

router.post('/upload', async (req, res) => {
    // Check if a file was uploaded
    if (!req.files || !req.files.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
  
    // Get the uploaded file
    const uploadedFile = req.files.file;
  
    // Define the directory where the file will be saved
    const uploadDir = path.join(__dirname, 'uploads');
  
    // Create the uploads directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
  
    // Define the path where the file will be saved
    const filePath = path.join(uploadDir, uploadedFile.name);
  
    // Save the file to the server's filesystem
    uploadedFile.mv(filePath, async (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to upload file' });
      }
  
      // Save file information to MongoDB
      const fileData = new File({
        filename: uploadedFile.name,
        path: filePath
      });
      try {
        await fileData.save();
        res.status(200).json({ message: 'File uploaded successfully', filename: uploadedFile.name });
      } catch (error) {
        console.error('Error saving file information to MongoDB:', error);
        res.status(500).json({ error: 'Failed to save file information to database' });
      }
    });
  });






// Start the server
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
