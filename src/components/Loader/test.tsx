import { render } from 'utils/test-utils'

import Loader from '.'

describe('<Loader />', () => {
  it('should render correctly', () => {
    const { container } = render(<Loader />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
