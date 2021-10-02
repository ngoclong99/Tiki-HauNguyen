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
  identifier: yup.string().required("Please enter user name"),
  password: yup.string().required("Please enter password"),
})

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
}

function LoginForm({ onSubmit }) {
  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  })

  const handleSubmitForm = async (value) => {
    if (!onSubmit) return
    await onSubmit(value)
    // form.reset()
    // console.log(value)
  }

  const { isSubmitting } = form.formState

  return (
    <div>
      {isSubmitting && <LinearProgress />}
      <Avatar>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography component="h3" variant="h5">
        Login An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmitForm)}>
        <InputField name="identifier" label="User name" form={form} disabled={false}></InputField>
        <PasswordField name="password" label="Password" form={form}></PasswordField>
        <Button disabled={isSubmitting} type="submit" fullWidth variant="contained" color="primary">
          Sign In
        </Button>
      </form>
    </div>
  )
}

export default LoginForm
