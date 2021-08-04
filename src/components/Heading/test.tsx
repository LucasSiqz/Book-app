import { render, screen } from 'utils/test-utils'

import Heading from '.'

const props = {
  title: 'Discover new book',
  nav: {
    title: 'More',
    path: '/books'
  }
}

describe('<Heading />', () => {
  it('should render correctly', async () => {
    const { container } = render(<Heading {...props} />)

    expect(screen.getByRole('link', { name: /More/i })).toHaveAttribute(
      'href',
      '/books'
    )
    expect(await screen.findByText(/Discover new book/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
