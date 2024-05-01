import { blogs } from '../../../src/blogs';
import { getMetaByBlogId } from '../../../src/utils/getMetaByBlogId';

interface PageParam {
  blogId: string;
}

const loadBlogData = async (blogId: string) => {
  const meta = getMetaByBlogId(blogId);
  if (!meta) {
    throw Error('No blog found.');
  }
  const Component = (await import(`../../../src/blogs/${blogId}.mdx`)).default;
  return {
    meta,
    Component,
  };
};

const Page = async ({ params: { blogId } }: { params: PageParam }) => {
  const { meta, Component } = await loadBlogData(blogId);
  return (
    <div className="text-white max-w-[800px] mx-auto mt-2">
      <div className="mb-2">
        <h1 className="text-xl text-orangeYellowCrayola">{meta.title}</h1>
        <p>{meta.desc}</p>
        <span className="mr-1 p-1 rounded bg-orangeYellowCrayola text-eerieBlack3">
          {meta.category}
        </span>
        <time>{meta.datetime}</time>
      </div>
      <div>
        <Component />
      </div>
    </div>
  );
};

export const generateStaticParams = async (): Promise<PageParam[]> => {
  return blogs
    .filter((blog) => !blog.link)
    .map((blog) => {
      return { blogId: blog.id };
    });
};

export default Page;
