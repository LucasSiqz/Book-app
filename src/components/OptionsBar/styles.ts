import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 5rem;
  padding: 0 2rem;
`

export const Options = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: ${theme.colors.white};
    box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
    padding: 2rem 0;
  `}
`

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    cursor: pointer;
    align-items: center;

    svg {
      path,
      circle {
        stroke: ${theme.colors.gray};
        transition: stroke ${theme.transition.default};
      }
    }

    p {
      margin-left: 1rem;
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.darkGray};
      font-weight: bold;
      transition: color ${theme.transition.default};
    }

    &:hover {
      p {
        color: ${theme.colors.black};
      }

      svg {
        path,
        circle {
          stroke: ${theme.colors.black};
        }
      }
    }
  `}
`

export const Divider = styled.div`
  ${({ theme }) => css`
    width: 0.2rem;
    height: 1.6rem;
    background: ${theme.colors.lightGray};
  `}
`
