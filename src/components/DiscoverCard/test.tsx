import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import DiscoverCard from '.'

const props = {
  id: '1',
  title: 'Hooked',
  author: 'Nir Eyal',
  readCount: 120,
  image: '/img/Book.png'
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<DiscoverCard >', () => {
  it('should render correctly', async () => {
    const { container } = render(<DiscoverCard {...props} />)

    expect(await screen.findByText(/hooked/i)).toBeInTheDocument()
    expect(await screen.findByText(/Nir Eyal/i)).toBeInTheDocument()
    expect(await screen.findByText(/120+/i)).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: `${props.title} book cover` })
    ).toHaveAttribute('src', props.image)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should redirect to details page', () => {
    render(<DiscoverCard {...props} />)

    userEvent.click(screen.getByTestId(props.id))
    expect(push).toHaveBeenCalledWith(`details/${props.id}`)
  })
})
