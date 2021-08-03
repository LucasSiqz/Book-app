import api from 'services/api'

import DetailsTemplate, { DetailsProps } from 'templates/Details'

type ServerSideProps = {
  params: {
    slug: string
  }
}

export default function Details(props: DetailsProps) {
  return <DetailsTemplate {...props} />
}

export const getServerSideProps = async ({ params }: ServerSideProps) => {
  const { slug } = params

  const { data: book } = await api.get(`/${slug}`)

  return {
    props: {
      image: book.volumeInfo.imageLinks.thumbnail || 'img/cover',
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle || '',
      author:
        (book.volumeInfo.authors && book.volumeInfo.authors[0]) ||
        book.volumeInfo.publisher ||
        'unknown',
      description: book.volumeInfo.description
    }
  }
}
