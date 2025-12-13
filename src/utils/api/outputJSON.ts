import type { JsonSerializable } from '../../types';
import { stableJsonStringify } from '../stableJsonStringify';
import { calculateDataHash } from './calculateDataHash';

export const outputJSON = <T extends JsonSerializable>(data: T) => {
  const hash = calculateDataHash(data);
  const json = stableJsonStringify({ hash, data });
  return new Response(json, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
