import { render } from 'utils/test-utils'

import Share from '.'

describe('<ShareIcon />', () => {
  it('should render correctly', () => {
    const { container } = render(<Share />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
