import { Blog } from '../../../../components/Blog';
import { getBlogs } from '../../../../src/blogs/getBlogs';

const BlogPage = async () => {
  const blogs = await getBlogs();
  return <Blog blogs={blogs} />;
};

export default BlogPage;
