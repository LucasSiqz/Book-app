import { render } from 'utils/test-utils'

import Book from '.'

describe('<BookIcon />', () => {
  it('should render correctly', () => {
    const { container } = render(<Book />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
