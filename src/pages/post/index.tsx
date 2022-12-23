import React, { useState, useEffect } from 'react'
import Layout from '@theme/Layout'
import Editor from './editor'

export default () => {
  // const
  return (
    <Layout
      title="create blog"
      description="create async blog to repo"
      wrapperClassName="flex"
    >
      <div className="container flex flex-1 flex-col py-4">
        <Editor />
      </div>
    </Layout>
  )
}
