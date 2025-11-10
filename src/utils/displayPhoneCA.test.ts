import { displayPhoneCA } from './displayPhoneCA';

describe('displayPhoneCA', () => {
  it('should display Canadian phone number in the correct format', () => {
    const phoneNumber = '+1234567890';
    const formattedNumber = displayPhoneCA(phoneNumber);
    expect(formattedNumber).toBe('+1(234)567-890');
  });
});
