import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { HeroUIProvider } from '@heroui/react'

import App from './App.tsx'

import todoStore from './store/todoStore.ts'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <Provider store={todoStore}>
        <App />
      </Provider>
    </HeroUIProvider>
  </StrictMode>,
)
