import { Story, Meta } from '@storybook/react/types-6-0'
import Book, { BookProps } from '.'

export default {
  title: 'Book',
  component: Book,
  args: {
    title: 'HOOKED',
    author: 'Nir Eyal',
    image: 'img/Book.png'
  }
} as Meta

export const Default: Story<BookProps> = (args) => <Book {...args} />
