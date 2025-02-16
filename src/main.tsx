import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { HeroUIProvider } from '@heroui/react'

import App from './App.tsx'

import store from './store/store.ts'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HeroUIProvider>
  </StrictMode>,
)
