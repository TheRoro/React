import Link from 'next/link'

const NewsPage = () => {
  return (
    <>
      <h1>News page</h1>
      <ul>
        <li><Link href="/news/next-js-framework">Next js framework</Link></li>
        <li>Something else</li>
      </ul>
    </>
  )
}

export default NewsPage
