import { FormFieldChildProps } from '@formalizer/react-form'
import React from 'react'

type Props = FormFieldChildProps & {
  children?: React.ReactNode
  className?: string
}

const Field: React.FunctionComponent<Props> = (props: Props) => {
  const { children, className } = props
  return <div className={`${className} FRX-Field`}>{children && children}</div>
}

Field.defaultProps = {}
Field.displayName = 'Field'

export default Field
