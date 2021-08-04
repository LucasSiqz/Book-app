import { render } from 'utils/test-utils'

import Search from '.'

describe('<SearchIcon />', () => {
  it('should render correctly', () => {
    const { container } = render(<Search />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
