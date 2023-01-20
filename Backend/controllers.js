const Photo = require("./schema");
const mongoose = require("mongoose");

const testEndpoint = (req, res) => {
  res.status(200).json({ message: "Test endpoint works" });
};

const getAllPhotos = async (req, res) => {
  const responsePhotos = await Photo.find({});
  res.status(200).json({ responsePhotos });
};

const searchPhotos = async (req, res) => {
  const { query } = req.params;
  const responsePhotos = await Photo.find({
    photoLabel: { $regex: query, $options: "i" },
  });
  res.status(200).json({ responsePhotos });
};

const uploadPhoto = async (req, res) => {
  const { photoLabel, photoURL } = req.body;

  const newPhoto = new Photo({
    photoId: mongoose.Types.ObjectId(),
    photoLabel,
    photoURL,
  });
  await newPhoto.save();

  res
    .status(200)
    .json({ data: newPhoto, message: "Photo uploaded successfully" });
};

const deletePhoto = async (req, res) => {
  const { photoId } = req.params;
  await Photo.deleteOne({ photoId });

  res.status(200).json({ message: "Photo deleted successfully" });
};

module.exports = {
  testEndpoint,
  getAllPhotos,
  searchPhotos,
  uploadPhoto,
  deletePhoto,
};
