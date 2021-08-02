import * as S from './styles'

export type ReviewProps = {
  title: string
  author: string
  description: string
  image?: string
  viewsCount: number
  weeksAgo: number
}

const Review = ({
  title,
  author,
  description,
  image,
  viewsCount,
  weeksAgo
}: ReviewProps) => (
  <S.Wrapper>
    <S.Image src={image || 'img/Review.png'} alt={`${title}`} />

    <S.Info>
      <S.Title>{title}</S.Title>
      <S.SubInfo>
        <p>{author}</p>
        <S.Divider />
        <p>{`${viewsCount} Views`}</p>
        <S.Divider />
        <p>{`${weeksAgo} Week(s) ago`}</p>
      </S.SubInfo>

      <S.Description>{description}</S.Description>
    </S.Info>
  </S.Wrapper>
)

export default Review
