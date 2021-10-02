import { useSnackbar } from "notistack"
import PropTypes from "prop-types"
import React from "react"
import { useDispatch } from "react-redux"
import { register } from "../../userSlice"
import RegisterForm from "../RegisterForm"

Register.propTypes = {
  handleClose: PropTypes.func,
}

function Register({ handleClose }) {
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
      value.username = value.email
      await dispatch(register(value))
      showAlert("Success", "success")
      if (handleClose) handleClose()
    } catch (error) {
      showAlert(error, "error")
    }
  }
  return (
    <div>
      <RegisterForm onSubmit={handleSubmitForm}></RegisterForm>
    </div>
  )
}

export default Register
