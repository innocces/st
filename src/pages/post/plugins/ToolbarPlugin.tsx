import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  SELECTION_CHANGE_COMMAND,
  FORMAT_TEXT_COMMAND,
  $getSelection,
  $isRangeSelection,
  $createParagraphNode,
  $getNodeByKey
} from 'lexical'
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link'
import { $wrapNodes, $isAtNodeEnd } from '@lexical/selection'
import { $getNearestNodeOfType, mergeRegister } from '@lexical/utils'
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
  $isListNode,
  ListNode
} from '@lexical/list'
import { createPortal } from 'react-dom'
import {
  $createHeadingNode,
  $createQuoteNode,
  $isHeadingNode
} from '@lexical/rich-text'
import {
  $createCodeNode,
  $isCodeNode,
  getDefaultCodeLanguage,
  getCodeLanguages
} from '@lexical/code'
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineLink,
  AiOutlineOrderedList,
  AiOutlineStrikethrough,
  AiOutlineUnderline,
  AiOutlineUnorderedList
} from 'react-icons/ai'
import {
  BsChatRightQuote,
  BsChevronDown,
  BsCode,
  BsTextParagraph
} from 'react-icons/bs'
import { TbH1, TbH2 } from 'react-icons/tb'
import { MdEdit } from 'react-icons/md'

const LowPriority = 1

const blockTypeMap = {
  paragraph: {
    text: 'Normal',
    icon: <BsTextParagraph />,
    handler: () => $createParagraphNode()
  },
  quote: {
    text: 'Quote',
    icon: <BsChatRightQuote />,
    handler: () => $createQuoteNode()
  },
  code: {
    text: 'Code Block',
    icon: <BsCode />,
    handler: () => $createCodeNode()
  },
  h1: {
    text: 'Large Heading',
    icon: <TbH1 />,
    handler: () => $createHeadingNode('h1')
  },
  h2: {
    text: 'Small Heading',
    icon: <TbH2 />,
    handler: () => $createHeadingNode('h2')
  },
  ul: {
    text: 'Bullet List',
    icon: <AiOutlineUnorderedList />,
    handler: (editor) => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND),
    unHandler: (editor) => editor.dispatchCommand(REMOVE_LIST_COMMAND)
  },
  ol: {
    text: 'Numbered List',
    icon: <AiOutlineOrderedList />,
    handler: (editor) => editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND),
    unHandler: (editor) => editor.dispatchCommand(REMOVE_LIST_COMMAND)
  }
}

const actionTypeMap = {
  link: {
    icon: <AiOutlineLink />
  },
  code: {
    icon: <BsCode />,
    onClick: (editor) => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code')
  },
  strikethrough: {
    icon: <AiOutlineStrikethrough />,
    onClick: (editor) =>
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')
  },
  underline: {
    icon: <AiOutlineUnderline />,
    onClick: (editor) =>
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')
  },
  italic: {
    icon: <AiOutlineItalic />,
    onClick: (editor) => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')
  },
  bold: {
    icon: <AiOutlineBold />,
    onClick: (editor) => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')
  }
}

const supportedBlockTypes = new Set(Object.keys(blockTypeMap))

function positionEditorElement(editor, rect) {
  if (rect === null) {
    editor.style.opacity = '0'
    editor.style.top = '-1000px'
    editor.style.left = '-1000px'
  } else {
    editor.style.opacity = '1'
    editor.style.top = `${rect.top + rect.height + window.pageYOffset + 10}px`
    editor.style.left = `${
      rect.left + window.pageXOffset - editor.offsetWidth / 2 + rect.width / 2
    }px`
  }
}

