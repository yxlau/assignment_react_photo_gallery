import React, { Component } from 'react'

const Sorter = ({ options, updateOrder }) => {

  const switchOrder = (e) => {
    console.log('switch order');
    updateOrder(e);
    if (e.target.getAttribute('data-order') === 'ASC') {
      e.target.setAttribute('data-order', 'DESC')
    } else {
      e.target.setAttribute('data-order', 'ASC')
    }
  }

  const sortOptions = options.map((option) => (
    <a href="#" onClick={switchOrder} key={option} data-sort-by={option.toLowerCase()} data-order="DESC">{option} </a>
  ))


  return (
    <div id="sorter">
      { sortOptions }
      </div>
  )
}

export default Sorter
