import { HomeIcon, BookIcon, UserIcon } from '../Icons'

import * as S from './styles'

const BottomNavBar = () => (
  <S.Wrapper>
    <S.Navigation ria-labelledby="bottom navigation">
      <S.Item className="active">
        <HomeIcon />
        <p>Home</p>
      </S.Item>
      <S.Item>
        <BookIcon />
        <p>Libraries</p>
      </S.Item>
      <S.Item>
        <UserIcon />
        <p>Profile</p>
      </S.Item>
    </S.Navigation>
  </S.Wrapper>
)

export default BottomNavBar
