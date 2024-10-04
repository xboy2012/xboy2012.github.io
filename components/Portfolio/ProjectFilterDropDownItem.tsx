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
          'block bg-eerieBlack2 border-none hover:bg-eerieBlack3 text-lightGray text-left',
          'cursor-pointer text-6 font-300 capitalize w-full py-2 px-2.5 rounded-lg',
        )}
        onClick={handleSelect}
      >
        {category}
      </button>
    </li>
  );
};
