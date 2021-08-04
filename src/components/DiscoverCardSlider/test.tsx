import 'match-media-mock'
import { render } from 'utils/test-utils'

import items from './mock'

import DiscoverCardSlider from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<DiscoverCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = render(<DiscoverCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })
})
