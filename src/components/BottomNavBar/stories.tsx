import { Story, Meta } from '@storybook/react/types-6-0'
import styled from 'styled-components'

import BottomNavBar from '.'

export default {
  title: 'BottomNavBar',
  component: BottomNavBar
} as Meta

const RemovePositionFixed = styled.div`
  > footer {
    position: unset !important;
  }
`

export const Default: Story = () => (
  <RemovePositionFixed>
    <BottomNavBar />
  </RemovePositionFixed>
)
