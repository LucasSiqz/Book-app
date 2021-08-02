import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    strong {
      color: #313131;
      font-size: ${theme.font.sizes.xsmall};
    }

    strong:nth-child(3) {
      font-size: 1rem;
      margin-top: 0.5rem;
    }
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    width: 10rem;
    height: 15rem;
    filter: drop-shadow(0px 2px 4px rgba(229, 229, 229, 0.5));
    margin-bottom: 1rem;
  `}
`
