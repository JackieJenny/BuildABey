import React from 'react'

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Error loading model:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-white p-4 bg-red-600 rounded">
          Failed to load model.
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
