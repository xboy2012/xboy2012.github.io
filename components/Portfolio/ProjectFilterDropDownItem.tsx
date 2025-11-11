import { useCallback } from 'react';
import { cx } from '../../src/utils/cx';
import type { Category } from './types';

export const ProjectFilterDropDownItem = ({
  category,
  onSelect,
}: {
  category: Category;
  onSelect: (category: Category) => void;
}) => {
  const handleSelect = useCallback(() => {
    onSelect(category);
  }, [onSelect, category]);

  return (
    <li>
      <button
        className={cx(
          'bg-eerieBlack2 hover:bg-eerieBlack3 text-lightGray block border-none text-left',
          'text-3.5 md:text-4 font-300 w-full cursor-pointer rounded-lg px-2.5 py-2 capitalize',
        )}
        onClick={handleSelect}
      >
        {category}
      </button>
    </li>
  );
};
