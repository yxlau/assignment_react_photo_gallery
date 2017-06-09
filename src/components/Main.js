import React, {Component} from 'react'
import Images from '../photos.js'
import Filter from './Filter.js'
import Gallery from './Gallery.js'
import {filterImages} from '../helpers/filterImages'

class Main extends Component {
  constructor(){
    super()
    this.state = {
      filter: 'Normal',
      images: Images.data
    }
    this.onFilterUpdate = this.onFilterUpdate.bind(this)
  }

  onFilterUpdate = (filter) => {
    // use a callback function cause setState is done asynchronously
    this.setState(filter, this.updateGallery)
  }

  updateGallery = () => {
    this.setState({images: filterImages(this.state.filter, Images.data)});
  }

  render () {

    const {filter, images} = this.state

    return (
      <main className="container-fluid">
      <Filter filter={filter} updateGallery={this.onFilterUpdate} />
      <Gallery images={images} colsPerRow={3} />
    </main>
      )
  }

}

export default Main