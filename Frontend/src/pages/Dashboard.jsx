import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authAPI } from '../services/api'
import './Dashboard.css'

function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      const token = authAPI.getToken()
      if (!token) {
        navigate('/login')
        return
      }

      try {
        const userData = await authAPI.getMe(token)
        setUser(userData)
      } catch (err) {
        authAPI.removeToken()
        navigate('/login')
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [navigate])

  const handleLogout = () => {
    authAPI.removeToken()
    navigate('/login')
  }

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="dashboard-header-container">
          <Link to="/" className="logo">
            <span className="logo-icon">🍄</span>
            <span className="logo-text">Smart Mushroom AI</span>
          </Link>
          <div className="user-menu">
            <span className="user-name">{user?.full_name || user?.email}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-container">
          <h1>Welcome to Dashboard</h1>
          <p className="dashboard-subtitle">Hello, {user?.full_name || user?.email}!</p>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🍄</div>
              <div className="stat-info">
                <span className="stat-value">1,248</span>
                <span className="stat-label">Total Yield (kg)</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🌡️</div>
              <div className="stat-info">
                <span className="stat-value">24.5°C</span>
                <span className="stat-label">Avg Temperature</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💧</div>
              <div className="stat-info">
                <span className="stat-value">88%</span>
                <span className="stat-label">Humidity Level</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📷</div>
              <div className="stat-info">
                <span className="stat-value">12</span>
                <span className="stat-label">Active Cameras</span>
              </div>
            </div>
          </div>

          <div className="dashboard-content">
            <div className="content-card">
              <h2>Growth Monitoring</h2>
              <p>Your mushroom cultivation system is running smoothly. All sensors are operational.</p>
              <div className="status-badge success">System Online</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
