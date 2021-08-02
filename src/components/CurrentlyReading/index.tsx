import { ChapterIcon } from '../Icons'

import * as S from './styles'

export type CurrentlyReadingProps = {
  title: string
  author: string
  image?: string
  currentChapter: number
  chapterCount: number
}

const CurrentlyReading = ({
  title,
  author,
  image,
  currentChapter,
  chapterCount
}: CurrentlyReadingProps) => (
  <S.Wrapper>
    <S.Image src={image || 'img/BookCover.png'} />

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

export default CurrentlyReading
