import { render } from 'utils/test-utils'

import BookOpen from '.'

describe('<BookOpenIcon />', () => {
  it('should render correctly', () => {
    const { container } = render(<BookOpen />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
