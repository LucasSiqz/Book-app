import * as S from './styles'

export type BookProps = {
  title: string
  author: string
  image?: string
}

const Book = ({ title, author, image }: BookProps) => (
  <S.Wrapper>
    <S.Image src={image || 'img/Book.png'} />
    <strong>{title}</strong>
    <strong>{`by ${author}`}</strong>
  </S.Wrapper>
)

export default Book
