import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authAPI } from '../services/api'
import './LoginPage.css'

function LoginPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('login')
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [rememberDevice, setRememberDevice] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      if (activeTab === 'login') {
        const data = await authAPI.login(email, password)
        authAPI.saveToken(data.access_token)
        setSuccess('Login successful!')
        setTimeout(() => navigate('/dashboard'), 1000)
      } else {
        await authAPI.register(email, password, fullName)
        setSuccess('Registration successful! Please login.')
        setActiveTab('login')
        setPassword('')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      {/* Header */}
      <header className="login-header">
        <div className="login-header-container">
          <Link to="/" className="logo">
            <span className="logo-text">Smart Mushroom <span className="text-green">AI</span></span>
          </Link>
        </div>
      </header>

      {/* Login Card */}
      <main className="login-main">
        <div className="login-card">
          <h1>{activeTab === 'login' ? 'Welcome Back' : 'Create Account'}</h1>
          <p className="login-subtitle">Monitor your growth cycle in real-time</p>

          {/* Tabs */}
          <div className="login-tabs">
            <button 
              className={`tab ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => { setActiveTab('login'); setError(''); setSuccess(''); }}
            >
              Login
            </button>
            <button 
              className={`tab ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => { setActiveTab('register'); setError(''); setSuccess(''); }}
            >
              Register
            </button>
          </div>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <form onSubmit={handleSubmit}>
            {/* Full Name Field - Only for Register */}
            {activeTab === 'register' && (
              <div className="form-group">
                <label>FULL NAME</label>
                <div className="input-wrapper">
                  <span className="input-icon">👤</span>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="form-group">
              <label>EMAIL ADDRESS</label>
              <div className="input-wrapper">
                <span className="input-icon">✉️</span>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-group">
              <div className="label-row">
                <label>PASSWORD</label>
                {activeTab === 'login' && <a href="#" className="forgot-link">Forgot Password?</a>}
              </div>
              <div className="input-wrapper">
                <span className="input-icon">🔒</span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Remember Device - Only for Login */}
            {activeTab === 'login' && (
              <div className="remember-row">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={rememberDevice}
                    onChange={(e) => setRememberDevice(e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  Remember this device
                </label>
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Please wait...' : (activeTab === 'login' ? 'Sign In to Dashboard' : 'Create Account')} <span>→</span>
            </button>
          </form>

          {/* Terms */}
          <p className="terms-text">
            By signing in, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="login-footer">
        <div className="login-footer-container">
          <div className="footer-left"><center>
            <span>© 2024 Smart Mushroom AI Labs</span></center>
            <span className="separator">•</span>
            <span>v2.4.0-stable</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LoginPage
