// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'qbasdfm88e'
const env = 'dev'

export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/${env}`

export const authConfig = {
  domain: 'dev-clq116aa.auth0.com',
  clientId: 'j89rVwvRORYSRJbXWAGRCWk25TeB8FdO',
  callbackUrl: 'http://localhost:3000/callback'
}