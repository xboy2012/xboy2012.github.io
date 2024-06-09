import { createSign } from 'node:crypto';
import { base64urlEncode } from './base64urlEncode';

export const getJwtToken = ({
  client_email,
  private_key,
  scopes,
  expires,
}: {
  client_email: string;
  private_key: string;
  scopes: string[];
  expires: number;
}) => {
  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: client_email,
    scope: scopes.join(' '),
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + expires, // 1小时后过期
    iat: now,
  };

  const encodedHeader = base64urlEncode(header, 'binary');
  const encodedPayload = base64urlEncode(payload, 'utf8');
  const signatureInput = `${encodedHeader}.${encodedPayload}`;

  const sign = createSign('RSA-SHA256');
  sign.update(signatureInput);
  sign.end();
  const signature = sign
    .sign(private_key, 'base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  return `${signatureInput}.${signature}`;
};
