'use client';
import { useCallback, useMemo, useState } from 'react';
import cx from 'classnames';
import { ChevronDown } from '../../../../components/Icons/ChevronDown';
import { EyeOutline } from '../../../../components/Icons/EyeOutline';
import { ArticleTitle } from '../../../../components/ArticleTitle';
import type { ProjectCategory } from '../../../../src/types';
import { projects } from '../../../../src/projects';

type Category = ProjectCategory | 'All';

const categories: Category[] = [
  'All',
  'Web design',
  'Applications',
  'Web development',
];

export default function Portfolio() {
  const [isSelecting, setIsSelecting] = useState(false);
  const [curCategory, setCurCategory] = useState<Category>('All');

  const handleSelectClick = useCallback(() => {
    setIsSelecting((isSelecting) => !isSelecting);
  }, []);

  const handleCategorySelect = useCallback((category: Category) => {
    setCurCategory(category);
    setIsSelecting(false);
  }, []);

  const filteredProjects = useMemo(() => {
    if (curCategory === 'All') {
      return projects;
    }
    return projects.filter((project) => project.category === curCategory);
  }, [curCategory]);

  return (
    <article className="animate-fade">
      <ArticleTitle title="Portfolio" />
      <section className="projects">
        <ul className="hidden lg:flex justify-start items-center gap-[25px] pl-[5px] mb-[30px]">
          {categories.map((category, i) => {
            return (
              <li key={category}>
                <button
                  className={cx(
                    'text-5 transition-all duration-250 ease-default',
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
              'bg-eerieBlack2 text-lightGray',
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
                      'bg-eerieBlack2 hover:bg-eerieBlack3 text-lightGray',
                      'text-6 font-300 capitalize w-full py-2 px-2.5 rounded-lg',
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

        <ul className="grid grid-cols-1fr gap-7.5 mb-2.5 lg:grid-cols-1fr1fr xl:grid-cols-r3_1fr">
          {filteredProjects.map(({ id, category, link, title, image }) => {
            return (
              <li key={id} className="group animate-scaleUp">
                <a href={link} className="w-full">
                  <figure
                    className={cx(
                      'relative rounded-2xl overflow-hidden mb-[15px]',
                      'w-full h-[200px] sm:h-auto',
                    )}
                  >
                    <div
                      className={cx(
                        'absolute top-0 left-0 w-full h-full bg-transparent z-1',
                        'transition-all duration-250 ease-default',
                        'group-hover:bg-overlay2',
                      )}
                    />
                    <div
                      className={cx(
                        'bg-jet text-orangeYellowCrayola',
                        'absolute top-1/2 left-1/2 text-xl p-[18px] rounded-xl z-1',
                        'transition-all duration-250 ease-default',
                        '-translate-x-1/2 -translate-y-1/2 scale-80 opacity-0',
                        'group-hover:scale-100 group-hover:opacity-100',
                      )}
                    >
                      <EyeOutline />
                    </div>

                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className={cx(
                        'w-full h-full object-cover',
                        'transition-all duration-250 ease-default group-hover:scale-110',
                      )}
                    />
                  </figure>

                  <h3 className="ml-2.5 text-white2 text-5 font-400 capitalize leading-[1.3]">
                    {title}
                  </h3>

                  <p className="ml-2.5 text-lightGray70 text-6 font-300">
                    {category}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}
