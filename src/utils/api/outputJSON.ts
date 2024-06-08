import { stableJsonStringify } from '../stableJsonStringify';
import { calculateDataHash } from './calculateDataHash';

export const outputJSON = (data: unknown) => {
  const hash = calculateDataHash(data);
  const json = stableJsonStringify({ hash, data });
  return new Response(json, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
