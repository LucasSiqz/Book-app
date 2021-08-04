import { render, screen } from 'utils/test-utils'

import Details from '.'

jest.mock('components/BookHighlight', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BookHighlight"></div>
    }
  }
})

jest.mock('components/OptionsBar', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock OptionsBar"></div>
    }
  }
})

const props = {
  image: '../img/cover.png',
  title: 'Hooked',
  subtitle: 'How to Build Habit-Forming Products',
  author: 'Nir Eyal',
  description: '<p>description</p>'
}

describe('<Details />', () => {
  it('should render bookhighlight, opitions bar and correctly props', () => {
    render(<Details {...props} />)

    expect(screen.getByTestId('Mock BookHighlight')).toBeInTheDocument()
    expect(screen.getByTestId('Mock OptionsBar')).toBeInTheDocument()
    expect(screen.getByText(/Nir Eyal/i)).toBeInTheDocument()
    expect(screen.getByText('description')).toBeInTheDocument()
  })

  it('should not render subtitle', () => {
    render(
      <Details
        image={props.image}
        title={props.title}
        author={props.author}
        description={props.description}
      />
    )

    expect(
      screen.queryByText(/How to Build Habit-Forming Products/i)
    ).not.toBeInTheDocument()
  })
})
