import React from 'react';

const ImageGalleryItem = ({ images }) => {
  if (images) {
  }
  return (
    <>
      {images &&
        images.map(image => (
          <li className="gallery-item" key={image.id}>
            <img src={image.webformatURL} alt={image.tags} />
          </li>
        ))}
    </>
  );
};

export default ImageGalleryItem;
