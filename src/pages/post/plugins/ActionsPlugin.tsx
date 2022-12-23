import { $createCodeNode, $isCodeNode } from '@lexical/code'
import {
  $convertFromMarkdownString,
  $convertToMarkdownString
} from '@lexical/markdown'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $createTextNode, $getRoot } from 'lexical'
import * as React from 'react'
import { useCallback } from 'react'

import { TbMarkdown } from 'react-icons/tb'
import { PLAYGROUND_TRANSFORMERS } from './MarkdownTransformers'

export default function ActionsPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext()

  const handleMarkdownToggle = useCallback(() => {
    editor.update(() => {
      const root = $getRoot()
      const firstChild = root.getFirstChild()
      if ($isCodeNode(firstChild) && firstChild.getLanguage() === 'markdown') {
        $convertFromMarkdownString(
          firstChild.getTextContent(),
          PLAYGROUND_TRANSFORMERS
        )
      } else {
        const markdown = $convertToMarkdownString(PLAYGROUND_TRANSFORMERS)
        root
          .clear()
          .append($createCodeNode('markdown').append($createTextNode(markdown)))
      }
      root.selectEnd()
    })
  }, [editor])

  return (
    <button
      className="button button--primary text-2xl px-2 leading-6 absolute right-2 bottom-2"
      onClick={handleMarkdownToggle}
      title="Convert From Markdown"
      aria-label="Convert from markdown"
    >
      <TbMarkdown />
    </button>
  )
}
