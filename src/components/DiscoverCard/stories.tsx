import { Story, Meta } from '@storybook/react/types-6-0'
import DiscoverCard, { DiscoverCardProps } from '.'

export default {
  title: 'DiscoverCard',
  component: DiscoverCard,
  args: {
    title: 'Hooked',
    author: 'Nir Eyal',
    readCount: 120,
    image: '/img/Book.png'
  }
} as Meta

export const Default: Story<DiscoverCardProps> = (args) => (
  <DiscoverCard {...args} />
)
