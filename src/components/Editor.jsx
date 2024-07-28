import React, { useState } from 'react'
import MonacoEditor from '@monaco-editor/react'
function Editor() {
    const [code,setCode] = useState("//Start typing your code here...")
  return (
      <MonacoEditor
        defaultLanguage='javascript'
        defaultValue={code}
        onChange={(value) => setCode(value)}
        theme='vs-dark'
       />
  )
}

export default Editor