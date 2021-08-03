import { useRouter } from 'next/router'

import { BackIcon } from 'components/Icons'

import * as S from './styles'

export type BookHighlightProps = {
  image: string
}

const BookHighlight = ({ image }: BookHighlightProps) => {
  const router = useRouter()

  return (
    <S.Wrapper>
      <S.ArrowButton onClick={() => router.push('/')} title="Go back">
        <BackIcon />
      </S.ArrowButton>
      <S.Image src={image} alt="book cover" />

      {/* Visual Effects */}
      <S.PinkCircle src="../img/pinkCircle.svg" />
      <S.DarkBlueCircle src="../img/darkBlueCircle.svg" />
      <S.BorderCircle src="../img/borderCircle.svg" />
      <S.WaveCircleSmall src="../img/waveCircle.svg" />
      <S.WaveContainer>
        <S.WaveCircle src="../img/waveCircle.svg" />
      </S.WaveContainer>
    </S.Wrapper>
  )
}

export default BookHighlight
