import { cx } from '../../src/utils/cx';
import { getGoogleMapUrl } from '../../src/utils/getGoogleMapUrl';

export const LocationRender = ({ location }: { location: string }) => {
  return (
    <a
      className={cx(
        'block text-7 font-300',
        '2xl:whitespace-nowrap 2xl:overflow-hidden 2xl:text-ellipsis',
      )}
      href={getGoogleMapUrl(location)}
      target="_blank"
    >
      <address className="not-italic">{location}</address>
    </a>
  );
};
