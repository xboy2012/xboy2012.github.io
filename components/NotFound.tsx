'use client';

import { Article } from './Article';
import { useFixPageUrl } from '../src/hooks/useFixPageUrl';
import { ArticleTitle } from './ArticleTitle';

export const NotFound = () => {
  const status = useFixPageUrl();

  if (status !== 'ok') {
    return <Article />;
  }

  return (
    <Article>
      <ArticleTitle title="404 Not Found" />
      <div className="text-xl">
        <p className="mb-3">Could not find requested resource.</p>
        <p>
          Please go to{' '}
          <a className="text-orangeYellowCrayola" href="/">
            Home Page
          </a>{' '}
          for other pages.
        </p>
      </div>
    </Article>
  );
};
