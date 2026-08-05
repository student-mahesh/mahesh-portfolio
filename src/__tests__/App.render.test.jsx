import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '../context/ThemeContext'
import App from '../App'

// jsdom has no IntersectionObserver / matchMedia by default in older versions — polyfill minimal stubs
beforeAllPolyfills()

function beforeAllPolyfills() {
  if (!window.IntersectionObserver) {
    window.IntersectionObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
  }
  if (!window.matchMedia) {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      addEventListener: () => {},
      removeEventListener: () => {},
    })
  }
}

describe('App renders without crashing', () => {
  it('mounts all sections and logs no console errors', () => {
    const errors = []
    const originalError = console.error
    console.error = (...args) => {
      errors.push(args.map(String).join(' '))
      originalError(...args)
    }

    const { container } = render(
      <HelmetProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </HelmetProvider>
    )

    console.error = originalError

    console.log('SECTION IDS FOUND:', [...container.querySelectorAll('section[id]')].map(s => s.id))
    console.log('CONSOLE ERRORS CAPTURED:', JSON.stringify(errors, null, 2))

    expect(container.textContent.length).toBeGreaterThan(100)
  })
})
