import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
`

export const Navigation = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: ${theme.colors.white};
    padding: 1rem 0;
  `}
`

export const Item = styled.div`
  ${({ theme }) => css`
    display: flex;
    cursor: pointer;
    flex-direction: column;
    align-items: center;

    svg {
      path,
      circle {
        stroke: ${theme.colors.gray};
        transition: stroke ${theme.transition.default};
      }
    }

    p {
      margin-top: 1rem;
      color: ${theme.colors.gray};
      transition: color ${theme.transition.default};
    }

    &.active {
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
