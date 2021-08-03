import * as S from './styles'

const Loader = () => (
  <S.LoadingContainer>
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </S.LoadingContainer>
)

export default Loader
