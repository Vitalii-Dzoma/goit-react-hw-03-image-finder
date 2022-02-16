import React from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import Loader from './Loader/Loader';
// import Modal from './Modal/Modal';
// import Button from './Button/Button';

class App1 extends React.Component {
    state = {
        image:null
    }
//   async componentDidMount() {
//     const response = await fetch(
//       `https://pixabay.com/api/?q=${this.props}&page=1&key=24642073-b12941d2e5507c49f57c90e2e&image_type=photo&orientation=horizontal&per_page=12`
//     );
//     const image = await response.json();
//     console.log(image.hits);
//     const arrayPokemon = await this.setState({ image });
//     }
    
  formSubmitHandler = data => {
      
      fetch(`https://pixabay.com/api/?q=${data.name}&page=1&key=24642073-b12941d2e5507c49f57c90e2e&image_type=photo&orientation=horizontal&per_page=12`)
          .then(res => res.json())
          .then(image =>  this.setState({image})
          )
  };

    render() {
        
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
        {/* <Loader/> */}
        <ImageGallery images={this.state.image}>
                <ImageGalleryItem />
        </ImageGallery>
        {/* <Button />
      <Modal/> */}
      </>
    );
  }
}

export default App1;
