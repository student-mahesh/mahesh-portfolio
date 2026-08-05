import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // Surface the real error in the console instead of failing silently.
    console.error('ErrorBoundary caught an error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="section-shell py-16 text-center">
          <p className="font-mono-alt text-sm text-red-400">
            Something failed to render in this section.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-4 text-sm text-[var(--color-primary)] underline"
          >
            Try again
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
