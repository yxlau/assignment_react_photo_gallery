import React from 'react'

const Select = (props) => {
  const {options, selected, ...restOfProps} = props
  const opts = options.map((option) => {
   return ( <option key={option} value={option}>
    {option}
    </option> )
  }
  )

  return (
    <div className="col-sm-3">
    <select className="form-control" defaultValue={selected} {...restOfProps} >
   {opts}
    </select>
    </div>
    )
}

export default Select