import React, { Component } from 'react'
import Images from '../photos.js'
import Filter from './Filter.js'
import Gallery from './Gallery.js'
import Notification from './Notification'
import Pagination from './Pagination'
import { filterImages } from '../helpers/filtering'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      filter: 'All',
      images: Images.data,
      showNotification: false,
      currentPage: 0,
      imagesPerPage: 12
    }
    this.updateFilter = this.updateFilter.bind(this)
    this.updatePage = this.updatePage.bind(this)
  }

  updateFilter = (filter) => {
    // use a callback function cause setState is done asynchronously
    this.setState(filter, this.updateGallery);
  }

  updatePage = (e) => {
    // we want to change the value of currentPage 
    e.preventDefault();
    this.setState({ currentPage: e.target.getAttribute('data-pagination-action') - 1 });

  }

  updateGallery = () => {
    this.setState({ images: filterImages(this.state.filter, Images.data), showNotification: true, currentPage: 0 });
  }

  render() {

    const { filter, images, showNotification, currentPage, imagesPerPage } = this.state
    const shortlistedImages = images.slice(currentPage * imagesPerPage, currentPage + imagesPerPage)

    return (
      <main className="container-fluid">
      <Notification display={showNotification} >
        {`${images.length} image(s) found with filter "${filter}"`}
      </Notification>
      <Filter filter={filter} updateGallery={this.updateFilter} />
      <Gallery images={shortlistedImages} colsPerRow={3} />
      <Pagination pageCount={images.length/this.state.imagesPerPage} currentPage={currentPage} changePage={this.updatePage} />
    </main>
    )
  }

}

export default Main
