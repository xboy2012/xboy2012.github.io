import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

interface PageParam {
  blogId: string;
}

const mdxComponents = new Map<string, ComponentType>();

const getCmp = (blogId: string) => {
  let cmp = mdxComponents.get(blogId);
  if (!cmp) {
    cmp = dynamic(
      async () => (await import(`../../../src/blogs/${blogId}.mdx`)).default,
    );
    mdxComponents.set(blogId, cmp);
  }
  return cmp;
};

const Page = async ({ params: { blogId } }: { params: PageParam }) => {
  const Cmp = getCmp(blogId);
  return (
    <div>
      <Cmp />
    </div>
  );
};

export const generateStaticParams = async (): Promise<PageParam[]> => {
  return (await import('../../../src/blogs')).blogs
    .filter((blog) => !blog.link)
    .map((blog) => {
      return { blogId: blog.id };
    });
};

export default Page;
