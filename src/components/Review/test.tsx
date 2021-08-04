import { render, screen } from 'utils/test-utils'

import Review from '.'

const props = {
  title: "Don't Make Me Think",
  author: 'Jesse Showalter',
  image: 'img/Review.png',
  description: 'description',
  viewsCount: 5.2,
  weeksAgo: 1
}

describe('<Review >', () => {
  it('should render correctly', async () => {
    const { container } = render(<Review {...props} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.image
    )
    expect(
      screen.getByRole('heading', { name: /Don't Make Me Think/i })
    ).toBeInTheDocument()
    expect(await screen.findByText(/Jesse Showalter/i)).toBeInTheDocument()
    expect(await screen.findByText(/5.2 Views/i)).toBeInTheDocument()
    expect(await screen.findByText('1 Week(s) ago')).toBeInTheDocument()
    expect(await screen.findByText(/description/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
