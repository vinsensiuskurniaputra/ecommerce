import React from 'react'
import Head from 'next/head'
import {Navbar, Footer} from './'

const Layout = ({children} : {children:any}) => {
  return (
    <div className='layout'>
      <Head>
        <title>Vinsen Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout