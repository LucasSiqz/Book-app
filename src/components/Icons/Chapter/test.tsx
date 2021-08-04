import { render } from 'utils/test-utils'

import Chapter from '.'

describe('<ChapterIcon />', () => {
  it('should render correctly', () => {
    const { container } = render(<Chapter />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
