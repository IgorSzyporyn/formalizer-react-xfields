import {
  FormFieldChildProps,
  FormFieldProps,
  FormalizerField,
} from '@formalizer/react-form'
import React from 'react'
import Field from './Field'

function renderField(props: FormFieldChildProps) {
  return (
    <Field className="FRX-TextField" {...props}>
      <input {...props.extraProps.inputProps} />
    </Field>
  )
}

const TextField: React.FunctionComponent<FormFieldProps> = (
  props: FormFieldProps
) => <FormalizerField {...props} render={renderField} />

TextField.defaultProps = {}
TextField.displayName = 'TextField'

export default TextField
