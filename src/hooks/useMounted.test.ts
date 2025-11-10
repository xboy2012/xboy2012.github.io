import { useEffect } from 'react';
import { renderHook } from '@testing-library/react';
import { useMounted } from './useMounted';

describe('useMounted', () => {
  it('renders correctly', () => {
    const values: boolean[] = [];
    const record = (value: boolean) => {
      values.push(value);
    };

    renderHook(() => {
      const mounted = useMounted();
      useEffect(() => {
        record(mounted);
      }, [mounted]);
    });

    expect(values).toEqual([false, true]);
  });
});
