import { Story, Meta } from '@storybook/react/types-6-0'

import Review, { ReviewProps } from '.'

export default {
  title: 'Review',
  component: Review,
  args: {
    title: "Don't Make Me Think",
    author: 'Jesse Showalter',
    description:
      '"Dont Make Me Think" by Steve Krug is one of the first books I read when I was getting into digital design. It helped me move from designing things that just "look nice" to designing things that are usable, useful, memorable and simple to learn and use. ',
    viewsCount: 5.2,
    weeksAgo: 1
  }
} as Meta

export const Default: Story<ReviewProps> = (args) => <Review {...args} />
