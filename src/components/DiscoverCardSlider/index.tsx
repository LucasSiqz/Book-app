import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import DiscoverCard, { DiscoverCardProps } from 'components/DiscoverCard'
import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

export type DiscoverCardSliderProps = {
  items: DiscoverCardProps[]
}

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToShow: 2.3
      }
    },
    {
      breakpoint: 520,
      settings: {
        arrows: false,
        slidesToShow: 1.35
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next book" />,
  prevArrow: <ArrowLeft aria-label="previous book" />
}

const DiscoverCardSlider = ({ items }: DiscoverCardSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items && items.map((item) => <DiscoverCard key={item.id} {...item} />)}
    </Slider>
  </S.Wrapper>
)

export default DiscoverCardSlider
