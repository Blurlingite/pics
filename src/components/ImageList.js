// takes an images array and displays every image
import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = props => {
  // go through the incoming images array and return an image using the src property

  const images = props.images.map(image => {
    // we want the "regular" URL of the image which you can find at image.urls.regular (check Google Chrome's console if you don't believe me)
    // the "key" property helps React render things faster and more accurately. We use "id" which is on every image
    // React also wants an "alt" which we can use the "description" fields for
    // we oass the whole image as a prop to the ImageCard component
    return <ImageCard key={image.id} image={image} />;
  });
  return (
    <div>
      {/* Display the array of images you got from the map() method above */}
      <div className="image-list">{images}</div>
    </div>
  );
};

export default ImageList;
