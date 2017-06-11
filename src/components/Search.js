import React, { Component } from 'react'
import Form from './Form'
import InputGroup from './elements/InputGroup'

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
    }
    this.searchImages = this.props.searchImages
  }

  submitForm = (e) => {
    e.preventDefault();
    this.searchImages(this.state.searchTerm);

  }

  updateInput = (e) => {
    this.setState({ searchTerm: e.target.value });
    if (e.target.value === '') {
      this.searchImages();
    }
  }

  render() {

    return (
      <Form onSubmit={this.submitForm}>
    <InputGroup labelName="Search" labelText="Search">
      <div className="col-sm-3">
    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Search" onChange={this.updateInput} />
      </div>
    </InputGroup>
    </Form>
    )

  }

}

export default Search
