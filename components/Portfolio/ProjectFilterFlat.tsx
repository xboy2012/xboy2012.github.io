import { cx } from '../../src/utils/cx';
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
      hidden
      className={cx(
        'hidden no-js:!hidden lg:flex',
        'justify-start items-center gap-6 pl-1.25 mb-7.5',
        'print:flex',
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
