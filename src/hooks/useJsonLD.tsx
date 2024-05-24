import { useServerInsertedHTML } from 'next/navigation';
import { useRef } from 'react';
import type { Thing } from 'schema-dts';

const useJsonLD_Client = () => {
  // DO NOTHING
};

const useJsonLD_Server = <T extends Thing>(
  getJson: () => T | null | undefined,
) => {
  // @see https://github.com/vercel/next.js/discussions/49354#discussioncomment-6279917
  const isServerInserted = useRef(false);
  useServerInsertedHTML(() => {
    /* istanbul ignore if */
    if (isServerInserted.current) {
      return;
    }
    isServerInserted.current = true;
    const json = getJson();
    if (!json) {
      return;
    }
    const withContext = Object.assign(
      { '@context': 'https://schema.org' },
      json,
    );
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(withContext) }}
      />
    );
  });
};

export const useJsonLD =
  typeof window === 'undefined' ? useJsonLD_Server : useJsonLD_Client;
