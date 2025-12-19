import React from 'react';
import { reportError } from '../../lib/errorHandler';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error?.message || 'Something went wrong',
    };
  }

  componentDidCatch(error, info) {
    reportError(error);
    console.error('[ErrorBoundary] caught', error, info);
  }

  handleReload = () => {
    this.setState({ hasError: false, message: '' });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: 8 }}>Something went wrong.</h2>
            <div style={{ marginBottom: 12, color: '#777' }}>
              {this.state.message}
            </div>
            <div>
              <button
                onClick={this.handleReload}
                style={{ marginRight: 8, padding: '8px 12px' }}
              >
                Reload
              </button>
              <a href="/" style={{ padding: '8px 12px' }}>
                Home
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
