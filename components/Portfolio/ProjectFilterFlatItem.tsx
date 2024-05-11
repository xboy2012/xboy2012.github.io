import { useCallback } from 'react';
import cx from 'classnames';
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
            ? 'text-orangeYellowCrayola'
            : 'text-lightGray70 hover:text-lightGray70',
        )}
        onClick={handleSelect}
      >
        {category}
      </button>
    </li>
  );
};
