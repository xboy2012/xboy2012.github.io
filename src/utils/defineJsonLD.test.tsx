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

    const f1 = jest.fn(() => ({ a: 1, b: 2 }));
    const f2 = jest.fn(() => ({ b: 3, c: 4 }));
    const f3 = jest.fn(() => ({ c: 5, a: 6 }));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const JsonLD = defineJsonLD<any>(f1, f2, f3);

    render(<JsonLD />);
    render(<JsonLD />);

    expect(json).toEqual({ a: 6, b: 3, c: 5 });

    expect(f1).toHaveBeenCalledTimes(1);
    expect(f2).toHaveBeenCalledTimes(1);
    expect(f3).toHaveBeenCalledTimes(1);
  });
});
