import { PhonePortraitOutline } from '../Icons/PhonePortraitOutline';
import { PhoneRender } from './PhoneRender';
import { ContactItem } from './ContactItem';
import { userData } from '../../src/data';

export const ContactItemPhone = () => {
  const { phoneCA } = userData;
  if (!phoneCA) {
    return null;
  }

  return (
    <ContactItem Icon={PhonePortraitOutline} title="Phone">
      <PhoneRender phoneCA={phoneCA} />
    </ContactItem>
  );
};
