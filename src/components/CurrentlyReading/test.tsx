import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import CurrentlyReading from '.'

const props = {
  id: '1',
  title: 'Originals',
  image: 'img/BookCover.png',
  author: 'Adam Grant',
  currentChapter: 2,
  chapterCount: 9
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

describe('<CurrentlyReading >', () => {
  it('should render correctly', async () => {
    const { container } = render(<CurrentlyReading {...props} />)

    expect(await screen.findByText(/Originals/i)).toBeInTheDocument()
    expect(await screen.findByText(/Adam Grant/i)).toBeInTheDocument()
    expect(await screen.findByText(/2/i)).toBeInTheDocument()
    expect(await screen.findByText(/From 9/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.image
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should redirect to details page', () => {
    render(<CurrentlyReading {...props} />)

    userEvent.click(screen.getByTestId(props.id))
    expect(push).toHaveBeenCalledWith(`details/${props.id}`)
  })
})
