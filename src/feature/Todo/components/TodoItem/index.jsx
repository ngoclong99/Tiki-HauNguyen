import React from "react"
import PropTypes from "prop-types"

TodoItem.propTypes = {
  todo: PropTypes.object,
}
TodoItem.defaultProps = {
  todo: {},
}

function TodoItem({ todo }) {
  return <p>{todo.title}</p>
}

export default TodoItem
