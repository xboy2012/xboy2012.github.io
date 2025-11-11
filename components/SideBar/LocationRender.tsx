import { cx } from '../../src/utils/cx';
import { getGoogleMapUrl } from '../../src/utils/getGoogleMapUrl';

export const LocationRender = ({ location }: { location: string }) => {
  return (
    <a
      className={cx('text-3.5 md:text-4 font-300 block', '2xl:truncate')}
      href={getGoogleMapUrl(location)}
      target="_blank"
      rel="noreferrer noopener"
    >
      <address className="not-italic">{location}</address>
    </a>
  );
};
