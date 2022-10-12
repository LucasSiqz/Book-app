import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import Book from '.'

const props = {
  id: '1',
  title: 'HOOKED',
  author: 'Nir Eyal',
  image: 'img/Book.png'
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

describe('<Book >', () => {
  it('should render correctly', async () => {
    const { container } = render(<Book {...props} />)

    expect(await screen.findByText(/HOOKED/i)).toBeInTheDocument()
    expect(await screen.findByText(/Nir Eyal/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.image
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render default image correctly', async () => {
    render(<Book author={props.author} id={props.id} title={props.title} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      'img/cover.png'
    )
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'alt',
      props.title
    )
  })

  it('should redirect to details page', () => {
    render(<Book {...props} />)

    userEvent.click(screen.getByTestId(props.id))
    expect(push).toHaveBeenCalledWith(`details/${props.id}`)
  })
})
