import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import type { ReactElement } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { defineJsonLD } from './defineJsonLD';

jest.mock('next/navigation', () => {
  return {
    useServerInsertedHTML: jest.fn(),
  };
});

describe('defineJsonLD() test', () => {
  test('should work as expected', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let json: any;

    jest.mocked(useServerInsertedHTML).mockImplementation((callback) => {
      const element = callback() as ReactElement;
      json = JSON.parse(element.props.dangerouslySetInnerHTML.__html);
    });

    const mockGetData = jest.fn(() => ({ a: 1, b: 2 }));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const JsonLD = defineJsonLD<any>(mockGetData);

    render(<JsonLD />);

    expect(json).toEqual({ a: 1, b: 2 });
  });
});
