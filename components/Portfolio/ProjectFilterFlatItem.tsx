import { useCallback } from 'react';
import { cx } from '../../src/utils/cx';
import type { Category } from './types';

export const ProjectFilterFlatItem = ({
  category,
  active,
  onSelect,
}: {
  category: Category;
  active: boolean;
  onSelect: (category: Category) => void;
}) => {
  const handleSelect = useCallback(() => {
    onSelect(category);
  }, [onSelect, category]);

  return (
    <li key={category}>
      <button
        className={cx(
          'block text-5 bg-none border-none cursor-pointer transition-all duration-250 ease-default',
          active
            ? 'text-orangeYellowCrayola print:font-600'
            : 'text-lightGray70 hover:text-lightGray70',
          'print:text-inherit',
        )}
        onClick={handleSelect}
      >
        {category}
      </button>
    </li>
  );
};
