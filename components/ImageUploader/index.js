import React from "react";
import ImageBox from "./imageBox";
import Uploader from "./uploader";

const ImageUploader = ({image, setImage, setImageURI, className}) => {
  return (
    <div className={className}>
      {image ? (
        <ImageBox setImage={setImage} imageURI={image} />
      ) : (
        <Uploader setImageURI={setImageURI} setImage={setImage} />
      )}
    </div>
  );
};

export default ImageUploader;
