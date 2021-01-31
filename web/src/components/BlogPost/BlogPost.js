import { Link, routes } from '@redwoodjs/router'
import Moment from 'moment'

const BlogPost = ({ post }) => {
  return (
    <article key={post.id}>
      <header>
        <h2>
          <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
        </h2>
      </header>
      <p>{post.body}</p>
      <div>Posted at: {Moment(Date(post.createdAt)).format('MM-DD-YYYY')}</div>
    </article>
  )
}

export default BlogPost
