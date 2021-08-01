import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.large};
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    a {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.blue};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`
