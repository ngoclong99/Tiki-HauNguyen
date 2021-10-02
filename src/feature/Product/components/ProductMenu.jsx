import { Box } from "@material-ui/core"
import React from "react"
import { useRouteMatch } from "react-router"
import { NavLink } from "react-router-dom"

ProductMenu.propTypes = {}

function ProductMenu(props) {
  const { url } = useRouteMatch()
  return (
    <Box>
      <NavLink to={url}>Description</NavLink>
      <NavLink to={`${url}/additional`}>Additional Information</NavLink>
      <NavLink to={`${url}/reviews`}>Reviews</NavLink>
    </Box>
  )
}

export default ProductMenu
