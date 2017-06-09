import React from 'react'

export function filterImages (filter, images){
  console.log('filter called');
  var filtered = [];
  for (var i = 0; i < images.length; i++){
    if (images[i].filter === filter){
      filtered.push(images[i]);
    }
  }
  return filtered.length < 1 ? images : filtered;
}