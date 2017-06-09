import React, { Component } from 'react'

class Pagination extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pageCount: this.props.pageCount,
      currentPage: this.props.currentPage
    }
    this.changePage = this.props.changePage
  }

  render() {

    const { pageCount, currentPage } = this.props

    var pages = []
    for (var i = 0; i < pageCount; i++) {
      if (i == currentPage) {
        pages.push(<li className="active" key={i}><a>{i + 1}</a></li>)
      } else {
        pages.push(<li key={i}><a data-pagination-action={i+1} onClick={this.changePage}>{i + 1}</a></li>)
      }
    }

    var previous, next;

    if (currentPage) {
      previous = (<li>
           <a aria-label="Previous" data-pagination-action={currentPage - 1} onClick={this.changePage}><span aria-hidden="true" className="pagination-label">&laquo;</span></a>
          </li>)
    } else {
      previous = (
        <li className="disabled">
          <a aria-label="Previous"><span aria-hidden="true" className="pagination-label">&laquo;</span></a>
        </li>
      )
    }

    if (currentPage == pageCount - 1) {
      next = (<li className="disabled">
              <a aria-label="Next"><span aria-hidden="true"  className="pagination-label">&raquo;</span></a>
                </li>)
    } else {
      next = (<li> 
        <a aria-label="Next" data-pagination-action={this.currentPage +1} onClick={ this.changePage }>
        <span aria-hidden="true"  className="pagination-label">&raquo;</span>
        </a> 
        </li>)
    }


    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {previous}
          {pages}
          {next}
        </ul>
     </nav>
    )
  }
}
export default Pagination
