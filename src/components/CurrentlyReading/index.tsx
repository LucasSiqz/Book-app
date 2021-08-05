import { useRouter } from 'next/router'

import { ChapterIcon } from '../Icons'

import * as S from './styles'

export type CurrentlyReadingProps = {
  id: string
  title: string
  author: string
  image?: string
  currentChapter: number
  chapterCount: number
}

const CurrentlyReading = ({
  id,
  title,
  author,
  image,
  currentChapter,
  chapterCount
}: CurrentlyReadingProps) => {
  const { push } = useRouter()

  return (
    <S.Wrapper data-testid={id} onClick={() => push(`details/${id}`)}>
      <S.Image src={image} alt={title} />

      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Author>{`by ${author}`}</S.Author>

        <S.Chapter>
          <ChapterIcon />
          <p>Chapter</p>
          <p>{currentChapter}</p>
          <p>{`From ${chapterCount}`}</p>
        </S.Chapter>

        {/* Visual Effects */}
        <S.TopCircle src="img/topCircle.svg" />
        <S.Effect>
          <S.BottomCircle src="img/bottomCircle.svg" />
        </S.Effect>
        <S.Effect>
          <S.WaveCircle src="img/waveCircle.svg" />
        </S.Effect>
        <S.Effect mask>
          <S.WaveCircle src="img/waveCircle.svg" />
        </S.Effect>
        <S.Effect>
          <S.Rectangle src="img/rectangle.svg" />
        </S.Effect>
        <S.Effect mask>
          <S.Rectangle src="img/rectangle.svg" />
        </S.Effect>
        <S.Effect>
          <S.BorderCircle src="img/borderCircle.svg" />
        </S.Effect>
        <S.Effect mask>
          <S.BorderCircle src="img/borderCircle.svg" />
        </S.Effect>
      </S.Info>
    </S.Wrapper>
  )
}

export default CurrentlyReading
