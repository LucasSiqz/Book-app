import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`

export const Title = styled.div`
  ${({ theme }) => css`
    margin-top: 6.7rem;
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.darkGray};
  `}
`

export const Author = styled.strong`
  ${({ theme }) => css`
    margin-top: 0.7rem;
    margin-bottom: 1rem;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.pink};
  `}
`
export const Description = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.alternativeGray};
    font-size: ${theme.font.sizes.small};
    letter-spacing: 0.2px;
    line-height: 2.5rem;
    padding-bottom: 12rem;
  `}
`
