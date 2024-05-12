import type { ReactNode } from 'react';
import { NO_JS_CLASS_NAME } from '../noJs';

export type UseNoJsFn = () => {
  noJsClassName: string;
  noJsScript: ReactNode;
};

const useNoJsServer: UseNoJsFn = () => {
  // When the hook runs in server, we should prepare className and script,
  // in case javascript is disabled by the client browser.
  return {
    noJsClassName: NO_JS_CLASS_NAME,
    noJsScript: (
      <script
        dangerouslySetInnerHTML={{
          // if javascript is enabled, remove no-js class IMMEDIATELY!
          __html: `document.documentElement.classList.remove('${NO_JS_CLASS_NAME}');`,
        }}
      />
    ),
  };
};

const useNoJsClient: UseNoJsFn = () => {
  // When the hook runs in the client, it also means javascript is already enabled
  // no extra className or script should be applied.
  return {
    noJsClassName: '',
    noJsScript: null,
  };
};

export const useNoJs: UseNoJsFn =
  typeof window === 'undefined' ? useNoJsServer : useNoJsClient;
