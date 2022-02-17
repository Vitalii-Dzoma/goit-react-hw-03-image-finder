import React from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import Loader from './Loader/Loader';
// import Modal from './Modal/Modal';
import Button from 'components/Button/Button';
import { fetchImageCards } from '../../api/Api';
class App1 extends React.Component {
  state = {
    image: null,
    name: '',
    count: 1,
  };
  //   async componentDidMount() {
  //     const response = await fetch(
  //       `https://pixabay.com/api/?q=${this.props}&page=1&key=24642073-b12941d2e5507c49f57c90e2e&image_type=photo&orientation=horizontal&per_page=12`
  //     );
  //     const image = await response.json();
  //     console.log(image.hits);
  //     const arrayPokemon = await this.setState({ image });
  //     }

  formSubmitHandler = data => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
    fetchImageCards(data.name, this.state.count).then(image =>
      this.setState({ image: image, name: data.name })
    );

    return this.state.image;
    // fetch(
    //   `https://pixabay.com/api/?q=${data.name}&page=${page}&key=24642073-b12941d2e5507c49f57c90e2e&image_type=photo&orientation=horizontal&per_page=12`
    // )
    //   .then(res => res.json())
    //   .then(image => this.setState({ image: image.hits, name: data.name }));
    // return this.state.image;
  };
  // async getData() {
  //   const dataArray = await fetchImageCards(this.state.name, this.state.count);
  //   this.setState(prevState => ({
  //     count: prevState.count + 1,
  //     image: dataArray,
  //   }));
  // }

  completeRender = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
    fetchImageCards(this.state.name, this.state.count).then(image =>
      this.setState(prevState => ({
        image: [...prevState.image, ...image],
      }))
    );
    // this.setState(({ image }) => ({
    //   image: [...image, ...newData],
    // }));
  };

  render() {
    console.log(this.state.image);
    if (this.state.image) {
    }

    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
        {/* <Loader/> */}
        <ImageGallery>
          <ImageGalleryItem images={this.state.image} />
        </ImageGallery>
        <Button images={this.state.image} onClick={this.completeRender} />
        {/* <Modal/> */}
      </>
    );
  }
}

export default App1;
