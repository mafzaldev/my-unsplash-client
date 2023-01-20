const router = require("express").Router();
const {
  getAllPhotos,
  searchPhotos,
  uploadPhoto,
  deletePhoto,
  testEndpoint,
} = require("./controllers");

router.get("/testendpoint", testEndpoint);
router.get("/getphotos", getAllPhotos);
router.get("/searchphotos/:query", searchPhotos);
router.post("/uploadphoto", uploadPhoto);
router.delete("/deletephoto/:photoId", deletePhoto);

module.exports = router;
