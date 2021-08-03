import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const HeaderSection = styled.section`
  padding: 5rem 2rem 3rem 2rem;

  > div:nth-child(2) {
    margin-top: 3rem;
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

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1.4rem;
  padding: 0 2rem;
`

export const Center = styled.div`
  margin: 0 auto;
  width: fit-content;
`

export const ResultContainer = styled.div`
  padding-bottom: 8rem;
`

export const ShowMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`

export const ShowMoreButton = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    color: ${theme.colors.pink};
    transition: opacity ${theme.transition.fast};

    &:hover {
      opacity: 0.8;
    }
  `}
`
