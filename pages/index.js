import React from 'react'

import Layout from '../components/Layout'
import Settings from '../components/Settings'
import Greeting from '../components/Greeting'

export default function IndexPage (props) {
  return (
    <Layout>
      <Settings />
      <Greeting />
    </Layout>
  )
}
