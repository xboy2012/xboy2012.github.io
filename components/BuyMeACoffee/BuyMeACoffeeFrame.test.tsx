import { render } from '@testing-library/react';
import { BuyMeACoffeeFrame } from './BuyMeACoffeeFrame';
import { getBuyMeACoffeeFrameUrl } from './getBuyMeACoffeeFrameUrl';

jest.mock('./getBuyMeACoffeeFrameUrl', () => ({
  getBuyMeACoffeeFrameUrl: jest.fn(() => 'BuyMeACoffeeFrameUrl'),
}));

describe('BuyMeACoffeeFrame', () => {
  it('renders without crashing', () => {
    const account = 'test';
    const color = '#000000';
    const className = 'testClassName';
    const { container } = render(
      <BuyMeACoffeeFrame
        account={account}
        color={color}
        className={className}
      />,
    );

    expect(getBuyMeACoffeeFrameUrl).toHaveBeenCalledWith({ account, color });

    const iframe = container.querySelector('iframe');

    expect(iframe).toHaveAttribute('src', 'BuyMeACoffeeFrameUrl');
    expect(iframe).toHaveClass(className);
  });
});
