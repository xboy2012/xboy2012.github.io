import { cx } from '../../src/utils/cx';
import { getGoogleMapUrl } from '../../src/utils/getGoogleMapUrl';

export const LocationRender = ({ location }: { location: string }) => {
  return (
    <a
      className={cx(
        'block text-3.5 md:text-4 font-300',
        '2xl:whitespace-nowrap 2xl:overflow-hidden 2xl:text-ellipsis',
      )}
      href={getGoogleMapUrl(location)}
      target="_blank"
      rel="noreferrer noopener"
    >
      <address className="not-italic">{location}</address>
    </a>
  );
};
