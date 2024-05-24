import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BlogDetail } from '.';
import { formatDateTime } from '../../src/utils/formatDateTime';
import type { BlogData } from '../../src/types';

describe('should render as expected', () => {
  test('should render the component', () => {
    const meta: BlogData = {
      id: `id-${Math.random().toString(36).substring(2)}`,
      title: `title-${Math.random().toString(36).substring(2)}`,
      desc: `desc-${Math.random().toString(36).substring(2)}`,
      image: `image-${Math.random().toString(36).substring(2)}`,
      datetime: '2024-01-01',
      category: `category-${Math.random().toString(36).substring(2)}`,
    };

    const content = `content-${Math.random().toString(36).substring(2)}`;

    const Component = () => {
      return <div>{content}</div>;
    };

    render(<BlogDetail meta={meta} Component={Component} />);
    expect(screen.getByText(meta.title)).toBeInTheDocument();
    expect(screen.getByText(formatDateTime(meta.datetime))).toBeInTheDocument();
    expect(screen.getByText(meta.category)).toBeInTheDocument();
  });
});
