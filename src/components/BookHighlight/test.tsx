import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import BookHighlight from '.'

const props = {
  image: '../img/cover.png'
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

describe('<BookHighlight />', () => {
  it('should render correctly', () => {
    const { container } = render(<BookHighlight {...props} />)

    expect(screen.getByRole('img', { name: 'book cover' })).toHaveAttribute(
      'src',
      props.image
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('click on arrow left should redirect to home', () => {
    render(<BookHighlight {...props} />)

    userEvent.click(screen.getByTitle(/Go back/i))
    expect(push).toHaveBeenCalledWith('/')
  })
})
