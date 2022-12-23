import React, { useState, useCallback } from 'react'
import dayjs from 'dayjs'
import { $convertToMarkdownString } from '@lexical/markdown'
import { PLAYGROUND_TRANSFORMERS } from './plugins/MarkdownTransformers'
import Layout from '@theme/Layout'
import Editor from './editor'

import { encode } from 'js-base64'

import { repository } from '../../../package.json'

import clsx from 'clsx'

type Repository = {
  api: string
  name: string
  type: 'github' | 'gitlab'
  branch: string
  url: string
}

// YYYY-MM-DDHHmmss
export default () => {
  const [title, setTitle] = useState(dayjs().format('YYYY-MM-DD blog'))
  const [tag, setTag] = useState('news, fe')
  const [loading, setLoading] = useState(false)
  const [markdown, setMarkdown] = useState('')

  const editorStateChange = useCallback((editorState) => {
    editorState.read(() => {
      setMarkdown($convertToMarkdownString(PLAYGROUND_TRANSFORMERS))
    })
  }, [])

  const handlePost = useCallback(async () => {
    if (loading) return
    if (!title.length || !tag.length || !markdown.length) return
    setLoading(true)
    const blogFileName = dayjs().format('YYYY-MM-DDHHmmss')
    // generate formatter
    const formatter = `---
slug: ${blogFileName}
title: ${title}
authors: [innocces]
tags: [${tag}]
---`
    const blogContent = `${formatter}

${markdown}
    `
    const token = localStorage.getItem('gh-token')
    const { api, type, name } = repository as Repository
    const body = {
      content: encode(blogContent),
      message: `blog(${blogFileName}.md): ${title} - [${tag}]`
    }
    const response = await fetch(
      `${api}/repos/${name}/contents/blog/${blogFileName}.md`,
      {
        method: 'PUT',
        headers: {
          Authorization: `token ${token}`
        },
        body: JSON.stringify(body)
      }
    )
    const jsonResponse = await response.json()
    if (!jsonResponse.message) {
      alert('create success!')
    } else {
      alert(jsonResponse.message)
    }
    setLoading(false)
  }, [markdown, title, tag, loading])

  return (
    <Layout
      title="create blog"
      description="create async blog to repo"
      wrapperClassName="flex"
    >
      <div className="container flex flex-1 flex-col py-4">
        <input
          value={title}
          className="border border-solid border-slate-400 px-4 outline-none h-10 rounded-md text-base mb-4"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="please enter post title"
        />
        <input
          value={tag}
          className="border border-solid border-slate-400 px-4 outline-none h-10 rounded-md text-base mb-4"
          onChange={(e) => setTag(e.target.value)}
          placeholder="please enter post tag, split with quate"
        />
        <Editor onChange={editorStateChange} />
        <div className="text-center mt-4">
          <button
            className={clsx('button button--primary', loading && 'disabled')}
            onClick={handlePost}
          >
            保存
          </button>
        </div>
      </div>
    </Layout>
  )
}
