import { google } from 'googleapis';

export const getAccessToken = async (key: {
  client_email: string;
  private_key: string;
}): Promise<string> => {
  const jwtClient = new google.auth.JWT({
    email: key.client_email,
    key: key.private_key,
    scopes: [
      'https://www.googleapis.com/auth/webmasters.readonly',
      'https://www.googleapis.com/auth/indexing',
    ],
  });

  const tokens = await jwtClient.authorize();
  const accessToken = tokens.access_token;
  if (!accessToken) {
    throw Error('Failed to get Access Token');
  }
  return accessToken;
};
