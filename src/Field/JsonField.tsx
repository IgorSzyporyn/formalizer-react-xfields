import React from 'react'
import Field from './Field'
import {
  FormalizerField,
  FormFieldProps,
  renderField,
} from '@formalizer/react-form'

const JsonField: React.SFC<FormFieldProps> = (props: FormFieldProps) => {
  return (
    <FormalizerField
      {...props}
      render={renderProps => {
        return (
          <Field className="FRX-JsonField" {...renderProps}>
            {renderProps.fields
              ? renderProps.fields.map(field => {
                  return renderField(field, renderProps.xFieldRefMap)
                })
              : null}
          </Field>
        )
      }}
    />
  )
}

JsonField.defaultProps = {}
JsonField.displayName = 'JsonField'

export default JsonField
