import { cx } from '../../src/utils/cx';
import { getGoogleMapUrl } from '../../src/utils/getGoogleMapUrl';

export const LocationRender = ({ location }: { location: string }) => {
  return (
    <a
      className={cx(
        'block text-[13px] md:text-[15px] 2xl:text-[14px]',
        '2xl:whitespace-nowrap 2xl:overflow-hidden 2xl:text-ellipsis 2xl:font-300',
      )}
      href={getGoogleMapUrl(location)}
      target="_blank"
    >
      <address className="not-italic">{location}</address>
    </a>
  );
};
