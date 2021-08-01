import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    @media (max-width: 1440px) {
      overflow-x: hidden;
    }

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      margin: 0 0.5rem;
      flex: 1 0 auto;
      height: 100%;
    }

    .slick-list {
      margin: 0 -0.5rem;
    }

    @media (min-width: 1170px) {
      .slick-slide > div {
        margin: 0 0.5rem;
      }
      .slick-list {
        margin: 0 -0.5rem;
      }
    }

    @media (max-width: 570px) {
      .slick-active {
        transform: scale(0.95);
      }
      .slick-current {
        transform: scale(1);
      }
    }

    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.darkGray};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
