import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import QuantityField from './../../../components/Form-controls/QuantityField/index'

AddtoCart.propTypes = {
  onSubmit: PropTypes.func
}

const schema = yup.object().shape({
  quantity: yup
    .number()
    .min(1, 'Please enter at least 1')
    .required('Please enter number')
    .typeError('Please enter a number')
})

function AddtoCart({ onSubmit = null }) {
  const form = useForm({
    defaultValues: {
      quantity: 1
    },
    resolver: yupResolver(schema)
  })

  const handleSubmitForm = async (value) => {
    if (!onSubmit) return
    await onSubmit(value)
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmitForm)}>
      <QuantityField name="quantity" label="Quantity" form={form}></QuantityField>
      <Button type="submit" fullWidth variant="contained" color="primary">
        Buy
      </Button>
    </form>
  )
}

export default AddtoCart
