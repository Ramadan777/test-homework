import React from 'react'

function Photo (props) {

  return (
    <img src={props.photo.thumbnailUrl} alt=""/>
  )
}

export default Photo;