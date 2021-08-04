import { render } from 'utils/test-utils'

import User from '.'

describe('<UserIcon />', () => {
  it('should render correctly', () => {
    const { container } = render(<User />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
