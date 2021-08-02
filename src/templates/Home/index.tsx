import { useState } from 'react'

import discoverMock from 'components/DiscoverCardSlider/mock'
import TextField from 'components/TextField'
import WelcomeMessage from 'components/WelcomeMessage'
import Heading from 'components/Heading'
import DiscoverCardSlider from 'components/DiscoverCardSlider'
import CurrentlyReading from 'components/CurrentlyReading'
import Review from 'components/Review'
import BottomNavBar from 'components/BottomNavBar'
import { SearchIcon } from 'components/Icons'

import * as S from './styles'

const Home = () => {
  const [filter, setFilter] = useState('')

  return (
    <S.Wrapper>
      <S.Container>
        <S.HeaderSection>
          <TextField
            name="book"
            placeholder="Search book"
            icon={<SearchIcon />}
            value={filter}
            onChange={(event) => setFilter(event?.target.value)}
          />

          <WelcomeMessage name="Mehmed Al Fatih" />
        </S.HeaderSection>

        <S.DiscoverSection>
          <Heading
            title="Discover new book"
            nav={{
              title: 'More',
              path: '/books'
            }}
          />
          <DiscoverCardSlider items={discoverMock} />
        </S.DiscoverSection>

        <S.CurrentlyReadingSection>
          <Heading
            title="Currently Reading"
            nav={{
              title: 'All',
              path: '/book/originals'
            }}
          />
          <CurrentlyReading
            title="Originals"
            author="Adam Grant"
            currentChapter={2}
            chapterCount={9}
          />
        </S.CurrentlyReadingSection>

        <S.ReviewsSection>
          <Heading
            title="Reviews of The Days"
            nav={{
              title: 'All Video',
              path: '/book/originals'
            }}
          />
          <Review
            title="Don't Make Me Think"
            author="Jesse Showalter"
            description='"Dont Make Me Think" by Steve Krug is one of the first books I read when I was getting into digital design. It helped me move from designing things that just "look nice" to designing things that are usable, useful, memorable and simple to learn and use. '
            viewsCount={5.2}
            weeksAgo={1}
          />
        </S.ReviewsSection>
      </S.Container>

      <BottomNavBar />
    </S.Wrapper>
  )
}
export default Home
