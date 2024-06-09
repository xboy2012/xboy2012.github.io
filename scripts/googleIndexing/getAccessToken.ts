import { getJwtToken } from './getJwtToken';

export const getAccessToken = async (key: {
  client_email: string;
  private_key: string;
}): Promise<string> => {
  const { client_email, private_key } = key;

  const jwtToken = getJwtToken({
    client_email,
    private_key,
    expires: 60 * 60, // expires in 60 minutes
    scopes: [
      'https://www.googleapis.com/auth/webmasters.readonly',
      'https://www.googleapis.com/auth/indexing',
    ],
  });

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwtToken,
    }),
  });

  const data = await response.json();
  const accessToken = data?.access_token;
  if (!accessToken) {
    throw Error('Failed to get Access Token');
  }
  return accessToken;
};
