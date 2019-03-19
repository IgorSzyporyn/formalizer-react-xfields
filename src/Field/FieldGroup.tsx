import React from 'react'
import {
  FormalizerFieldGroup,
  FormFieldProps,
  renderFields,
} from '@formalizer/react-form'

type Props = FormFieldProps & {
  className?: string
}

const FieldGroup: React.SFC<Props> = (props: Props) => {
  return (
    <FormalizerFieldGroup
      {...props}
      render={renderProps => {
        return (
          <div className="FRX-FieldGroup">
            {renderProps.fields
              ? renderFields(renderProps.fields, renderProps.xFieldRefMap)
              : null}
          </div>
        )
      }}
    />
  )
}

FieldGroup.defaultProps = {}
FieldGroup.displayName = 'FieldGroup'

export default FieldGroup
