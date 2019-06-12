// takes an images array and displays every image
import React from "react";

const ImageList = props => {
  // go through the incoming images array and return an image using the src property
  // We pull out the fields from "image" we need with ({description, id, urls}) so we don't have to say image.description, we can just say description, and the same for the others
  const images = props.images.map(({ description, id, urls }) => {
    // we want the "regular" URL of the image which you can find at image.urls.regular (check Google Chrome's console if you don't believe me)
    // the "key" property helps React render things faster and more accurately. We use "id" which is on every image
    // React also wants an "alt" which we can use the "description" fields for
    return <img key={id} alt={description} src={urls.regular} />;
  });
  return (
    <div>
      {/* Display the array of images you got from the map() method above */}
      <div>{images}</div>
    </div>
  );
};

export default ImageList;
