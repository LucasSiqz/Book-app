import { Story, Meta } from '@storybook/react/types-6-0'
import BookHighlight, { BookHighlightProps } from '.'

export default {
  title: 'BookHighlight',
  component: BookHighlight,
  args: {
    image: 'img/Book.png'
  }
} as Meta

export const Default: Story<BookHighlightProps> = (args) => (
  <BookHighlight {...args} />
)
