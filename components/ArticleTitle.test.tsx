import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ArticleTitle } from './ArticleTitle';

describe('should render as expected', () => {
  test('should render the component', () => {
    const text = Math.random().toString(36).substring(2);
    render(<ArticleTitle title={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
