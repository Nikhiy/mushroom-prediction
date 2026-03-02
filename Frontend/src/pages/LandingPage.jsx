import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  const features = [
    {
      icon: "📷",
      title: "Image-Based Detection",
      description: "Real-time visual identification of growth stages using computer vision."
    },
    {
      icon: "📡",
      title: "Continuous Tracking",
      description: "24/7 monitoring of your entire cultivation facility from anywhere."
    },
    {
      icon: "📈",
      title: "Harvest Prediction",
      description: "AI-driven forecasts for optimal harvest timing to maximize shelf life."
    },
    {
      icon: "🌡️",
      title: "Environmental Monitoring",
      description: "Precise telemetry for temperature, humidity, and CO2 levels."
    },
    {
      icon: "📊",
      title: "Smart Analytics",
      description: "Deep data insights to optimize substrate mix and crop rotation."
    }
  ]

  const steps = [
    { icon: "📹", title: "Capture", description: "Sync high-res cameras with our cloud platform." },
    { icon: "🧠", title: "AI Analysis", description: "Neural networks process every frame for anomalies." },
    { icon: "📉", title: "Growth Modeling", description: "Predictive algorithms map the future growth curve." },
    { icon: "🍄", title: "Smart Harvest", description: "Collect your yield at the peak of maturity." }
  ]

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <span className="logo-icon">🍄</span>
            <span className="logo-text">Smart Mushroom AI</span>
          </div>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#dashboard">Dashboard</a>
            <a href="#pricing">Pricing</a>
          </nav>
          <div className="header-actions">
            <Link to="/login" className="btn-text">Login</Link>
            <Link to="/login" className="btn-primary">Get Started</Link>
          </div>
        </div>
      </header>


      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Revolutionizing<br />
              <span className="text-gradient">Mushroom<br />Cultivation</span><br />
              with AI
            </h1>
            <p className="hero-description">
              Empowering high-tech agriculture with real-time oyster mushroom growth monitoring and predictive analytics. Maximize yield, minimize waste.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary btn-large">
                Get Started <span>→</span>
              </button>
              <button className="btn-outline btn-large">View Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="features" id="features">
        <div className="section-container">
          <h2 className="section-title">Core Features</h2>
          <p className="section-subtitle">
            Advanced tools designed for the modern mushroom farmer. Leverage precision agriculture to scale your production.
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works">
        <div className="section-container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="dashboard-preview" id="dashboard">
        <div className="dashboard-container">
          <div className="dashboard-content">
            <h2>Your Farm,<br />At a Glance</h2>
            <p>
              Our unified dashboard brings all your cultivation data into one view. Monitor thousands of mushroom bags simultaneously.
            </p>
            <ul className="benefits-list">
              <li><span className="check">✓</span> 25% Increase in Yield Efficiency</li>
              <li><span className="check">✓</span> 60% Reduced Manual Monitoring</li>
              <li><span className="check">✓</span> Automated Alerts & Notifications</li>
            </ul>
          </div>
          <div className="dashboard-visual">
            <div className="dashboard-card">
              <div className="dashboard-header">
                <span className="dashboard-badge">DASHBOARD OVERVIEW</span>
                <span className="dashboard-status">Real-time Streams Active</span>
                <div className="dashboard-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
              </div>
              <div className="metrics-row">
                <div className="metric">
                  <span className="metric-label">TOTAL YIELD FORECAST</span>
                  <span className="metric-value">1,248 kg</span>
                  <span className="metric-change positive">↗ +12% vs last cycle</span>
                </div>
                <div className="metric">
                  <span className="metric-label">AVG. TEMPERATURE</span>
                  <span className="metric-value">24.5°C</span>
                  <span className="metric-status optimal">✓ Optimal Range</span>
                </div>
                <div className="metric">
                  <span className="metric-label">HUMIDITY LEVEL</span>
                  <span className="metric-value">88%</span>
                  <span className="metric-status warning">⚠ Near Threshold</span>
                </div>
              </div>
              <div className="chart-area">
                <div className="chart-placeholder">
                  <svg viewBox="0 0 200 80" className="chart-line">
                    <polyline
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2"
                      points="0,60 30,55 60,40 90,45 120,30 150,35 180,20 200,25"
                    />
                  </svg>
                </div>
                <span className="chart-label">PHASE: PINNING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="section-container">
          <h2>Transform Your Farm Today</h2>
          <p>Join 500+ commercial mushroom cultivators using Smart Mushroom AI to automate their growth cycles.</p>
          <div className="cta-buttons">
            <button className="btn-primary btn-large">Start Your Free Trial</button>
            <button className="btn-outline btn-large">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <span className="logo-icon">🍄</span>
            <span className="logo-text">Smart Mushroom AI</span>
          </div>
          <nav className="footer-nav">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
            <a href="#">Documentation</a>
          </nav>
          <p className="copyright">© 2026 Smart Mushroom AI Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
