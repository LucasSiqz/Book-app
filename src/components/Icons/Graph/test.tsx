import { render } from 'utils/test-utils'

import Graph from '.'

describe('<GraphIcon />', () => {
  it('should render correctly', () => {
    const { container } = render(<Graph />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
