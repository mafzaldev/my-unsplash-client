import React, { useState, useEffect } from "react";
import InputField from "./components/InputField";
import Button from "./components/Button";
import Modal from "./components/Modal";

import UnsplashLogo from "./assets/my_unsplash_logo.svg";
import SearchIcon from "./assets/search_icon.svg";
import MasonryGrid from "./components/MasonryGrid";

import "./App.css";

function App() {
  const [modal, setModal] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");

  const handleDelete = async (id) => {
    const request = await fetch(
      import.meta.env.VITE_SERVER_ADDRESS + "/api/deletephoto/" + id,
      {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const response = await request.json();
    console.log(response.message);

    const newPhotos = photos.filter((photo) => photo.photoId !== id);
    setPhotos(newPhotos);
  };

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      let searchQuery;

      query === ""
        ? (searchQuery = import.meta.env.VITE_SERVER_ADDRESS + "/api/getphotos")
        : (searchQuery =
            import.meta.env.VITE_SERVER_ADDRESS + "/api/searchphotos/" + query);

      const request = await fetch(searchQuery, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      const response = await request.json();
      setPhotos(response.responsePhotos);
    };
    fetchPhotos();
  }, [query]);

  return (
    <>
      <Modal
        title={"Add a new photo"}
        handleModal={handleModal}
        show={modal}
        setPhotos={setPhotos}
      />
      <div className="m-6">
        <div className="flex justify-between">
          <div className="flex gap-1 mr-1 lg:gap-4">
            <img src={UnsplashLogo} alt="" className="w-24 md:w-32 lg:w-48" />
            <InputField
              name={"search"}
              type="text"
              placeholder="Search by name"
              paddingX={16}
              paddingY={8}
              onChange={(e) => setQuery(e.target.value)}
            >
              <img src={SearchIcon} alt="" />
            </InputField>
          </div>
          <Button
            type={"button"}
            backgroundColor={"#3DB46D"}
            textColor={"#FFFFFF"}
            onClick={handleModal}
            padding={8}
          >
            Add a photo
          </Button>
        </div>
        <div className="mt-12">
          {photos.length > 0 ? (
            <MasonryGrid photos={photos} handleDelete={handleDelete} />
          ) : (
            <div className="text-center text-xl">
              No photos found or Backend service limit reached!
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
