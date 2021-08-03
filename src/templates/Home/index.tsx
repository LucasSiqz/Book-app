import { useState, useEffect } from 'react'

import api from 'services/api'

import TextField from 'components/TextField'
import WelcomeMessage from 'components/WelcomeMessage'
import Heading from 'components/Heading'
import DiscoverCardSlider, {
  DiscoverCardSliderProps
} from 'components/DiscoverCardSlider'
import CurrentlyReading, {
  CurrentlyReadingProps
} from 'components/CurrentlyReading'
import Review, { ReviewProps } from 'components/Review'
import BottomNavBar from 'components/BottomNavBar'
import Container from 'components/Container'
import Book from 'components/Book'
import Loader from 'components/Loader'
import { SearchIcon } from 'components/Icons'

import * as S from './styles'

type searchResult = {
  id: string
  volumeInfo: {
    authors: string[]
    title: string
    publisher: string
    imageLinks: {
      smallThumbnail: string
    }
  }
}

export type HomeProps = {
  discovery: DiscoverCardSliderProps
  currentlyReading: CurrentlyReadingProps
  review: ReviewProps
}

const Home = ({ discovery, currentlyReading, review }: HomeProps) => {
  const [filter, setFilter] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<searchResult[]>([])

  useEffect(() => {
    setIsLoading(true)
    setResult([])

    if (filter) {
      const timer = setTimeout(() => {
        setIsLoading(true)
        api
          .get(`?q=${filter}`)
          .then((item) => setResult(item.data.items))
          .finally(() => setIsLoading(false))
      }, 300)

      return () => {
        clearTimeout(timer)
      }
    } else {
      setResult([])
      setIsLoading(false)
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
              <DiscoverCardSlider {...discovery} />
            </S.DiscoverSection>

            <S.CurrentlyReadingSection>
              <Heading
                title="Currently Reading"
                nav={{
                  title: 'All',
                  path: '/reading'
                }}
              />
              <CurrentlyReading {...currentlyReading} />
            </S.CurrentlyReadingSection>

            <S.ReviewsSection>
              <Heading
                title="Reviews of The Days"
                nav={{
                  title: 'All Video',
                  path: '/reviews'
                }}
              />
              <Review {...review} />
            </S.ReviewsSection>
          </>
        ) : isLoading ? (
          <S.Center>
            <Loader />
          </S.Center>
        ) : (
          <S.Grid>
            {result && result.length > 0 ? (
              result.map((item) => (
                <Book
                  key={item.id}
                  id={item.id}
                  title={item.volumeInfo.title}
                  author={
                    (item.volumeInfo.authors && item.volumeInfo.authors[0]) ||
                    item.volumeInfo.publisher ||
                    'unknown'
                  }
                  image={item.volumeInfo.imageLinks?.smallThumbnail}
                />
              ))
            ) : (
              <S.Center>
                <p>sem resultados</p>
              </S.Center>
            )}
          </S.Grid>
        )}
      </Container>

      <BottomNavBar />
    </S.Wrapper>
  )
}
export default Home
