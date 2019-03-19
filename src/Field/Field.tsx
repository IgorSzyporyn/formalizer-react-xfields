import React from 'react'
import { FormFieldChildProps } from '@formalizer/react-form'

type Props = FormFieldChildProps & {
  children?: React.ReactNode
  className?: string
}

const Field: React.SFC<Props> = (props: Props) => {
  const { children, className } = props
  return <div className={`${className} FRX-Field`}>{children && children}</div>
}

Field.defaultProps = {}
Field.displayName = 'Field'

export default Field
