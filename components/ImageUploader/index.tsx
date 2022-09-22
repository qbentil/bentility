import React from "react";
import ImageBox from "./imageBox";
import Uploader from "./uploader";

const ImageUploader = ({image, setImage, setImageURI, className}:{image:any, setImage:any, setImageURI:any, className?:any}) => {
  return (
    <div className={className}>
      {image ? (
        <ImageBox setImage={setImage} image={image} />
      ) : (
        <Uploader setImageURI={setImageURI} setImage={setImage} />
      )}
    </div>
  );
};

export default ImageUploader;
