import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;
`

export const Container = styled.main`
  ${({ theme }) => css`
    @media (min-width: 750px) {
      width: 100%;
      max-width: ${theme.grid.container};
      margin-left: auto;
      margin-right: auto;
      padding-left: calc(${theme.grid.gutter} / 2);
      padding-right: calc(${theme.grid.gutter} / 2);
    }
  `}
`

export const HeaderSection = styled.section`
  padding: 5rem 2rem 3rem 2rem;

  > div:first-child {
    margin-bottom: 3rem;
  }
`

export const DiscoverSection = styled.section`
  position: relative;
  padding-left: 2rem;
  margin-bottom: 3rem;

  > div:first-child {
    padding-right: 2rem;
  }
`

export const CurrentlyReadingSection = styled.section`
  > div:first-child {
    padding: 0 2rem;
  }

  > div:nth-child(2) {
    width: 89%;

    @media (min-width: 750px) {
      margin: 5rem auto 7rem auto;
      transform: scale(1.5);
      width: 40%;
    }

    @media (min-width: 1000px) {
      width: 35%;
    }
  }
`

export const ReviewsSection = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 6rem;
`
