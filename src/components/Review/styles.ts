import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 33.5rem;
`

export const Image = styled.img`
  width: 100%;
  height: 18.1rem;
`

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.xsmall} ${theme.spacings.xxsmall};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-bottom: 0.6rem;
  `}
`

export const SubInfo = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 0.8rem;
    color: #6a6767;
  }
`

export const Divider = styled.div`
  ${({ theme }) => css`
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background: #6a6767;
    margin-top: 0.2rem;
    margin-left: ${theme.spacings.xsmall};
    margin-right: ${theme.spacings.xxsmall};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: #6b6b6b;
    font-size: ${theme.font.sizes.xsmall};
    margin-top: 0.5rem;
  `}
`
