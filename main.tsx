/* eslint-disable no-relative-import-paths/no-relative-import-paths */
import './globals.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app'

// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
