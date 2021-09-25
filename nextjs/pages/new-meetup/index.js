import Head from 'next/head'
import { useRouter } from 'next/router'

import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetupPage = () => {
  const router = useRouter()

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    console.log(data)

    router.replace('/')
  }

  return (
    <>
      <Head>
        <title>Add new meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create amazing opportunities.'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  )
}

export default NewMeetupPage
