import { useRouter } from 'next/router'

const DetailPage = () => {
  const router = useRouter()
  router.query.newsId
  return (
    <>
      Detail page {router.query.newsId}

    </>
  )
}

export default DetailPage
