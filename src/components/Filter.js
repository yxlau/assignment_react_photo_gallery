import React from 'react'
import Form from './Form'
import Select from './elements/Select'
import InputGroup from './elements/InputGroup'

class Filter extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      filter: this.props.filter,
      filterOptions: [
        'All',
        'Lark',
        'Normal',
        'Reyes',
        'Valencia',
        'Inkwell',
        'Ludwig'
      ]

    }
    this.updateGallery = this.props.updateGallery
    this.onChangeFilter = this.onChangeFilter.bind(this)
  }

  onChangeFilter = (e) => {
    this.updateGallery({filter: e.target.value});
  }

  render() {

    const {filter, filterOptions} = this.state

    return (
      <Form>
        <InputGroup labelText="Filter:">
          <Select options={filterOptions} selected={filter} onChange={this.onChangeFilter}/>
        </InputGroup>
      </Form>
    )

  }

}

export default Filter
