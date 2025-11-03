import { fireEvent, render, screen } from '@testing-library/react';
import { BuyMeACoffeeButton } from './BuyMeACoffeeButton';
import { isUserAgentMobile } from '../../src/utils/isUserAgentMobile';
import { useBuyMeACoffeeContext } from './BuyMeACoffeeContext';

jest.mock('../../src/utils/isUserAgentMobile', () => ({
  isUserAgentMobile: jest.fn(),
}));

jest.mock('./BuyMeACoffeeContext', () => ({
  useBuyMeACoffeeContext: jest.fn(),
}));

describe('BuyMeACoffeeButton', () => {
  let isMobile = false;
  let dialogVisible = false;
  const setDialogVisible = jest.fn((value: unknown) => {
    if (typeof value === 'function') {
      dialogVisible = value(dialogVisible);
    }
    if (typeof value === 'boolean') {
      dialogVisible = value;
    }
  });

  beforeAll(() => {
    jest.mocked(isUserAgentMobile).mockImplementation(() => isMobile);
    jest.mocked(useBuyMeACoffeeContext).mockImplementation(() => ({
      dialogVisible,
      setDialogVisible,
    }));
  });

  beforeEach(() => {
    dialogVisible = false;
  });

  test('render correctly when isMobile=true', () => {
    isMobile = true;
    render(<BuyMeACoffeeButton />);
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('href', '#');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('render correctly when isMobile=false', () => {
    isMobile = false;
    render(<BuyMeACoffeeButton />);
    const link = screen.getByRole('button');
    expect(link).toHaveAttribute('href', '#');
    expect(link).toHaveAttribute('role', 'button');
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(dialogVisible).toBe(true);
    fireEvent.click(button);
    expect(dialogVisible).toBe(false);
  });
});
