import React from 'react'

const Tags = ({tags}) => {

  var tagString = '';

  for (let i = 0; i < tags.length; i++){
    if (i < tags.length - 1){
      tagString += tags[i] + ' / ';
    }
    else {
      tagString += tags[i]
    }
  }

  tagString = tags.length === 0 ? '-' : tagString;


  return (
    <span>Tags: {tagString}</span>
    )

}

export default Tags