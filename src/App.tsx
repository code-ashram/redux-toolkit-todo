import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher.tsx'

import './App.scss'

export const App = () => {

  return (
    <>
      <ThemeSwitcher />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default App
