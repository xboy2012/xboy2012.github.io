import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { AboutText } from './AboutText';
import { userData } from '../../src/data';

describe('<AboutText /> should render as expected', () => {
  test('renders correctly', () => {
    render(<AboutText />);
    for (const text of userData.intro) {
      expect(screen.getByText(text)).toBeInTheDocument();
    }
  });
});
