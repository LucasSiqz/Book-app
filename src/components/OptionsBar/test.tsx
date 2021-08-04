import { render, screen } from 'utils/test-utils'

import BottomNavBar from '.'

describe('<BottomNavBar />', () => {
  it('should render correctly', () => {
    render(<BottomNavBar />)

    expect(screen.getByText('Read')).toBeInTheDocument()
    expect(screen.getByText('Listen')).toBeInTheDocument()
    expect(screen.getByText('Share')).toBeInTheDocument()
  })
})
