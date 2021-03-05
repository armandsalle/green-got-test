import Head from 'next/head'
import { ChangeEvent, useState } from 'react'
import { greetingsOptions } from '../lib/greetings'

export const Home = (): JSX.Element => {
  const [firstName, setFirstName] = useState('')
  const [greetings, setGreetings] = useState<greetingsOptions | null>(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const queryParams = { first_name: firstName }
    const a = new URLSearchParams(queryParams).toString()
    const res = await fetch('/api/greetings?' + a)
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
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFirstName(e.target.value)
          }
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
