interface PageParam {
  blogId: string;
}

const getCmp = async (blogId: string) => {
  return (await import(`../../../src/blogs/${blogId}.mdx`)).default;
};

const Page = async ({ params: { blogId } }: { params: PageParam }) => {
  const Cmp = await getCmp(blogId);
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
