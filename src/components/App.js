import React from 'react'
import Albums from './Albums'
import Photos from './Photos'
import { useDispatch, useSelector } from 'react-redux'
import { loadAlbums, loadPhotos } from '../redux/actions'
import { useEffect } from 'react'

function App (props) {
  const loadingAlbums = useSelector(state => state.loadingAlbums);
  const loadingPhotos = useSelector(state => state.loadingPhotos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAlbums());
    dispatch(loadPhotos());
  }, [])

  if(loadingAlbums || loadingPhotos) {
    return (
      <div>
        идет загрузка...
      </div>
    )
  }

  return (
    <div className="container">
      <Albums />
      <Photos />
    </div>

  )
}

export default App