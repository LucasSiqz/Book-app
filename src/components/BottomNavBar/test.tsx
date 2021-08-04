import { render, screen } from 'utils/test-utils'

import BottomNavBar from '.'

describe('<BottomNavBar />', () => {
  it('should render correctly', () => {
    render(<BottomNavBar />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Libraries')).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
  })
})
