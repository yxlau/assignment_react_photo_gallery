import React from 'react'

export function performSort(images, sortBy, order) {
  var sign = order === 'ASC' ? 1 : -1;
  // time = a.created_time - b.created_time
  // username = 
  if (sortBy === 'username') {
    images.sort(function(a, b) {
      if (a.user.username > b.user.username) {
        return sign * -1;
      }
      if (a.user.username < b.user.username) {
        return sign * 1;
      }
      return 0;
    });
  } else if (sortBy === 'date') {
    images.sort(function(a, b) {
      return (a.created_time - b.created_time) * sign
    })
  }
  return images
}
