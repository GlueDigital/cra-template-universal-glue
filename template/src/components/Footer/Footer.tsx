import logo from '@static/vectors/logo-white.svg'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="colophon">
      <div className="container">
        <img src={logo} alt="glue logo" />
        <span>&copy; 2025</span>
      </div>
    </footer>
  )
}

export default Footer
