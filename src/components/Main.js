import React, { Component } from 'react'
import Images from '../photos.js'
import Filter from './Filter.js'
import Gallery from './Gallery.js'
import Notification from './Notification'
import Pagination from './Pagination'
import Sorter from './Sorter'
import Search from './Search'
import { filterImages } from '../helpers/filtering'
import { performSort } from '../helpers/sorting'
import { performSearch } from '../helpers/searching'

const sortOptions = [
  'Date',
  'Username'
]


class Main extends Component {
  constructor() {
    super()
    this.state = {
      filter: 'All',
      images: Images.data,
      currentPage: 0,
      imagesPerPage: 12,
      sortBy: 'date',
      order: 'DESC',
      notificationMessage: '',
    }
    this.updateFilter = this.updateFilter.bind(this)
    this.updatePage = this.updatePage.bind(this)
    this.updateOrder = this.updateOrder.bind(this)
    this.searchImages = this.searchImages.bind(this)
  }

  updateFilter = (filter) => {
    this.setState(filter, this.updateGallery);
  }

  updateOrder = (e) => {
    this.setState({
        sortBy: e.target.getAttribute('data-sort-by'),
        order: e.target.getAttribute('data-order')
      },
      this.sortImages
    )
  }

  searchImages = (term) => {
    if (term === '') {
      this.setState({
        images: Images.data,
        notificationMessage: 'No images found for "' + term + '". Showing all images instead'
      })
    } else {
      var images = performSearch(Images.data, term);
      this.setState({
        images: images,
        notificationMessage: images.length + ' results for "' + term + '"'
      })
    }
  }

  sortImages = () => {
    var images = performSort(this.state.images, this.state.sortBy, this.state.order);
    this.setState({ images: images })
  }

  updatePage = (e) => {
    // we want to change the value of currentPage 
    e.preventDefault();
    this.setState({ currentPage: parseInt(e.target.getAttribute('data-pagination-action'), 10) });

  }

  updateGallery = () => {
    var images = filterImages(this.state.filter, Images.data)
    this.setState({
      images: images,
      currentPage: 0,
      notificationMessage: images.length + ' images(s) found with filter "' + this.state.filter + '"'

    }, this.sortImages);
  }

  componentDidMount = () => {
    this.updateGallery();
  }

  render() {
    const { filter, images, showNotification, currentPage, imagesPerPage, notificationMessage } = this.state
    var shortlistedImages = images.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage)

    return (
      <main className="container-fluid">
      <Notification display={!! notificationMessage} >
         {notificationMessage}
      </Notification>
      <Search searchImages={this.searchImages} />
      <Filter filter={filter} updateGallery={this.updateFilter} />
      <Sorter updateOrder={this.updateOrder} options={sortOptions} />
      <Gallery images={shortlistedImages} colsPerRow={3} />
      <Pagination pageCount={Math.ceil(images.length/this.state.imagesPerPage)} currentPage={currentPage} changePage={this.updatePage} />
    </main>
    )
  }

}

export default Main
