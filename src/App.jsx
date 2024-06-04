import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainLayout from './components/layouts/MainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <div className='flex flex-col gap-4 justify-center items-center text-center h-full p-12'>
        <img src={reactLogo} alt="React logo" />
        <h1 className="text-3xl font-bold">Hello Vite + React!</h1>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <button className='btn' onClick={() => setCount((count) => count + 1)}>count is: {count}</button>
        <div className='flex flex-col justify-center items-center mt-4'>
          <img src={viteLogo} alt="Vite logo" />
          <p>
            <a href="https://vitejs.dev/guide/features.html" target="_blank">
              <p>Learn more about Vite</p>
              <code>vitejs.dev</code>
            </a>
          </p>
          <p>
            or
          </p>
          <p>
            <a href="https://github.com/vitejs/vite" target="_blank">
              <code>GitHub</code>
            </a>
          </p>
        </div>
      </div>
    </MainLayout>
  )
}

export default App
