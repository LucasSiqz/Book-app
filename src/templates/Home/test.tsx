import { render, screen, waitFor } from 'utils/test-utils'
import discoverMock from 'components/DiscoverCardSlider/mock'

import Home from '.'
import userEvent from '@testing-library/user-event'

jest.mock('components/WelcomeMessage', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock WelcomeMessage"></div>
    }
  }
})

jest.mock('components/Heading', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Heading"></div>
    }
  }
})

jest.mock('components/DiscoverCardSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock DiscoverCardSlider"></div>
    }
  }
})

jest.mock('components/CurrentlyReading', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock CurrentlyReading"></div>
    }
  }
})

jest.mock('components/Review', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Review"></div>
    }
  }
})

jest.mock('components/BottomNavBar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BottomNavBar"></div>
    }
  }
})

jest.mock('components/Book', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Book"></div>
    }
  }
})

jest.mock('components/Loader', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Loader"></div>
    }
  }
})

const props = {
  discovery: {
    items: discoverMock
  },
  currentlyReading: {
    id: 'eLRhDgAAQBAJ',
    title: 'Originals',
    image: 'img/BookCover.png',
    author: 'Adam Grant',
    currentChapter: 2,
    chapterCount: 9
  },
  review: {
    title: "Don't Make Me Think",
    author: 'Jesse Showalter',
    image: 'img/Review.png',
    description: '<p>description</p>',
    viewsCount: 5.2,
    weeksAgo: 1
  }
}

describe('<Home />', () => {
  it('should render correctly', () => {
    render(<Home {...props} />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByTestId('Mock WelcomeMessage')).toBeInTheDocument()
    expect(screen.getByTestId('Mock DiscoverCardSlider')).toBeInTheDocument()
    expect(screen.getByTestId('Mock CurrentlyReading')).toBeInTheDocument()
    expect(screen.getByTestId('Mock CurrentlyReading')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Review')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Heading')).toHaveLength(3)
  })

  it('should search books', async () => {
    render(<Home {...props} />)
    const input = screen.getByRole('textbox')
    const text = 'This is my book'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(screen.getByTestId('Mock Loader')).toBeInTheDocument()
    })

    await waitFor(
      () => {
        expect(screen.getAllByTestId('Mock Book')).toHaveLength(9)
      },
      { timeout: 1500 }
    )
  })

  it('should load more books', async () => {
    render(<Home {...props} />)
    const input = screen.getByRole('textbox')
    const text = 'This is my book'
    userEvent.type(input, text)

    await waitFor(
      async () => {
        userEvent.click(screen.getByRole('button', { name: /Show More/i }))
        expect(screen.getByTestId('Mock Loader')).toBeInTheDocument()
      },
      { timeout: 1500 }
    )
  })
})
