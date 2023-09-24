import { useState } from 'react'


import Auth from './components/auth'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Auth />
    </>
  )
}

export default App
