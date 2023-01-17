const Photo = require("./schema");
const mongoose = require("mongoose");

const getAllPhotos = async (req, res) => {
  const allPhotos = await Photo.find({});
  res.json({ allPhotos });
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
  const { photoId } = req.body;
  await Photo.deleteOne({ photoId });

  res.json("Photo deleted successfully");
};

module.exports = {
  getAllPhotos,
  uploadPhoto,
  deletePhoto,
};
