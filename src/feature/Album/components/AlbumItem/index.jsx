import React from "react"
import PropTypes from "prop-types"
import "./styles.scss"

AlbumItem.propTypes = {
  album: PropTypes.object,
}
AlbumItem.defaultProps = {
  album: {},
}

function AlbumItem({ album }) {
  return (
    <div className="album">
      <div className="album__name">{album.name}</div>
      <img src={album.image} alt={album.name} className="album__img" />
    </div>
  )
}

export default AlbumItem
