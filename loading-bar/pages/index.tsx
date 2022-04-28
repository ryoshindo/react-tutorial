import React from 'react'
import Link from 'next/link'

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div>
      <main>
        <p>Page Home</p>
        <Link href="/foo">Go to Foo</Link>
      </main>
    </div>
  )
}

export default Home
