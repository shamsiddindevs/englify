import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>welcom to Home</h1>
      <Link href={'/user'}>
      About
      </Link>

    </div>
  )
}

export default Home