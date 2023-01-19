import React from "react";
import GridItem from "./GridItem";

function MasonryGrid({ photos, handleDelete }) {
  return (
    <div className="w-full mt-16 grid-container">
      {photos.map((photo) => (
        <GridItem
          key={photo.photoId}
          photo={photo}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default MasonryGrid;
