import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>
        Welcome to About page
       <p>
       <Link href={'/user/nav'}>Nav</Link>
       </p>
       <p>
        <Link href={'/'}>Home</Link>
       </p>

    </div>
  )
}

export default About