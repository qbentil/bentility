import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { storage } from "../firebase.config";

export const uploadImage = async (image:any, storagePath:string, callback:(url:string) => void) => {
  // new date to iso string remove : and . and replace with -
  const id = new Date().toISOString().replace(/:|\./g, "-");
  const storageRef = ref(storage, `${storagePath}/${id}-${image.name}`);
  const uploadTask = uploadBytesResumable(storageRef, image);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Image Upload is " + progress + "% done");
    },
    (error) => {
      switch (error.code) {
        case "storage/unauthorized":
          console.log("User doesn't have permission to access the object");
          break;
        case "storage/canceled":
          console.log("User canceled the upload");
          break;
        case "storage/unknown":
          console.log("Unknown error occurred, inspect error.serverResponse");
          break;
      }
      return error;
    },
    () => {
      getDownloadURL(storageRef).then((downloadURL) => {
        callback(downloadURL);
      });
    }
  );
};

export const removeImage = async (imageURL:string) => {
    const deleteRef = ref(storage, imageURL);
    deleteObject(deleteRef).then(() => {
      console.log("Image deleted successfully");
    });
}