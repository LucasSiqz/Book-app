import { useState, useEffect } from 'react'

import api from 'services/api'

import discoverMock from 'components/DiscoverCardSlider/mock'
import TextField from 'components/TextField'
import WelcomeMessage from 'components/WelcomeMessage'
import Heading from 'components/Heading'
import DiscoverCardSlider from 'components/DiscoverCardSlider'
import CurrentlyReading from 'components/CurrentlyReading'
import Review from 'components/Review'
import BottomNavBar from 'components/BottomNavBar'
import Container from 'components/Container'
import Book from 'components/Book'
import { SearchIcon } from 'components/Icons'

import * as S from './styles'

type searchResult = {
  id: string
  volumeInfo: {
    authors: string[]
    title: string
    imageLinks: {
      smallThumbnail: string
    }
  }
}

const Home = () => {
  const [filter, setFilter] = useState('')
  const [result, setResult] = useState<searchResult[]>([])

  useEffect(() => {
    if (filter) {
      const timer = setTimeout(
        () =>
          api.get(`?q=${filter}`).then((item) => setResult(item.data.items)),
        300
      )

      return () => {
        clearTimeout(timer)
      }
    }
  }, [filter])

  return (
    <S.Wrapper>
      <Container>
        <S.HeaderSection>
          <TextField
            name="book"
            placeholder="Search book"
            icon={<SearchIcon />}
            value={filter}
            onChange={(event) => setFilter(event?.target.value)}
          />

          {!filter && <WelcomeMessage name="Mehmed Al Fatih" />}
        </S.HeaderSection>

        {!filter ? (
          <>
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
                  path: '/reading'
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
                  path: '/reviews'
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
          </>
        ) : (
          <S.Grid>
            {result && result.length > 0 ? (
              result.map((item) => (
                <Book
                  key={item.id}
                  title={item.volumeInfo.title}
                  author={
                    item.volumeInfo.authors
                      ? item.volumeInfo.authors[0]
                      : 'unknow'
                  }
                  image={item.volumeInfo.imageLinks?.smallThumbnail}
                />
              ))
            ) : (
              <p>Sem resultados</p>
            )}
          </S.Grid>
        )}
      </Container>

      <BottomNavBar />
    </S.Wrapper>
  )
}
export default Home
