import { GraphIcon } from '../Icons'

import * as S from './styles'

export type DiscoverCardProps = {
  title: string
  author: string
  readCount: number
  image: string
}

const DiscoverCard = ({
  title = 'Hooked',
  author = 'Nir Eyal',
  readCount = 120,
  image = '/img/Book.png'
}: DiscoverCardProps) => (
  <S.Wrapper>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Author>{author}</S.Author>
      <S.Read>
        <GraphIcon />
        <p>{`${readCount}+`}</p>
        <p>Read Now</p>
      </S.Read>
    </S.Info>
    <S.Image src={image} alt={`${title} book cover`} />

    <S.Triangle src="img/triangle.svg" />
    <S.Rectangle src="img/rectangle.svg" />
    <S.BorderCircle src="img/border-circle.svg" />
    <S.WaveCircle src="img/waveCircle2.svg" />
  </S.Wrapper>
)

export default DiscoverCard
