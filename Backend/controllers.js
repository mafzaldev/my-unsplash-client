const Photo = require("./schema");
const mongoose = require("mongoose");

const testEndpoint = (req, res) => {
  res.json({ message: "Test endpoint works" });
};

const getAllPhotos = async (req, res) => {
  const responsePhotos = await Photo.find({});
  res.json({ responsePhotos });
};

const searchPhotos = async (req, res) => {
  const { query } = req.params;
  const responsePhotos = await Photo.find({
    photoLabel: { $regex: query, $options: "i" },
  });
  res.json({ responsePhotos });
};

const uploadPhoto = async (req, res) => {
  const { photoLabel, photoURL } = req.body;

  const newPhoto = new Photo({
    photoId: mongoose.Types.ObjectId(),
    photoLabel,
    photoURL,
  });
  await newPhoto.save();

  res.json({ data: newPhoto, message: "Photo uploaded successfully" });
};

const deletePhoto = async (req, res) => {
  const { photoId } = req.params;
  await Photo.deleteOne({ photoId });

  res.json({ message: "Photo deleted successfully" });
};

module.exports = {
  testEndpoint,
  getAllPhotos,
  searchPhotos,
  uploadPhoto,
  deletePhoto,
};
