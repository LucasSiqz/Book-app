import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    margin: 2rem 0;
    background: ${theme.colors.beige};
    padding-bottom: ${theme.spacings.xxsmall};
    padding-top: ${theme.spacings.xsmall};
    box-shadow: 0px 3px 45px rgba(121, 141, 67, 0.115084);
    border-top-right-radius: ${theme.border.radius};
    border-bottom-left-radius: ${theme.border.radius};
  `}
`

export const Image = styled.img`
  position: absolute;
  left: 2rem;
  top: -1.2rem;
  height: 13rem;
  width: 8.8rem;
  filter: drop-shadow(5px 7px 32px rgba(140, 170, 58, 0.193701));
`

export const Info = styled.div`
  margin-left: 11.8rem;
`

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.2rem;
`

export const Author = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.alternativeGray};
    margin-top: 0.5rem;
  `}
`

export const Chapter = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: 2.2rem;

    svg {
      margin-right: 0.3rem;
    }

    p {
      font-size: ${theme.font.sizes.xsmall};
    }

    p:nth-child(3) {
      color: ${theme.colors.pink};
      font-weight: bold;
      margin: 0 0.3rem;
    }
  `}
`
export const RightEffect = styled.div`
  position: absolute;
  overflow: hidden;
  right: 0px;
  top: 0px;
  height: 100%;
`

export const TopCircle = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`

export const BottomCircle = styled.img`
  margin-right: -2.2rem;
  margin-top: 2.2rem;
`
export const WaveCircle = styled.img`
  width: 8rem;
  height: 8rem;
  margin-top: -2.3rem;
  margin-right: -3.6rem;
  transform: rotate(-25deg);
`
export const Rectangle = styled.img`
  margin-top: 5.5rem;
  margin-right: -2.3rem;
`

export const BorderCircle = styled.img`
  margin-right: 9rem;
  margin-top: -1rem;
`
