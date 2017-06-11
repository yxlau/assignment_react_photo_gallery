import React from 'react'

const Form = ({ children, ...restOfProps }) => {


  return (
    <form className="form-horizontal" {...restOfProps} >
    {children}
  </form>
  )
}


export default Form
