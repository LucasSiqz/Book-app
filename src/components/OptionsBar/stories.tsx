import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import OptionsBar from '.'

export default {
  title: 'OptionsBar',
  component: OptionsBar
} as Meta

const RemovePositionFixed = styled.div`
  > footer {
    position: unset !important;
  }
`

export const Default: Story = () => (
  <RemovePositionFixed>
    <OptionsBar />
  </RemovePositionFixed>
)
