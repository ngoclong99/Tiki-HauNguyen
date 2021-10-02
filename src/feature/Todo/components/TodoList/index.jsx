import React from "react"
import PropTypes from "prop-types"
import TodoItem from "../TodoItem"
import classNames from "classnames"
import "./styles.scss"

TodoList.propTypes = {
  todoList: PropTypes.array,
  onClickTodo: PropTypes.func,
}
TodoList.defaultProps = {
  todoList: [],
  onClickTodo: null,
}

function TodoList({ todoList, onClickTodo }) {
  const handelTodoClick = (todo, index) => {
    if (!onClickTodo) return
    onClickTodo(todo, index)
  }

  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li
          key={todo.id}
          className={classNames({
            completed: todo.status === "completed",
          })}
          onClick={() => handelTodoClick(todo, index)}
        >
          <TodoItem todo={todo}></TodoItem>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
