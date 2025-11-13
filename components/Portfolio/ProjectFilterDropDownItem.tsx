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
          'block border-none bg-eerieBlack2 text-left text-lightGray hover:bg-eerieBlack3',
          'w-full cursor-pointer rounded-lg px-2.5 py-2 text-3.5 font-300 capitalize md:text-4',
        )}
        onClick={handleSelect}
      >
        {category}
      </button>
    </li>
  );
};
