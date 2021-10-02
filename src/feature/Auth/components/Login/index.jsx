import { useSnackbar } from "notistack"
import PropTypes from "prop-types"
import React from "react"
import { useDispatch } from "react-redux"
import { login } from "../../userSlice"
import LoginForm from "../LoginForm"

Login.propTypes = {
  handleClose: PropTypes.func,
}

function Login({ handleClose }) {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const showAlert = (message, status) => {
    enqueueSnackbar(message, {
      variant: status,
      autoHideDuration: 2000,
    })
  }

  const handleSubmitForm = async (value) => {
    try {
      await dispatch(login(value))
      if (handleClose) handleClose()
    } catch (error) {
      showAlert(error, "error")
    }
  }
  return (
    <div>
      <LoginForm onSubmit={handleSubmitForm}></LoginForm>
    </div>
  )
}

export default Login
