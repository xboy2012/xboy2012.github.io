import { useCallback, useState } from 'react';
import cx from 'classnames';
import { ChevronDown } from '../Icons/ChevronDown';
import type { ProjectCategory } from '../../src/types';

type Category = ProjectCategory | 'All';

const categories: Category[] = [
  'All',
  'Web design',
  'Applications',
  'Web development',
];

export const ProjectFilter = ({
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
    <>
      <ul className="hidden lg:flex justify-start items-center gap-[25px] pl-[5px] mb-[30px]">
        {categories.map((category) => {
          return (
            <li key={category}>
              <button
                className={cx(
                  'block text-5 bg-none border-none cursor-pointer transition-all duration-250 ease-default',
                  curCategory === category
                    ? 'text-orangeYellowCrayola'
                    : 'text-lightGray70 hover:text-lightGray70',
                )}
                onClick={() => {
                  handleCategorySelect(category);
                }}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>

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
          {categories.map((category, i) => {
            return (
              <li key={category}>
                <button
                  className={cx(
                    'block bg-eerieBlack2 border-none hover:bg-eerieBlack3 text-lightGray text-left',
                    'cursor-pointer text-6 font-300 capitalize w-full py-2 px-2.5 rounded-lg',
                  )}
                  onClick={() => {
                    handleCategorySelect(category);
                  }}
                >
                  {category}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
