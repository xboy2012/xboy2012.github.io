import { useCallback, useState } from 'react';
import { cx } from '../../src/utils/cx';
import { ChevronDown } from '../Icons/ChevronDown';
import { ProjectFilterDropDownItem } from './ProjectFilterDropDownItem';
import type { Category } from './types';
import { categories } from './categories';
import { useMounted } from '../../src/hooks/useMounted';

export const ProjectFilterDropDown = ({
  category: curCategory,
  onChange,
}: {
  category: Category;
  onChange: (category: Category) => void;
}) => {
  const mounted = useMounted();
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
    <div
      hidden={!mounted}
      className="relative mb-6 block lg:hidden print:hidden no-js:!hidden"
    >
      <button
        className={cx(
          'flex w-full items-center justify-between px-4 py-3',
          'cursor-pointer bg-eerieBlack2 text-left text-lightGray',
          'rounded-3.5 border border-solid border-jet text-3.5 font-300 md:text-4',
        )}
        onClick={handleSelectClick}
        title="Click to select category"
      >
        <div>{curCategory}</div>

        <div className={isSelecting ? 'rotate-180' : ''}>
          <ChevronDown />
        </div>
      </button>

      <ul
        className={cx(
          'absolute z-2 w-full bg-eerieBlack2 p-1.5',
          'rounded-3.5 border border-solid border-jet',
          isSelecting
            ? 'pointer-events-auto visible opacity-100'
            : 'pointer-events-none invisible opacity-0',
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
