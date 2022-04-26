import { OAuth2Client } from 'google-auth-library'

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

async function googleVerify (googleToken: string = '') {
  const ticket = await client.verifyIdToken({
    idToken: googleToken,
    audience: process.env.GOOGLE_CLIENT_ID
  })

  const { name, picture, email } = ticket.getPayload() || {}
  // const { name, picture, email } = { ...ticket.getPayload() }

  return {
    name,
    picture,
    mail: email
  }
}

export {
  googleVerify
}
