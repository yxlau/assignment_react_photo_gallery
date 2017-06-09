import React from 'react'
import Col from './elements/Col'
import Row from './elements/Row'
import Post from './Post'


const Gallery = ({images, colsPerRow}) => {

  const colSize = 12 / colsPerRow;

  var columns = images.map((image, i) => (
    <Col key={i} sm={colSize}><Post image={image} key={image.id} /></Col>
    ))

  var rows = [];

  for (let i = 0; i < columns.length; i += 3){
    var colGroup = [];
    for (var j = 0; j < colsPerRow; j++){
      colGroup.push(columns[i+j]);
    }
    rows.push(colGroup);
  }

  const panels = rows.map((col, i) => (
    <Row key={i}>{col}</Row>
    ))

    return (
      <div id={`gallery`}>
      {panels}
      </div>

      )

}

export default Gallery
