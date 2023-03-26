import { useState, ReactDOM } from 'react'
import { createRoot } from 'react-dom/client'
import FailMessage from './fail.jsx'

export default function (message, closeTime = 3000) {
  const container = document.createElement('div')
  container.className = 'toast-wrapper z-50'
  document.body.appendChild(container)
  const root = createRoot(container)
  // setTimeout(() => {
  //   // ReactDOM.unmountComponentAtNode(container)
  //   document.body.removeChild(container)
  // }, closeTime)
  return root.render(<FailMessage errList={message?.split('\n')} />, container)
}

