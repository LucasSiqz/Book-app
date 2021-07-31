import * as S from './styles'

export type WelcomeMessageProps = {
  name: string
}

const WelcomeMessage = ({ name = 'Mehmed Al Fatih' }: WelcomeMessageProps) => (
  <S.Wrapper>
    <h2>Hi,</h2>
    <S.Name>{name}</S.Name>
    <h2>👋</h2>
  </S.Wrapper>
)

export default WelcomeMessage
