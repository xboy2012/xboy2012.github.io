import { useCallback, useState } from 'react';
import cx from 'classnames';
import { ChevronDown } from '../Icons/ChevronDown';
import { ProjectFilterDropDownItem } from './ProjectFilterDropDownItem';
import type { Category } from './types';
import { categories } from './categories';

export const ProjectFilterDropDown = ({
  category: curCategory,
  onChange,
}: {
  category: Category;
  onChange: (category: Category) => void;
}) => {
  const [isSelecting, setIsSelecting] = useState(false);

  const handleSelectClick = useCallback(() => {
    setIsSelecting((isSelecting) => !isSelecting);
  }, []);

  const handleCategorySelect = useCallback(
    (category: Category) => {
      onChange(category);
      setIsSelecting(false);
    },
    [onChange],
  );

  return (
    <div className="relative mb-[25px] lg:hidden">
      <button
        className={cx(
          'flex justify-between items-center w-full py-3 px-4',
          'bg-eerieBlack2 text-lightGray text-left cursor-pointer',
          'border border-solid border-jet rounded-[14px] text-6 font-300',
        )}
        onClick={handleSelectClick}
      >
        <div className="select-value">{curCategory}</div>

        <div className={isSelecting ? 'rotate-180' : ''}>
          <ChevronDown />
        </div>
      </button>

      <ul
        className={cx(
          'bg-eerieBlack2 absolute w-full p-1.5 z-[2]',
          'border border-solid border-jet rounded-[14px]',
          isSelecting
            ? 'opacity-100 visible pointer-events-auto'
            : 'opacity-0 invisible pointer-events-none',
        )}
        style={{
          top: 'calc(100% + 6px)',
          transition: '0.15s ease-in-out',
        }}
      >
        {categories.map((category) => {
          return (
            <ProjectFilterDropDownItem
              key={category}
              category={category}
              onSelect={handleCategorySelect}
            />
          );
        })}
      </ul>
    </div>
  );
};
