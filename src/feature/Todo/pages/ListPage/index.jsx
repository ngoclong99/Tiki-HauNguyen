import queryString from "query-string"
import React, { useEffect, useMemo, useState } from "react"
import { useHistory, useLocation, useRouteMatch } from "react-router-dom"
import TodoForm from "../../components/TodoForm"
import TodoList from "../../components/TodoList"

ListPage.propTypes = {}

function ListPage(props) {
  const initialTodoList = [
    {
      id: "1",
      title: "Title1",
      status: "new",
    },
    {
      id: "2",
      title: "Title2",
      status: "completed",
    },
    {
      id: "3",
      title: "Title3",
      status: "new",
    },
    {
      id: "4",
      title: "Title4",
      status: "new",
    },
  ]

  // Navigation Browser
  const location = useLocation()
  const history = useHistory()
  const match = useRouteMatch()

  const [todoList, setTodoList] = useState(initialTodoList)
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search)
    return params.status || "all"
  })

  useEffect(() => {
    const params = queryString.parse(location.search)
    setFilterStatus(params.status || "all")
  }, [location.search])

  // Handel click todo to change status
  const handelTodoClick = (obj, index) => {
    const newTodoList = [...todoList]
    const indexObj = newTodoList.findIndex((todo) => todo.id === obj.id)
    if (indexObj !== -1) {
      newTodoList[indexObj] = {
        ...newTodoList[indexObj],
        status: newTodoList[indexObj].status === "new" ? "completed" : "new",
      }
    }
    setTodoList(newTodoList)
  }

  // Get by status
  const handelChangeStatus = (status) => {
    setFilterStatus(status)
    const queryParams = { status: status }
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    })
  }
  const handelNewClick = () => {
    handelChangeStatus("new")
  }
  const handelCompletedClick = () => {
    handelChangeStatus("completed")
  }
  const handelAllClick = () => {
    handelChangeStatus("all")
  }

  const renderTodoListStatus = useMemo(() => {
    return todoList.filter((todo) => filterStatus === "all" || filterStatus === todo.status)
  }, [todoList, filterStatus])

  // Form
  const handleTodoFormSubmit = (value) => {
    const newTodo = {
      ...value,
      id: todoList.length + 1,
      status: "new",
    }
    const newTodoList = [...todoList, newTodo]
    setTodoList(newTodoList)
  }

  return (
    <div>
      <h3>Todo Form</h3>
      <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>

      <h3>Todo List</h3>
      <TodoList todoList={renderTodoListStatus} onClickTodo={handelTodoClick}></TodoList>
      <div>
        <button onClick={handelNewClick}>new</button>
        <button onClick={handelCompletedClick}>completed</button>
        <button onClick={handelAllClick}>all</button>
      </div>
    </div>
  )
}

export default ListPage
