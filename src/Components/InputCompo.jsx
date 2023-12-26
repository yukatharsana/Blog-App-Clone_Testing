/* eslint-disable react-hooks/exhaustive-deps */

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import { Form } from 'react-bootstrap'
import { isBoolean, isString, isfunction } from '../validation/TypeValidation'

export const ValidateInput = forwardRef((props, ref) => {
  const {
    label,
    name,
    type = 'text',
    required = false,
    disabled = false,
    hint,
    valid,
    invalid,
    onChange
  } = props
  const [value, setValue] = useState('')
  const Validation = useCallback(() => {
    try {
      if (!name || !onChange)
        throw new Error('Name  and input function are required!')

      if (!isBoolean(required) || !isBoolean(disabled))
        throw new TypeError('required or disabled is Boolean Type')
      if (!isfunction(onChange)) throw new TypeError('onChange is a Function ')
      if (isString(name) || isString(type))
        throw new TypeError('name and Type is String not allowed other types')
    } catch (error) {
      console.error(error)
    }
  }, [disabled, required, onChange, name, type])
  useEffect(() => {
    Validation()
  }, [])

  const onChangeHandle = useCallback(
    e => {
      setValue(e.target.value)
      onChange(name, value)
    },
    [value]
  )

  return useMemo(
    () => (
      <Form.Group>
        <Form.Label>{label ?? name}</Form.Label>
        <Form.Control
          ref={ref}
          name={name}
          type={type}
          required={required}
          disabled={disabled}
          placeholder={hint}
          onChange={onChangeHandle}
          defaultValue={value}
        />
        <Form.Control.Feedback>{valid}</Form.Control.Feedback>
        <Form.Control.Feedback type='invalid'>{invalid}</Form.Control.Feedback>
      </Form.Group>
      // eslint-disable-next-line react-hooks/exhaustive-deps
    ),
    [value]
  )
})
