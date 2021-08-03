import BookHighlight from 'components/BookHighlight'
import Container from 'components/Container'
import OptionsBar from 'components/OptionsBar'

import * as S from './styles'

export type DetailsProps = {
  image: string
  title: string
  subtitle: string
  author: string
  description: string
}

const Details = ({
  image,
  title,
  subtitle,
  author,
  description
}: DetailsProps) => (
  <S.Wrapper>
    <BookHighlight image={image} />
    <Container>
      <S.Content>
        <S.Title>
          <strong>{title} </strong> {!!subtitle && `: ${subtitle}`}
        </S.Title>
        <S.Author>{author}</S.Author>
        <S.Text>{description}</S.Text>
      </S.Content>
    </Container>
    <OptionsBar />
  </S.Wrapper>
)

export default Details
