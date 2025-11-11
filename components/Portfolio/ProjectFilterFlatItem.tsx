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
          'text-4 ease-default block cursor-pointer border-none bg-none transition-all duration-250',
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
