import { render } from 'utils/test-utils'

import HeadPhones from '.'

describe('<HeadPhonesIcon />', () => {
  it('should render correctly', () => {
    const { container } = render(<HeadPhones />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
