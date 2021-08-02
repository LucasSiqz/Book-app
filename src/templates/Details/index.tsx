import BookHighlight from 'components/BookHighlight'
import Container from 'components/Container'
import OptionsBar from 'components/OptionsBar'

import * as S from './styles'

const Details = () => (
  <S.Wrapper>
    <BookHighlight image="img/Book.png" />
    <Container>
      <S.Content>
        <S.Title>
          <strong>Hooked </strong> :How to Build Habid-Forming Products
        </S.Title>
        <S.Author>Nir Eyal</S.Author>
        <S.Text>
          How do successful companies create products people can’t put down? Why
          do some products capture widespread attention while others flop?Why do
          some products capture widespread attention while others flop?Why do
          some products capture widespread attention while others flop?
        </S.Text>
      </S.Content>
    </Container>
    <OptionsBar />
  </S.Wrapper>
)

export default Details
