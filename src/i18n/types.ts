export interface Translations {
  nav: {
    home: string
    about: string
    formacion: string
    proyectos: string
    experiencia: string
    contacto: string
  }
  connectButton: {
    cta: string
  }
  hero: {
    developerWords: [string, string]
    ariaRole: string
    role: string
    study: string
    greeting: string
  }
  about: {
    eyebrow: string
    title: string
    bioGreeting: string
    bioAmVerb: string
    bioSince: string
    bioCombining: string
    bioFocus: string
    and: string
    downloadCv: string
    toolsTitle: string
  }
  education: {
    eyebrow: string
    title: string
  }
  work: {
    eyebrow: string
    title: string
    desc1: string
    highlight: string
    desc2: string
    demoBtn: string
    repoBtn: string
  }
  experience: {
    eyebrow: string
    title: string
  }
  contact: {
    headingPart1: string // "¿Interesado en "
    headingHighlight: string // "trabajar juntos"
    headingPart2: string // "?"
  }
  contactForm: {
    nameLabel: string
    namePlaceholder: string
    nameError: string
    emailLabel: string
    emailPlaceholder: string
    emailError: string
    messageLabel: string
    messagePlaceholder: string
    messageError: (max: number) => string // Función para inyectar el número dinámico
    submitSending: string
    submitReady: string
    successMsg: string
    errorMsg: string
    socialText: string
  }
}