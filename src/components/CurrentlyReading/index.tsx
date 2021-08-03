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
    <S.Wrapper onClick={() => push(`details/${id}`)}>
      <S.Image src={image} />

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
        <S.RightEffect>
          <S.WaveCircle src="img/waveCircle.svg" />
        </S.RightEffect>
        <S.RightEffect>
          <S.BottomCircle src="img/bottomCircle.svg" />
        </S.RightEffect>
        <S.RightEffect>
          <S.Rectangle src="img/rectangle.svg" />
        </S.RightEffect>
        <S.RightEffect>
          <S.BorderCircle src="img/borderCircle.svg" />
        </S.RightEffect>
      </S.Info>
    </S.Wrapper>
  )
}

export default CurrentlyReading
