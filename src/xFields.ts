import { IXFieldMap } from '@formalizer/core'
import { IFormFieldExtraProps } from '@formalizer/react-form'

import FieldGroup from './Field/FieldGroup'
import JsonField from './Field/JsonField'
import TextField from './Field/TextField'

export const xFieldMap: IXFieldMap<IFormFieldExtraProps> = {
  group: {
    type: 'group',
    valueType: 'none',
    extraProps: {
      component: FieldGroup,
    },
  },
  json: {
    type: 'json',
    valueType: 'object',
    extraProps: {
      component: JsonField,
    },
  },
  text: {
    type: 'text',
    valueType: 'string',
    extraProps: {
      component: TextField,
      inputProps: {
        type: 'text',
      },
    },
  },
  number: {
    type: 'number',
    valueType: 'number',
    extraProps: {
      component: TextField,
      inputProps: {
        type: 'number',
      },
    },
  },
  email: {
    type: 'email',
    valueType: 'string',
    extraProps: {
      component: TextField,
      inputProps: {
        type: 'text',
      },
    },
  },
}
