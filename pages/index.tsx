import Head from 'next/head'
import { ChangeEvent, useState } from 'react'
import { greetingsOptions } from '../lib/greetings'

export const Home = (): JSX.Element => {
  const [firstName, setFirstName] = useState<string>('')
  const [greetings, setGreetings] = useState<greetingsOptions | null>(null)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const queryParams = encodeURI(firstName)
    const res = await fetch(`/api/greetings/${queryParams}`)
    const data = await res.json()

    setGreetings(data)
  }

  return (
    <main className="container">
      <Head>
        <title>Green Got Test - Armand Sallé</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fistname"
          id="firstname"
          value={firstName}
          onChange={handleInputChange}
        />
        <input type="submit" value="Sumit" disabled={!firstName} />
      </form>
      {greetings && (
        <p style={{ color: greetings.error ? 'red' : 'blue' }}>
          result: {greetings.message}
        </p>
      )}
    </main>
  )
}

export default Home
