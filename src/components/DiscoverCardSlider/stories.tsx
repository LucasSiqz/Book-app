import { Story, Meta } from '@storybook/react/types-6-0'

import items from './mock'
import DiscoverCardSlider, { DiscoverCardSliderProps } from '.'

export default {
  title: 'DiscoverCardSlider',
  component: DiscoverCardSlider,
  args: { items: items }
} as Meta

export const Default: Story<DiscoverCardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <DiscoverCardSlider items={args.items} />
  </div>
)
