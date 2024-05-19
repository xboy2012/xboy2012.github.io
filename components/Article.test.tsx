import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Article } from './Article';

describe('should render as expected', () => {
  test('should render the component', () => {
    const text = Math.random().toString(36).substring(2);
    const children = <div>{text}</div>;
    render(<Article>{children}</Article>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
