import React from 'react'
import Field from './Field'
import { FormalizerField, FormFieldProps } from '@formalizer/react-form'

const TextField: React.SFC<FormFieldProps> = (props: FormFieldProps) => {
  return (
    <FormalizerField
      {...props}
      render={renderProps => {
        return (
          <Field className="FRX-TextField" {...renderProps}>
            <input {...renderProps.extraProps.inputProps} />
          </Field>
        )
      }}
    />
  )
}

TextField.defaultProps = {}
TextField.displayName = 'TextField'

export default TextField
