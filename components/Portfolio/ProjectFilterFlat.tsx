import cx from 'classnames';
import { ProjectFilterFlatItem } from './ProjectFilterFlatItem';
import type { Category } from './types';
import { categories } from './categories';

export const ProjectFilterFlat = ({
  category: curCategory,
  onChange,
}: {
  category: Category;
  onChange: (category: Category) => void;
}) => {
  return (
    <ul
      className={cx(
        'hidden no-js:!hidden lg:flex',
        'justify-start items-center gap-[25px] pl-[5px] mb-[30px]',
      )}
    >
      {categories.map((category) => {
        return (
          <ProjectFilterFlatItem
            key={category}
            category={category}
            active={curCategory === category}
            onSelect={onChange}
          />
        );
      })}
    </ul>
  );
};
