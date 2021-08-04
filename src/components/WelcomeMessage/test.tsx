import { render, screen } from 'utils/test-utils'

import WelcomeMessage from '.'

const props = {
  name: 'Lucas'
}

describe('<WelcomeMessage />', () => {
  it('should render correctly', () => {
    const { container } = render(<WelcomeMessage {...props} />)

    expect(screen.getByRole('heading', { name: /Lucas/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
