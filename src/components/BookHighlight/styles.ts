import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    height: 28.2rem;
    background: ${theme.colors.highlight};
    border-bottom-right-radius: 10rem;
  `}
`

export const ArrowButton = styled.button`
  ${({ theme }) => css`
    border: none;
    background: none;
    cursor: pointer;
    height: fit-content;
    padding-top: 5.5rem;
    padding-left: 3.3rem;
    transition: opacity ${theme.transition.default};

    &:hover {
      opacity: 0.7;
    }
  `}
`

export const Image = styled.img`
  position: absolute;
  width: 15.3rem;
  height: 22.9rem;
  filter: drop-shadow(0px 2px 4px rgba(229, 229, 229, 0.5));
  bottom: -3.1rem;
  z-index: 1;

  @media (min-width: 1000px) {
    width: 18.3rem;
    height: 25.9rem;
  }
`

export const WaveContainer = styled.div`
  position: relative;
  margin-left: auto;
  height: 12rem;
  width: 6rem;
  overflow: hidden;
`

export const WaveCircle = styled.img`
  position: absolute;
  top: -3rem;
  right: -5.5rem;
  overflow: hidden;
`

export const WaveCircleSmall = styled.img`
  position: absolute;
  width: 4.8rem;
  height: 4.8rem;
  top: 22.5rem;
  right: 10.2rem;
`

export const BorderCircle = styled.img`
  position: absolute;
  width: 2.4rem;
  height: 2.4rem;
  top: 8.7rem;
  right: 11rem;
`

export const DarkBlueCircle = styled.img`
  position: absolute;
  width: 6.3rem;
  height: 6.3rem;
  top: 10.5rem;
  left: 8rem;
`

export const PinkCircle = styled.img`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  top: 11.5rem;
  left: 5rem;
`
