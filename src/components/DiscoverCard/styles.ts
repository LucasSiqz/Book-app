import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #00173d;
    border-radius: ${theme.border.radius};
    padding: 1.5rem 2rem;
    overflow: hidden;
    max-width: 30.2rem;
    transition: opacity ${theme.transition.fast};

    @media (min-width: 700px) {
      &:hover {
        opacity: 0.95;
      }
    }
  `}
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`

export const Title = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-bottom: 1.4rem;
    font-size: 2.7rem;

    font-family: 'Playfair Display', serif;
  `}
`

export const Author = styled.i`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-bottom: 2.8rem;
  `}
`

export const Read = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.white};
    align-items: center;

    p {
      margin-left: 0.2rem;
      font-size: ${theme.font.sizes.xsmall};
    }

    p:first-child {
      font-weight: bold;
    }
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: 7.3rem;
    height: 10.9rem;
    border-radius: ${theme.border.radius};
  `}
`

export const Triangle = styled.img`
  position: absolute;
  top: 3%;
  right: 26%;
`

export const Rectangle = styled.img`
  position: absolute;
  bottom: 18%;
  right: 30%;
`

export const BorderCircle = styled.img`
  position: absolute;
  top: 10%;
  left: 52%;
`

export const WaveCircle = styled.img`
  position: absolute;
  left: -2%;
  bottom: 0;
  height: 12rem;
  width: 12rem;
`
