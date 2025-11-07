import { getBlogs } from '../../../../src/blogs/getBlogs';
import { getMetaByBlogId } from '../../../../src/utils/getMetaByBlogId';
import { BlogDetail } from '../../../../components/BlogDetail';

interface PageParam {
  blogId: string;
}

const loadBlogData = async (blogId: string) => {
  const meta = await getMetaByBlogId(blogId);
  if (!meta) {
    throw new Error('No blog found.');
  }
  const loadedModule = await import(`../../../../src/blogs/mdx/${blogId}.mdx`);
  const Component = loadedModule.default;
  return {
    meta,
    Component,
  };
};

const Page = async ({ params }: { params: Promise<PageParam> }) => {
  const { blogId } = await params;
  const { meta, Component } = await loadBlogData(blogId);
  return <BlogDetail meta={meta} Component={Component} />;
};

export const generateStaticParams = async (): Promise<PageParam[]> => {
  const blogs = await getBlogs();
  return blogs
    .filter((blog) => !blog.link)
    .map((blog) => {
      return { blogId: blog.id };
    });
};

export default Page;
