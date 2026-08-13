import { useState } from 'react'
import './ConnectButton.css'
import { ContactModal } from '../../contact/ContactModal'

export function ConnectButton({ className = '' }: { className?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={`connect-btn ${className}`}>
        <div className="connect-btn__line"></div>
        <div className="connect-btn__line"></div>
        <span className="connect-btn__text">CONTACTAME</span>
        <div className="connect-btn__drow1"></div>
        <div className="connect-btn__drow2"></div>
      </button>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}