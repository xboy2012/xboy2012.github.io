import { blogs } from '../../../../src/blogs';
import { getMetaByBlogId } from '../../../../src/utils/getMetaByBlogId';
import { BlogDetail } from '../../../../components/Blog/BlogDetail';

interface PageParam {
  blogId: string;
}

const loadBlogData = async (blogId: string) => {
  const meta = getMetaByBlogId(blogId);
  if (!meta) {
    throw Error('No blog found.');
  }
  const Component = (await import(`../../../../src/blogs/mdx/${blogId}.mdx`))
    .default;
  return {
    meta,
    Component,
  };
};

const Page = async ({ params: { blogId } }: { params: PageParam }) => {
  const { meta, Component } = await loadBlogData(blogId);
  return <BlogDetail meta={meta} Component={Component} />;
};

export const generateStaticParams = async (): Promise<PageParam[]> => {
  return blogs
    .filter((blog) => !blog.link)
    .map((blog) => {
      return { blogId: blog.id };
    });
};

export default Page;
