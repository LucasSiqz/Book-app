import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    h2 {
      font-size: ${theme.font.sizes.xxlarge};
    }

    h2:first-child {
      color: ${theme.colors.darkGray};
    }
  `}
`
export const Name = styled.h2`
  ${({ theme }) => css`
    margin: 0 1rem;
    color: ${theme.colors.pink};
  `}
`
