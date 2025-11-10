import type { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { BuyMeACoffee } from '.';

jest.mock('./BuyMeACoffeeButton', () => ({
  BuyMeACoffeeButton: () => <button>BuyMeACoffeeButton</button>,
}));

jest.mock('./BuyMeACoffeeDialog', () => ({
  BuyMeACoffeeDialog: () => <div>BuyMeACoffeeDialog</div>,
}));

jest.mock('./BuyMeACoffeeContext', () => ({
  BuyMeACoffeeProvider: ({ children }: { children: ReactNode }) => {
    return <>{children}</>;
  },
}));

describe('BuyMeACoffee', () => {
  it('should render correctly', () => {
    render(<BuyMeACoffee />);
    expect(screen.getByText('BuyMeACoffeeButton')).toBeInTheDocument();
    expect(screen.getByText('BuyMeACoffeeDialog')).toBeInTheDocument();
  });
});
