import { useState, useEffect, useCallback } from 'react'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

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
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [result, setResult] = useState<searchResult[]>([])
  const [bookCount, setBookCount] = useState(0)

  const hasMoreBooks = result.length < (bookCount || 0)

  const getBooks = useCallback(
    async (startIndex: number) => {
      try {
        if (startIndex === 0) {
          setIsLoading(true)
        } else {
          setIsLoadingMore(true)
        }

        const response = await api.get(`?q=${filter}`, {
          params: {
            startIndex: startIndex,
            maxResults: 9
          }
        })
        setBookCount(response.data.totalItems || 0)
        if (response.data.items) {
          setResult((state) => [...state, ...response.data.items])
        }
      } catch (err) {
        console.log(err)
      } finally {
        if (startIndex === 0) {
          setIsLoading(false)
        } else {
          setIsLoadingMore(false)
        }
      }
    },
    [filter]
  )

  useEffect(() => {
    setIsLoading(true)
    setResult([])
    setBookCount(0)

    if (filter) {
      const timer = setTimeout(() => {
        getBooks(0)
      }, 300)

      return () => {
        clearTimeout(timer)
      }
    } else {
      setResult([])
    }
    setIsLoading(false)
  }, [filter, getBooks])

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
                  path: '/'
                }}
              />
              <DiscoverCardSlider {...discovery} />
            </S.DiscoverSection>

            <S.CurrentlyReadingSection>
              <Heading
                title="Currently Reading"
                nav={{
                  title: 'All',
                  path: '/'
                }}
              />
              <CurrentlyReading {...currentlyReading} />
            </S.CurrentlyReadingSection>

            <S.ReviewsSection>
              <Heading
                title="Reviews of The Days"
                nav={{
                  title: 'All Video',
                  path: '/'
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
          <S.ResultContainer>
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
            {hasMoreBooks && (
              <S.Center>
                {!isLoadingMore ? (
                  <S.ShowMore>
                    <S.ShowMoreButton
                      role="button"
                      onClick={() => getBooks(result.length)}
                    >
                      <p>Show More</p>
                      <ArrowDown size={35} />
                    </S.ShowMoreButton>
                  </S.ShowMore>
                ) : (
                  <Loader />
                )}
              </S.Center>
            )}
          </S.ResultContainer>
        )}
      </Container>

      <BottomNavBar />
    </S.Wrapper>
  )
}
export default Home
