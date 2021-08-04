import HomeTemplate, { HomeProps } from 'templates/Home'

import discoverMock from 'components/DiscoverCardSlider/mock'

export default function Home(props: HomeProps) {
  return <HomeTemplate {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      discovery: {
        items: discoverMock
      },
      currentlyReading: {
        id: 'eLRhDgAAQBAJ',
        title: 'Originals',
        image: 'img/BookCover.png',
        author: 'Adam Grant',
        currentChapter: 2,
        chapterCount: 9
      },
      review: {
        title: "Don't Make Me Think",
        author: 'Jesse Showalter',
        image: 'img/Review.png',
        description:
          '"Dont Make Me Think" by Steve Krug is one of the first books I read when I was getting into digital design. It helped me move from designing things that just "look nice" to designing things that are usable, useful, memorable and simple to learn and use. ',
        viewsCount: 5.2,
        weeksAgo: 1
      }
    }
  }
}
