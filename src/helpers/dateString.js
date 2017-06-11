// import React from 'react'

export function dateString(seconds) {
  const date = new Date(parseInt(seconds * 1000, 10), );
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
  const ampm = date.getHours() > 12 ? 'PM' : 'AM';
  var hours = date.getHours() % 12;
  hours = hours === 0 ? 12 : hours;
  var mins = date.getMinutes();
  mins = mins < 10 ? (mins).toString().padStart(2, '0') : mins;
  return (date.getDate() + 1) + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ', ' + hours + ':' + mins + ampm;
}
