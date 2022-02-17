import React from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import Loader from './Loader/Loader';
// import Modal from './Modal/Modal';
import Button from 'components/Button/Button';

class App1 extends React.Component {
    state = {
        image: null,
        name: '',
        count:1
    }
//   async componentDidMount() {
//     const response = await fetch(
//       `https://pixabay.com/api/?q=${this.props}&page=1&key=24642073-b12941d2e5507c49f57c90e2e&image_type=photo&orientation=horizontal&per_page=12`
//     );
//     const image = await response.json();
//     console.log(image.hits);
//     const arrayPokemon = await this.setState({ image });
//     }
    
  formSubmitHandler = (data, page=1) => {
      
      fetch(`https://pixabay.com/api/?q=${data.name}&page=${page}&key=24642073-b12941d2e5507c49f57c90e2e&image_type=photo&orientation=horizontal&per_page=12`)
          .then(res => res.json())
          .then(image =>  this.setState({image, name:data.name})
      )
      this.setState(prevState => ({
        count: prevState.count + 1
        // image:[...prevState.image.hits, image.hits]
      }));
  };

    completeRender = () => {
        const newData = { ...image }
         this.setState(({ image }) => ({
           image: [...data, newData],
         }));
}

    
    render() {
        if (this.state.image) {
            console.log(this.state.image.hits)
        }
    
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
        {/* <Loader/> */}
        <ImageGallery>
          <ImageGalleryItem images={this.state.image} />
        </ImageGallery>
        <Button
          images={this.state.image}
          onClick={() => this.formSubmitHandler(this.state, this.state.count)}
        />
        {/* <Modal/> */}
      </>
    );
  }
}

export default App1;
