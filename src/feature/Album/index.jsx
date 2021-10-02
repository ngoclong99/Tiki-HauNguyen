import React from "react"
import AlbumList from "./components/AlbumList"

Album.propTypes = {}

function Album(props) {
  const albumList = [
    {
      id: "1",
      name: "song1",
      image:
        "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      id: "2",
      name: "song2",
      image:
        "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      id: "3",
      name: "song3",
      image:
        "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
  ]
  return (
    <div>
      <h4>AlbumList</h4>
      <AlbumList albumList={albumList}></AlbumList>
    </div>
  )
}

export default Album
