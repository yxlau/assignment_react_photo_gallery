import React from 'react'

const Col = (props) => {
  const {sm, children} = props

  return (
    <div className={`col-sm-${sm}`}>
    {children}
    </div>
    )
}

Col.defaultProps = {
  sm: '4',
}

export default Col