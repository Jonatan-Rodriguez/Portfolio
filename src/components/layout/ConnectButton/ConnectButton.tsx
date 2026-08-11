import './ConnectButton.css'

export function ConnectButton({ className = '' }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center w-[175px] h-[39px] ${className}`}>
      <a 
        href="mailto:jonatarodriguez1998@gmail.com" 
        className="connect-btn absolute scale-[0.7]"
      >
        <div className="connect-btn__line"></div>
        <div className="connect-btn__line"></div>
        <span className="connect-btn__text">CONTACTAME</span>
        <div className="connect-btn__drow1"></div>
        <div className="connect-btn__drow2"></div>
      </a>
    </div>
  )
}