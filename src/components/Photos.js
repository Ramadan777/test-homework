import React from 'react'
import { useSelector } from 'react-redux'
import Photo from './Photo'

function Photos (props) {
  const photos = useSelector(state => state.photos);
  const selectedAlbumId = useSelector(state => state.selectedAlbumId);

  const filteredPhotos = photos.filter(photo => photo.albumId === selectedAlbumId)

  if(selectedAlbumId === null) {
    return (
      <div className="no-album-selected">
        Выберите альбом в списке слева
      </div>
    )
  }


  return (
    <div className="photos">
      {filteredPhotos.map(photo => {
        return <Photo photo={photo} key={photo.id} />
      })}
    </div>
  )
}

export default Photos