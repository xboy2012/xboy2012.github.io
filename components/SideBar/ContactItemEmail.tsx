import { MailOutline } from '../Icons/MailOutline';
import { EmailRender } from './EmailRender';
import { ContactItem } from './ContactItem';
import { userData } from '../../src/data';

export const ContactItemEmail = () => {
  const { email } = userData;
  if (!email) {
    return null;
  }

  return (
    <ContactItem Icon={MailOutline} title="Email">
      <EmailRender email={email} />
    </ContactItem>
  );
};
