import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <h3>Hello</h3>
    </div>
  </StrictMode>,
)
