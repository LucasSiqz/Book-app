import { Story, Meta } from '@storybook/react/types-6-0'

import CurrentlyReading, { CurrentlyReadingProps } from '.'

export default {
  title: 'CurrentlyReading',
  component: CurrentlyReading,
  args: {
    id: 1,
    title: 'Originals',
    author: 'Adam Grant',
    currentChapter: 2,
    chapterCount: 9
  }
} as Meta

export const Default: Story<CurrentlyReadingProps> = (args) => (
  <CurrentlyReading {...args} />
)
