import {
  FormFieldChildProps,
  FormFieldProps,
  FormalizerFieldGroup,
  createFields,
} from '@formalizer/react-form'
import React from 'react'

type Props = FormFieldProps & {
  className?: string
}

function renderField(props: FormFieldChildProps) {
  return (
    <div className="FRX-FieldGroup">
      {props.fields && createFields(props.fields, props.xFieldRefMap)}
    </div>
  )
}

const FieldGroup: React.FunctionComponent<Props> = (props: Props) => {
  return <FormalizerFieldGroup {...props} render={renderField} />
}

FieldGroup.defaultProps = {}
FieldGroup.displayName = 'FieldGroup'

export default FieldGroup
