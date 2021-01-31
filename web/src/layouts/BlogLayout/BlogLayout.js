import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const BlogLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>giannelli.tech</Link>
        </h1>
        <p>the not-so-tech blog built on a tech stack</p>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
            {isAuthenticated && <li>{currentUser.email}</li>}
            {isAuthenticated && (
              <li>
                <Link to={routes.posts()}>Admin</Link>
              </li>
            )}
            <li>
              <Link onClick={isAuthenticated ? logOut : logIn}>
                {isAuthenticated ? 'Log Out' : 'Log In'}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
