import { fireEvent, render, screen } from '@testing-library/react';
import { NavBarItem } from './NavBarItem';

const mockRouter = {
  push: jest.fn(),
};

jest.mock('next/navigation', () => {
  return {
    usePathname: jest.fn(() => '/'),
    useRouter: jest.fn(() => mockRouter),
  };
});

describe('NavBarItem should work as expected', () => {
  it('should render correctly when active', () => {
    const path = '/';
    const title = Math.random().toString(36).substring(2);
    render(<NavBarItem path={path} title={title} />);
    const a = screen.getByText(title);
    expect(a).toBeInTheDocument();
    fireEvent.click(a);
    expect(mockRouter.push).not.toHaveBeenCalled();
  });

  it('should render correctly when not active', () => {
    const path = '/resume';
    const title = Math.random().toString(36).substring(2);
    render(<NavBarItem path={path} title={title} />);
    const a = screen.getByText(title);
    expect(a).toBeInTheDocument();
    fireEvent.click(a);
    expect(mockRouter.push).toHaveBeenCalled();
  });
});
