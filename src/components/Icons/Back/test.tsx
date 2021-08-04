import { render } from 'utils/test-utils'

import Back from '.'

describe('<BackIcon />', () => {
  it('should render correctly', () => {
    const { container } = render(<Back />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
