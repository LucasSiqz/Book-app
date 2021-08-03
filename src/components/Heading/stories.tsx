import { Story, Meta } from '@storybook/react/types-6-0'

import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    title: 'Discover new book',
    nav: {
      title: 'More',
      path: '/books'
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />
