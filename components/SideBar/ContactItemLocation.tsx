import { LocationOutline } from '../Icons/LocationOutline';
import { LocationRender } from './LocationRender';
import { ContactItem } from './ContactItem';
import { userData } from '../../src/data';

export const ContactItemLocation = () => {
  const { location } = userData;
  if (!location) {
    return null;
  }

  return (
    <ContactItem Icon={LocationOutline} title="Location">
      <LocationRender location={location} />
    </ContactItem>
  );
};
