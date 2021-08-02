import styled, { css } from 'styled-components'

const Container = styled.main`
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

export default Container
