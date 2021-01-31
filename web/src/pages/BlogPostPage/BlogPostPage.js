import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import BlogPostCell from 'src/components/BlogPostCell'

const BlogPostPage = ({ id }) => {
  return (
    <>
      <BlogLayout>
        <BlogPostCell id={id} />
        <p>
          <Link to={routes.home()}>&gt; go home</Link>
        </p>
      </BlogLayout>
    </>
  )
}

export default BlogPostPage
