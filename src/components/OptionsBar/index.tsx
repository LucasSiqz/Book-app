import { BookOpenIcon, HeadPhonesIcon, ShareIcon } from '../Icons'

import * as S from './styles'

const OptionsBar = () => (
  <S.Wrapper>
    <S.Options ria-labelledby="options">
      <S.Item>
        <BookOpenIcon />
        <p>Read</p>
      </S.Item>
      <S.Divider />
      <S.Item>
        <HeadPhonesIcon />
        <p>Listen</p>
      </S.Item>
      <S.Divider />
      <S.Item>
        <ShareIcon />
        <p>Share</p>
      </S.Item>
    </S.Options>
  </S.Wrapper>
)

export default OptionsBar
