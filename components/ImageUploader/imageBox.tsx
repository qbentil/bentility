/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { MdDeleteForever } from 'react-icons/md';

const ImageBox = ({setImage, image}:{image:any, setImage:any}) => {
  return (
    <div className="w-full h-[450px] max-w-[600px] flex flex-col justify-center items-center rounded-lg cursor-pointer border-2 border-dashed border-blue-200 p-2 relative">
        <img
          src={image}
          className="w-full h-full object-cover"
          alt='bentil'
        />
      <div onClick={()=> setImage(null)} className="w-10 h-10 flex items-center justify-center bg-red-500 hover:bg-red-600 rounded-full text-white absolute bottom-5 right-5">
        <MdDeleteForever />
      </div>
    </div>
  );
}

export default ImageBox