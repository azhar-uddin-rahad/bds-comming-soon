import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FlashSale from './Component/FlashSale'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FlashSale></FlashSale>
     
    </>
  )
}

export default App