function FloatingLinkEditor({ editor }) {
  const editorRef = useRef(null)
  const inputRef = useRef(null)
  const mouseDownRef = useRef(false)
  const [linkUrl, setLinkUrl] = useState('')
  const [isEditMode, setEditMode] = useState(false)
  const [lastSelection, setLastSelection] = useState(null)

  const updateLinkEditor = useCallback(() => {
    const selection = $getSelection()
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection)
      const parent = node.getParent()
      if ($isLinkNode(parent)) {
        setLinkUrl(parent.getURL())
      } else if ($isLinkNode(node)) {
        setLinkUrl(node.getURL())
      } else {
        setLinkUrl('')
      }
    }
    const editorElem = editorRef.current
    const nativeSelection = window.getSelection()
    const activeElement = document.activeElement

    if (editorElem === null) {
      return
    }

    const rootElement = editor.getRootElement()
    if (
      selection !== null &&
      !nativeSelection.isCollapsed &&
      rootElement !== null &&
      rootElement.contains(nativeSelection.anchorNode)
    ) {
      const domRange = nativeSelection.getRangeAt(0)
      let rect
      if (nativeSelection.anchorNode === rootElement) {
        let inner = rootElement
        while (inner.firstElementChild != null) {
          inner = inner.firstElementChild
        }
        rect = inner.getBoundingClientRect()
      } else {
        rect = domRange.getBoundingClientRect()
      }

      if (!mouseDownRef.current) {
        positionEditorElement(editorElem, rect)
      }
      setLastSelection(selection)
    } else if (!activeElement || activeElement.className !== 'link-input') {
      positionEditorElement(editorElem, null)
      setLastSelection(null)
      setEditMode(false)
      setLinkUrl('')
    }

    return true
  }, [editor])

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateLinkEditor()
        })
      }),

      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateLinkEditor()
          return true
        },
        LowPriority
      )
    )
  }, [editor, updateLinkEditor])

  useEffect(() => {
    editor.getEditorState().read(() => {
      updateLinkEditor()
    })
  }, [editor, updateLinkEditor])

  useEffect(() => {
    if (isEditMode && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditMode])

  return (
    <div
      ref={editorRef}
      className="absolute bg-white shadow max-w-xs w-full rounded-lg px-3 py-2"
    >
      {isEditMode ? (
        <input
          ref={inputRef}
          className="block w-full px-3 py-2 bg-slate-400 text-base rounded-2xl relative  border-none outline-none"
          value={linkUrl}
          onChange={(event) => {
            setLinkUrl(event.target.value)
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault()
              if (lastSelection !== null) {
                if (linkUrl !== '') {
                  editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkUrl)
                }
                setEditMode(false)
              }
            } else if (event.key === 'Escape') {
              event.preventDefault()
              setEditMode(false)
            }
          }}
        />
      ) : (
        <>
          <div className="block w-full px-3 py-2 bg-slate-400 text-base rounded-2xl relative">
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
              {linkUrl}
            </a>
            <div
              className="absolute right-0 top-0 bottom-0 cursor-pointer w-9 flex items-center justify-center"
              role="button"
              tabIndex={0}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => {
                setEditMode(true)
              }}
            >
              <MdEdit />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

function Select({ onChange, className, options, value }) {
  return (
    <select className={className} onChange={onChange} value={value}>
      <option hidden={true} value="" />
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

function getSelectedNode(selection) {
  const anchor = selection.anchor
  const focus = selection.focus
  const anchorNode = selection.anchor.getNode()
  const focusNode = selection.focus.getNode()
  if (anchorNode === focusNode) {
    return anchorNode
  }
  const isBackward = selection.isBackward()
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode
  } else {
    return $isAtNodeEnd(anchor) ? focusNode : anchorNode
  }
}

function BlockOptionsDropdownList({ editor, blockType }) {
  const handleFormate = (formatType, handler, unHandler) => {
    const specialBlockType = ['ul', 'ol']
    if (blockType !== formatType) {
      // ol ul 特殊处理
      if (specialBlockType.includes(formatType)) {
        handler?.(editor)
      } else {
        editor.update(() => {
          const selection = $getSelection()

          if ($isRangeSelection(selection)) {
            $wrapNodes(selection, handler)
          }
        })
      }
    } else {
      if (specialBlockType.includes(formatType)) {
        unHandler?.(editor)
      }
    }
  }

  const currentBlockButton = useMemo(() => {
    return blockTypeMap[blockType]
  }, [blockType])

  return (
    <div className="dropdown dropdown--hoverable">
      <button
        className="button button--secondary px-2 mr-4 flex items-center justify-between w-36"
        data-toggle="dropdown"
      >
        <span className="flex-1 flex items-center whitespace-nowrap text-ellipsis overflow-hidden mr-1">
          {currentBlockButton.icon}
          <span className="ml-2">{currentBlockButton.text}</span>
        </span>
        <BsChevronDown />
      </button>
      <ul className="dropdown__menu">
        {Object.entries(blockTypeMap).map(
          // @ts-ignore
          ([formatBlockType, { icon, text, handler, unHandler }]) => (
            <li key={formatBlockType} className="w-full">
              <button
                className="button button--secondary bg-transparent w-full text-left border-none px-2 flex items-center hover:bg-slate-400 hover:text-white dark:text-white"
                onClick={() =>
                  handleFormate(formatBlockType, handler, unHandler)
                }
              >
                {icon}
                <span className="ml-2">{text}</span>
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext()
  const toolbarRef = useRef(null)
  const [blockType, setBlockType] = useState('paragraph')
  const [selectedElementKey, setSelectedElementKey] = useState(null)
  const [codeLanguage, setCodeLanguage] = useState('')
  const [isLink, setIsLink] = useState(false)
  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [isStrikethrough, setIsStrikethrough] = useState(false)
  const [isCode, setIsCode] = useState(false)

  const updateToolbar = useCallback(() => {
    const selection = $getSelection()
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode()
      const element =
        anchorNode.getKey() === 'root'
          ? anchorNode
          : anchorNode.getTopLevelElementOrThrow()
      const elementKey = element.getKey()
      const elementDOM = editor.getElementByKey(elementKey)
      if (elementDOM !== null) {
        setSelectedElementKey(elementKey)
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode)
          const type = parentList ? parentList.getTag() : element.getTag()
          setBlockType(type)
        } else {
          const type = $isHeadingNode(element)
            ? element.getTag()
            : element.getType()
          setBlockType(type)
          if ($isCodeNode(element)) {
            setCodeLanguage(element.getLanguage() || getDefaultCodeLanguage())
          }
        }
      }
      // Update text format
      setIsBold(selection.hasFormat('bold'))
      setIsItalic(selection.hasFormat('italic'))
      setIsUnderline(selection.hasFormat('underline'))
      setIsStrikethrough(selection.hasFormat('strikethrough'))
      setIsCode(selection.hasFormat('code'))

      // Update links
      const node = getSelectedNode(selection)
      const parent = node.getParent()
      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true)
      } else {
        setIsLink(false)
      }
    }
  }, [editor])

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar()
        })
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, newEditor) => {
          updateToolbar()
          return false
        },
        LowPriority
      )
    )
  }, [editor, updateToolbar])

  const codeLanguges = useMemo(() => getCodeLanguages(), [])
  const onCodeLanguageSelect = useCallback(
    (e) => {
      editor.update(() => {
        if (selectedElementKey !== null) {
          const node = $getNodeByKey(selectedElementKey)
          if ($isCodeNode(node)) {
            node.setLanguage(e.target.value)
          }
        }
      })
    },
    [editor, selectedElementKey]
  )

  const insertLink = useCallback(() => {
    if (!isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, 'https://')
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null)
    }
  }, [editor, isLink])

  return (
    <div className="toolbar flex items-center p-4 shadow" ref={toolbarRef}>
      {supportedBlockTypes.has(blockType) && (
        <BlockOptionsDropdownList editor={editor} blockType={blockType} />
      )}
      {blockType === 'code' ? (
        <Select
          className="button button--outline button--secondary appearance-none"
          onChange={onCodeLanguageSelect}
          options={codeLanguges}
          value={codeLanguage}
        />
      ) : (
        <>
          {Object.entries(actionTypeMap).map(
            // @ts-ignore
            ([actionType, { icon, onClick }]) => (
              <button
                className="button button--secondary px-2 mr-4 flex items-center"
                key={actionType}
                aria-label={`Format ${actionType}`}
                onClick={() => {
                  actionType === 'link' ? insertLink() : onClick?.(editor)
                }}
              >
                {icon}
              </button>
            )
          )}
          {isLink &&
            createPortal(<FloatingLinkEditor editor={editor} />, document.body)}
        </>
      )}
    </div>
  )
}
