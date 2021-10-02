import { yupResolver } from "@hookform/resolvers/yup"
import PropTypes from "prop-types"
import React from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import InputField from "../../../../components/Form-controls/InputField"

const schema = yup.object().shape({
  title: yup.string().required("Vui long nhap title").min(5, "nhap > 5"),
})

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
}

function TodoForm({ onSubmit }) {
  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(schema),
  })

  const handleSubmitForm = (value) => {
    if (!onSubmit) return
    onSubmit(value)
    form.reset()
  }
  return (
    <form onSubmit={form.handleSubmit(handleSubmitForm)}>
      <InputField name="title" label="Todo" form={form} disabled={false}></InputField>
    </form>
  )
}

export default TodoForm
