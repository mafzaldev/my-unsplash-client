const Photo = require("./schema");
const mongoose = require("mongoose");

const testEndpoint = (req, res) => {
  res.status(200).json({ message: "Test endpoint works" });
};

const getAllPhotos = async (req, res) => {
  let responsePhotos;
  try {
    responsePhotos = await Photo.find({});
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }

  res.status(200).json({ responsePhotos });
};

const searchPhotos = async (req, res) => {
  const { query } = req.params;
  let responsePhotos;

  try {
    responsePhotos = await Photo.find({
      photoLabel: { $regex: query, $options: "i" },
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }

  res.status(200).json({ responsePhotos });
};

const uploadPhoto = async (req, res) => {
  const { photoLabel, photoURL } = req.body;

  const newPhoto = new Photo({
    photoId: mongoose.Types.ObjectId(),
    photoLabel,
    photoURL,
  });
  try {
    await newPhoto.save();
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }

  res
    .status(200)
    .json({ data: newPhoto, message: "Photo uploaded successfully" });
};

const deletePhoto = async (req, res) => {
  const { photoId } = req.params;
  try {
    await Photo.deleteOne({ photoId });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }

  res.status(200).json({ message: "Photo deleted successfully" });
};

module.exports = {
  testEndpoint,
  getAllPhotos,
  searchPhotos,
  uploadPhoto,
  deletePhoto,
};
