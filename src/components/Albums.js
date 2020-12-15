import React from 'react'
import { useSelector } from 'react-redux'
import Album from './Album'

function Albums (props) {
  const albums = useSelector(state => state.albums);

  return (
    <div className="albums">
      <a>
        {albums.map(album => {
          return <Album album={album} key={album.id} />
        })}
      </a>
    </div>
  )
}

export default Albums