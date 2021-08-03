import { useRouter } from 'next/router'

import * as S from './styles'

export type BookProps = {
  id: string
  title: string
  author: string
  image?: string
}

const Book = ({ id, title, author, image }: BookProps) => {
  const { push } = useRouter()

  return (
    <S.Wrapper onClick={() => push(`details/${id}`)}>
      <S.Image src={image || 'img/cover.png'} />
      <strong>{title}</strong>
      <strong>{`by ${author}`}</strong>
    </S.Wrapper>
  )
}
export default Book
