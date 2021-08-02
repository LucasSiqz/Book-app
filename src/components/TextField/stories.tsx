import { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { SearchIcon } from '../Icons'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    name: 'book',
    icon: <SearchIcon />,
    initialValue: '',
    placeholder: 'Search book'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => {
  const [inputState, setInputState] = useState('')

  return (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField
        {...args}
        value={inputState}
        onChange={(event) => setInputState(event.target.value)}
      />
    </div>
  )
}

export const WithError: Story<TextFieldProps> = (args) => {
  const [inputState, setInputState] = useState('')

  return (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField
        {...args}
        value={inputState}
        onChange={(event) => setInputState(event.target.value)}
      />
    </div>
  )
}

WithError.args = {
  error: 'Ops...something is wrong'
}
