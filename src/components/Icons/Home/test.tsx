import { render } from 'utils/test-utils'

import Home from '.'

describe('<HomeIcon />', () => {
  it('should render correctly', () => {
    const { container } = render(<Home />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
