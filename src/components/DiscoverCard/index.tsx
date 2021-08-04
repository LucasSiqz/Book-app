import { useRouter } from 'next/router'

import { GraphIcon } from '../Icons'

import * as S from './styles'

export type DiscoverCardProps = {
  id: string
  title: string
  author: string
  readCount: number
  image: string
}

const DiscoverCard = ({
  id,
  title,
  author,
  readCount,
  image
}: DiscoverCardProps) => {
  const { push } = useRouter()

  return (
    <S.Wrapper data-testid={id} onClick={() => push(`details/${id}`)}>
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

      {/* Visual Effects */}
      <S.Triangle src="img/triangle.svg" />
      <S.Rectangle src="img/rectangle.svg" />
      <S.BorderCircle src="img/borderCircle.svg" />
      <S.WaveCircle src="img/waveCircle2.svg" />
    </S.Wrapper>
  )
}

export default DiscoverCard
