import { render } from "@testing-library/react";
import React from "react";


class ImageGallery extends React.Component {
    render() {
      
    return <ul className="gallery">{this.props.children}</ul>;
  }
}
 export default ImageGallery