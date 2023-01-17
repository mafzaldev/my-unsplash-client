const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  photoId: { type: String, required: true, unique: true },
  photoLabel: { type: String, required: true },
  photoURL: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Photo", photoSchema);
