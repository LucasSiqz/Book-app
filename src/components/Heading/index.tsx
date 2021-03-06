import Link from 'next/link'

import * as S from './styles'

export type HeadingProps = {
  title: string
  nav: {
    title: string
    path: string
  }
}

const Heading = ({ title, nav }: HeadingProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Nav aria-labelledby="section navigation">
      <Link href={`${nav.path}`}>
        <a>{nav.title}</a>
      </Link>
    </S.Nav>
  </S.Wrapper>
)

export default Heading
