'use client';

import Link from 'next/link';
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
          <Link className="text-orangeYellowCrayola" href="/">
            Home Page
          </Link>{' '}
          for other pages.
        </p>
      </div>
    </Article>
  );
};
