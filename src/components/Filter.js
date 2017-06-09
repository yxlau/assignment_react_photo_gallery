import React from 'react'
import Form from './Form'
import Select from './elements/Select'
import InputGroup from './elements/InputGroup'

class Filter extends React.Component {

  constructor(props) {
    super(props) 
    this.state = {
      filter: this.props.filter
    }
    this.updateGallery = this.props.updateGallery
    this.onChangeFilter = this.onChangeFilter.bind(this)
  }

  onChangeFilter = (e) => {
     this.updateGallery({filter: e.target.value});
  }


  render (){

    const {filter} = this.state

  return (
    <Form>
    <InputGroup labelText="Filter:">
    <Select options={['Lark', 'Normal']} selected={filter} onChange={this.onChangeFilter} />
    </InputGroup>
    </Form>
    )
    
  }

}

export default Filter