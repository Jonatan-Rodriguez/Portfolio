import './ConnectButton.css'

export function ConnectButton({ className = '' }: { className?: string }) {
  return (
    <a 
      href="mailto:jonatarodriguez1998@gmail.com" 
      className={`connect-btn ${className}`}
    >
      <div className="connect-btn__line"></div>
      <div className="connect-btn__line"></div>
      <span className="connect-btn__text">CONTACTAME</span>
      <div className="connect-btn__drow1"></div>
      <div className="connect-btn__drow2"></div>
    </a>
  )
}