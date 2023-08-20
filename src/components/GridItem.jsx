import React from "react";
import Button from "./Button";

function GridItem({ photo, handleDelete }) {
  return (
    <>
      <div className="group relative mx-5 mb-5">
        <div className="absolute bg-black w-full h-full opacity-0 rounded-3xl cursor-pointer transition-opacity duration-500 group-hover:opacity-90">
          <Button
            type={"button"}
            backgroundColor={"#EB5757"}
            textColor={"#FFFFFF"}
            padding={8}
            classNames="absolute top-5 right-5"
            onClick={() => handleDelete(photo.photoId)}
          >
            Delete
          </Button>
          <span className="absolute left-5 bottom-5 text-[#fff] font-bold text-lg">
            {photo.photoLabel}
          </span>
        </div>
        <img
          src={photo.photoURL}
          alt={photo.photoLabel}
          className="w-full rounded-3xl"
        />
      </div>
    </>
  );
}

export default GridItem;
