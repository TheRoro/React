import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

function App() {
  const [text, setText] = useLocalStorage('text', '')

  return (
    <>
      <textarea
        onChange={e => setText(e.target.value)}
        value={text}
        placeholder="What's happening?" />
      <button>Tweet</button>
    </>
  );
}

export default App;
