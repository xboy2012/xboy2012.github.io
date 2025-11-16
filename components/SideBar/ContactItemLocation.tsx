import { useMemo } from 'react';
import { LocationOutline } from '../Icons/LocationOutline';
import { LocationRender } from './LocationRender';
import { ContactItem } from './ContactItem';
import { userData } from '../../src/data';

export const ContactItemLocation = () => {
  const location = useMemo(() => {
    const { city, province, country } = userData.location;
    return `${city}, ${province}, ${country}`;
  }, []);

  return (
    <ContactItem Icon={LocationOutline} title="Location">
      <LocationRender location={location} />
    </ContactItem>
  );
};
