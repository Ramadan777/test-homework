import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAlbum } from '../redux/actions'

function Album (props) {
  const dispatch = useDispatch();
  const selectedAlbumId = useSelector(state => state.albums.selectedAlbumId);

  const handleSelectAlbum = () => {
    dispatch(selectAlbum(props.album.id))
  }

  return (
    <div className={`album ${props.album.id === selectedAlbumId ? 'selected' : ''}`}>
      <li onClick={handleSelectAlbum}>
        <div className="album-title">
          {props.album.title}
        </div>
      </li>
    </div>
  )
}

export default Album