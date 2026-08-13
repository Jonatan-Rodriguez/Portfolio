export const NAME_PATTERN = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]{2,60}$/
export const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const MESSAGE_MIN_LENGTH = 10
export const MESSAGE_MAX_LENGTH = 800

export function isValidName(value: string) {
  return NAME_PATTERN.test(value.trim())
}

export function isValidEmail(value: string) {
  return EMAIL_PATTERN.test(value.trim())
}

export function isValidMessage(value: string) {
  const length = value.trim().length
  return length >= MESSAGE_MIN_LENGTH && length <= MESSAGE_MAX_LENGTH
}