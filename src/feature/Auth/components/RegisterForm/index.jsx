import { yupResolver } from "@hookform/resolvers/yup"
import { Avatar, Button, Typography } from "@material-ui/core"
import { LockOutlined } from "@material-ui/icons"
import PropTypes from "prop-types"
import React from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import InputField from "../../../../components/Form-controls/InputField"
import PasswordField from "../../../../components/Form-controls/PasswordField"
import LinearProgress from "@material-ui/core/LinearProgress"

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Please enter full name")
    .test("should has at least two words", "Please enter more than two words", (value) => {
      return value.trim().split(" ").length >= 2
    }),
  email: yup.string().email("Please enter email"),
  password: yup.string().min(6, "Please enter password ( min 6 character)"),
  retypePassword: yup.string().oneOf([yup.ref("password")], "Password does not match"),
})

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
}

function RegisterForm({ onSubmit }) {
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  })

  const handleSubmitForm = async (value) => {
    if (!onSubmit) return
    await onSubmit(value)
    // form.reset()
  }

  const { isSubmitting } = form.formState

  return (
    <div>
      {isSubmitting && <LinearProgress />}
      <Avatar>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography component="h3" variant="h5">
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmitForm)}>
        <InputField name="fullName" label="Full Name" form={form} disabled={false}></InputField>
        <InputField name="email" label="Email" form={form} disabled={false}></InputField>
        <PasswordField
          name="password"
          label="Password"
          form={form}
          disabled={false}
        ></PasswordField>
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
          disabled={false}
        ></PasswordField>
        <Button disabled={isSubmitting} type="submit" fullWidth variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </div>
  )
}

export default RegisterForm
