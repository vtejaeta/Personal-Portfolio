import emailjs from "emailjs-com"

export function isEmailValid(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export async function sendEmail({ subject, username, email, message }) {
  let response, errorMessage

  try {
    response = await emailjs.send(
      "default_service",
      "template_yxx45fm",
      { subject, username, email, message },
      "user_lAOwNk4jaXBkaKWAiWGur"
    )
  } catch (error) {
    errorMessage = error
  }

  return { errorMessage, response }
}
