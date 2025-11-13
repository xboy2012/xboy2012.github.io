import { cx } from '../../src/utils/cx';
import { getGoogleMapUrl } from '../../src/utils/getGoogleMapUrl';

export const LocationRender = ({ location }: { location: string }) => {
  return (
    <a
      className={cx('block text-3.5 font-300 md:text-4', '2xl:truncate')}
      href={getGoogleMapUrl(location)}
      target="_blank"
      rel="noreferrer noopener"
    >
      <address className="not-italic">{location}</address>
    </a>
  );
};
