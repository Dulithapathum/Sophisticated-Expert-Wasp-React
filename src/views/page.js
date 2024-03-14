import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Sophisticated Expert Wasp</title>
        <meta property="og:title" content="Page - Sophisticated Expert Wasp" />
      </Helmet>
      <div className="page-container1"></div>
    </div>
  )
}

export default Page
