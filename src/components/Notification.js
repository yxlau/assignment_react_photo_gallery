import React from 'react'

const Notification = ({display, children}) => {
  if (! display){
    return null
  }

  return (
    <div className="alert alert-success" role="alert">
    {children}
    </div>
    )
}

export default Notification
