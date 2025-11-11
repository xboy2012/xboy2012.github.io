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
        'no-js:!hidden hidden lg:flex',
        'mb-7.5 items-center justify-start gap-6 pl-1.25',
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
