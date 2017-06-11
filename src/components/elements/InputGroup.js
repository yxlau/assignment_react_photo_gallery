import React from 'react'

const InputGroup = ({ children, labelName, labelText }) => {

  return (
    <div className="form-group">
 <label className="control-label col-sm-4 col-sm-offset-5">{labelText}</label>
 {children}
 </div>
  )
}

export default InputGroup
