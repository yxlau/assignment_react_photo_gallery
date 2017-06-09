import React, {Component} from 'react'
import InputGroup from './elements/InputGroup'

const Form = ({children}) => {


 return (
  <form className="form-horizontal">
    {children}
</form>
  )
}


export default Form
