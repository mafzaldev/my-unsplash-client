const router = require("express").Router();
const { getAllPhotos, uploadPhoto, deletePhoto } = require("./controllers");

router.get("/getphotos", getAllPhotos);
router.post("/uploadphoto", uploadPhoto);
router.delete("/deletephoto", deletePhoto);

module.exports = router;
